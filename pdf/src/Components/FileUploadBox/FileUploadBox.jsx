import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import useUploadFiles from "../../Helper/useUploadFiles";

const FileUploadBox = ({ route, image, bgColor, file }) => {
  let fileInputRef = useRef(null);
  const { isUploading, progress, uploadFiles, downloadLink } = useUploadFiles();

  const handleFileUpload = (e) => {
    e.preventDefault();
    const files = fileInputRef.current.files;

    if (files.length === 0) return;
    uploadFiles(route, Array.from(files));
  };

  console.log(downloadLink);

  return (
    <div className="fileUpload-container">
      <div
        style={{
          display: isUploading ? "none" : "block",
          backgroundColor: bgColor,
        }}
        className="fileUpload-container--wrapper"
      >
        <form
          onSubmit={handleFileUpload}
          action="/"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="fileUpload-container__content">
            <div className="fileUpload-container__content__img">{image}</div>
            <div className="fileUpload-container__content__row">
              <div className="fileUpload-container__content__input">
                <label className="file-input">
                  <input
                    ref={fileInputRef}
                    // mutiple
                    className="picker-input"
                    type="file"
                    accept="application/pdf"
                    // accept="image/png, image/gif, image/jpeg, image/jpg"
                  />
                  <FontAwesomeIcon className="icon" icon={faFilePdf} />
                  <span>Choose Files</span>
                </label>
              </div>
              <div className="fileUpload-container__content__btn">
                <button type="submit">
                  <FontAwesomeIcon className="icon" icon={faChevronUp} />
                </button>
              </div>
            </div>
            <p>or drop {file} here</p>
          </div>
        </form>
      </div>
      <div
        style={{ display: isUploading ? "flex" : "none" }}
        className="fileUpload-container__progress"
      >
        <div
          style={{ width: `${progress}%`, background: bgColor }}
          className="progress-bar"
        ></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 60 60"
          fill={bgColor}
        >
          <path d="M7,51 L7,58 C7,58.5522847 7.44771525,59 8,59 L52,59 C52.5522847,59 53,58.5522847 53,58 L53,13 L41,13 L41,12 L41,1 L8,1 C7.44771525,1 7,1.44771525 7,2 L7,35 L33,35 C34.1045695,35 35,35.8954305 35,37 L35,49 C35,50.1045695 34.1045695,51 33,51 L7,51 Z M6,51 L4,51 C2.8954305,51 2,50.1045695 2,49 L2,37 C2,35.8954305 2.8954305,35 4,35 L6,35 L6,2 C6,0.8954305 6.8954305,2.02906125e-16 8,0 L42,0 L54,12 L54,58 C54,59.1045695 53.1045695,60 52,60 L8,60 C6.8954305,60 6,59.1045695 6,58 L6,51 Z M52.5857864,12 L42,1.41421356 L42,12 L52.5857864,12 Z M17,24 L43,24 L43,25 L17,25 L17,24 Z M17,30 L43,30 L43,31 L17,31 L17,30 Z M37,36 L43,36 L43,37 L37,37 L37,36 Z M13.3818681,41.119015 C13.3818681,40.0838982 13.0901586,39.3052922 12.5067308,38.7831737 C11.9233029,38.2610553 11.0713426,38 9.95082418,38 L7,38 L7,48 L8.95879121,48 L8.95879121,44.4432285 L9.79917582,44.4432285 C10.9449691,44.4432285 11.8285225,44.1582336 12.4498626,43.5882353 C13.0712027,43.018237 13.3818681,42.1951718 13.3818681,41.119015 Z M8.95879121,42.7058824 L8.95879121,39.7373461 L9.84972527,39.7373461 C10.3847096,39.7373461 10.7775171,39.855904 11.0281593,40.0930233 C11.2788016,40.3301425 11.4041209,40.6972159 11.4041209,41.1942544 C11.4041209,41.686733 11.2545803,42.0617862 10.9554945,42.3194254 C10.6564088,42.5770647 10.2056807,42.7058824 9.6032967,42.7058824 L8.95879121,42.7058824 Z M22.7903846,42.9042408 C22.7903846,41.3584054 22.3733558,40.1545871 21.5392857,39.2927497 C20.7052156,38.4309122 19.534165,38 18.0260989,38 L15.1258242,38 L15.1258242,48 L17.7417582,48 C19.3761986,48 20.6262319,47.5622479 21.4918956,46.6867305 C22.3575593,45.8112131 22.7903846,44.5503958 22.7903846,42.9042408 Z M20.7557692,42.9589603 C20.7557692,45.1523137 19.8121889,46.248974 17.925,46.248974 L17.0846154,46.248974 L17.0846154,39.7373461 L18.1271978,39.7373461 C19.8795875,39.7373461 20.7557692,40.8112068 20.7557692,42.9589603 Z M26.6321429,48 L26.6321429,44.0465116 L29.7662088,44.0465116 L29.7662088,42.3160055 L26.6321429,42.3160055 L26.6321429,39.7373461 L30,39.7373461 L30,38 L24.7049451,38 L24.7049451,48 L26.6321429,48 Z M37,42 L43,42 L43,43 L37,43 L37,42 Z M37,48 L43,48 L43,49 L37,49 L37,48 Z"></path>
        </svg>
        <p>Uploading</p>
      </div>
    </div>
  );
};

export default FileUploadBox;