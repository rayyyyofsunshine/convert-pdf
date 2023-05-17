from flask import send_file, request, Flask
from flask_cors import CORS, cross_origin
from dotenv import load_dotenv
from io import BytesIO
from PIL import Image
import urllib.request
import requests
import zipfile
import pyrebase
import fitz
import os

load_dotenv()

firebase_config = {
    "apiKey": os.getenv("API_KEY"),
    "authDomain": os.getenv("AUTH_DOMAIN"),
    "projectId": os.getenv("PROJECT_ID"),
    "storageBucket": os.getenv("STORAGE_BUCKET"),
    "messagingSenderId": os.getenv("MESSAGING_SENDER_ID"),
    "appId": os.getenv("APP_ID"),
    "measurementId": os.getenv("MEASUREMENT_ID"),
    "databaseURL": "",
}

app = Flask(__name__)
CORS(app, supports_credentials=True)


@app.route("/api/jpg-to-pdf", methods=["POST"])
@cross_origin(supports_credentials=True)
def jpg_to_pdf():
    data = request.get_json()
    print(data)
    urls = data.get("urls")

    # Create a new PDF document
    pdf = fitz.open()

    for url in urls:
        # Download image from URL
        with urllib.request.urlopen(url) as img_url:
            img_data = img_url.read()

        # Load the image data into a PIL Image object
        img = Image.open(BytesIO(img_data))

        a4_width = 595.0  # A4 page width
        a4_height = 842.0  # A4 page height
        margin = 28.35  # 1 cm
        max_width = a4_width - 2 * margin
        max_height = a4_height - 2 * margin

        # Resize the image while maintaining its aspect ratio
        img.thumbnail((max_width, max_height))

        # Add new page with A4 dimensions
        page = pdf.new_page(width=a4_width, height=a4_height)

        # Get the dimensions of the resized image
        img_width, img_height = img.size

        # Calculate position to center image
        x_pos = (a4_width - img_width) / 2
        y_pos = (a4_height - img_height) / 2

        # Insert image into PDF page
        page.insert_image(
            fitz.Rect(x_pos, y_pos, x_pos + img.width, y_pos + img.height),
            pixmap=fitz.Pixmap(BytesIO(img_data)),
        )

    # Save PDF to file and return download URL
    output_buffer = BytesIO()
    pdf.save(output_buffer)

    # Save PDF to file
    output_buffer.seek(0)  # Reset the buffer's position to the beginning
    with open("output.pdf", "wb") as file:
        file.write(output_buffer.read())

    # Close the buffer
    output_buffer.close()

    return "Uploaded"

    # return send_file(
    #     output_buffer,
    #     download_name='output.pdf',
    #     as_attachment=True,
    #     mimetype='application/pdf'
    # )


@app.route("/api/pdf-to-jpg", methods=["POST"])
@cross_origin(supports_credentials=True)
def pdf_to_jpg():
    # Get the JSON data containing URLs
    data = request.get_json()
    urls = data.get("urls")

    # Create a directory to store the images
    os.makedirs("images", exist_ok=True)

    # Download the PDF file
    response = requests.get(urls[0])
    with open("input.pdf", "wb") as f:
        f.write(response.content)

    # Open the PDF
    with fitz.open("input.pdf") as doc:
        # Calculate the number of pages
        num_pages = doc.page_count

        # Iterate over each page
        for i, page in enumerate(doc):
            # Get the page as a pixmap
            page = doc.load_page(i)
            pix = page.get_pixmap()

            # Save the pixmap as an image file
            image_path = os.path.join("images", f"file_{i}.jpg")
            pix.save(image_path)

    # Check the number of images
    print(num_pages)
    if num_pages > 1:
        # Create a zip file containing the images
        zip_data = BytesIO()
        with zipfile.ZipFile(zip_data, "w") as zipf:
            for i in range(num_pages):
                image_path = os.path.join("images", f"file_{i}.jpg")
                zipf.write(image_path, f"file_{i}.jpg")

        # Save the zip file locally
        zip_filename = "converted_images.zip"
        with open(zip_filename, "wb") as zip_file:
            zip_file.write(zip_data.getvalue())

        # Generate the download URL for the local zip file
        local_zip_url = os.path.abspath(zip_filename)

        # Clean up temporary files
        for i in range(num_pages):
            image_path = os.path.join("images", f"file_{i}.jpg")
            os.remove(image_path)

        # Upload the zip file to Firebase Storage
        firebase = pyrebase.initialize_app(firebase_config)
        storage = firebase.storage()
        storage.child("converted_images.zip").put(zip_data)

        # Generate the download URL for the zip file
        zip_url = storage.child("converted_images.zip").get_url(None)

        return zip_url
    elif num_pages == 1:
        # Generate the download URL for the single image
        image_path = os.path.abspath(os.path.join("images", "file_0.jpg"))

        # Upload the single image file to Firebase Storage
        firebase = pyrebase.initialize_app(firebase_config)
        storage = firebase.storage()
        storage.child("converted_image.jpg").put(image_path)

        # Generate the download URL for the single image
        image_url = storage.child("converted_image.jpg").get_url(None)

        # Clean up temporary files
        os.remove(image_path)

        return image_url
    else:
        return "No images found."


if __name__ == "__main__":
    app.run(debug=True)