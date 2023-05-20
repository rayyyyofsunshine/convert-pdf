import React from "react";

const Converting = ({ bgColor, toggle }) => {
  return (
    <div className="converting-container">
      <div
        style={{
          backgroundColor: bgColor,
          borderRadius: toggle ? "4px 4px 0 0" : "",
        }}
        className="animate-progress-bar"
      ></div>
      <svg
        width="136"
        height="136"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="41.887"
          width="75.046"
          height="75.007"
          rx="4.715"
          transform="rotate(-21.036 1 41.887)"
          fill="#E5EEFF"
        />
        <rect
          width="75.274"
          height="75.249"
          rx="4.204"
          transform="rotate(30.638 -7.216 137.832) skewX(-.035)"
          fill="#FFF1CC"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M46.014 119.779a.83.83 0 111.175-1.174l1.763 1.761a.83.83 0 11-1.176 1.175l-1.763-1.762zm4.112 4.11a.83.83 0 111.175-1.174l1.763 1.761a.83.83 0 11-1.175 1.175l-1.763-1.762zm-4.112 1.762a.832.832 0 001.175 0l1.763-1.762a.83.83 0 10-1.176-1.174l-1.763 1.761a.83.83 0 000 1.175zm5.287-4.11a.83.83 0 11-1.175-1.174l1.763-1.762a.832.832 0 011.175 1.175l-1.763 1.761zM129.129 31.76a3.872 3.872 0 01-3.874 3.872 3.872 3.872 0 110-7.742 3.872 3.872 0 013.874 3.87zm-5.811.001a1.936 1.936 0 103.872-.001 1.936 1.936 0 00-3.872.001z"
          fill="#FFB400"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.732 10.418a.831.831 0 011.176-1.175l1.763 1.762a.831.831 0 01-1.176 1.174l-1.763-1.761zm4.113 4.11a.831.831 0 011.175-1.175l1.763 1.762a.831.831 0 01-1.175 1.175l-1.763-1.762zm-4.113 1.761a.832.832 0 001.176 0l1.763-1.761a.831.831 0 00-1.176-1.175l-1.763 1.762a.831.831 0 000 1.174zm5.288-4.11a.831.831 0 01-1.175-1.174l1.763-1.761a.831.831 0 011.175 1.174l-1.763 1.762zM8.747 93.4a3.872 3.872 0 01-3.873 3.872A3.872 3.872 0 011 93.4a3.872 3.872 0 013.874-3.871 3.872 3.872 0 013.873 3.87zm-5.81.001a1.936 1.936 0 103.871-.001 1.936 1.936 0 00-3.872.001z"
          fill="#05F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.996 22.053h46.108c.93 0 1.823.372 2.478 1.034L98.727 36.36a3.482 3.482 0 011.008 2.45v63.354a3.485 3.485 0 01-3.486 3.483H36.996a3.485 3.485 0 01-3.486-3.483V25.536a3.484 3.484 0 013.486-3.483z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M83.104 22.053H36.996a3.484 3.484 0 00-3.486 3.483v76.629a3.485 3.485 0 003.486 3.483H96.25a3.485 3.485 0 003.485-3.483V38.811c0-.917-.362-1.798-1.008-2.45L85.582 23.087a3.487 3.487 0 00-2.478-1.034zm-47.851 3.483c0-.961.78-1.741 1.743-1.741h45.312v15.674H97.992v-.675 63.371c0 .961-.78 1.741-1.742 1.741H36.996c-.963 0-1.743-.78-1.743-1.741V25.536zm62.36 12.191H84.05V24.074c.105.068.204.147.293.237l13.145 13.275c.045.045.087.092.126.141zM50.939 73.43c0 2.302.924 4.354 2.614 4.354s2.614-2.052 2.614-4.354-.924-4.354-2.614-4.354-2.614 2.052-2.614 4.354zm15.386 15.049c.235 0 .222-.001.174-.006-.123-.01-.474-.04 2.32-.124 3.904-.116 7.919-2.045 7.919-2.045l.062-.026.049-.02.107-.043-.52-1.465c-6.864 2.87-13.495 2.874-19.705.009l-.564 1.447c3.288 1.515 6.68 2.273 10.158 2.273zm15.945-16.16c-.132.419-.56.646-.955.505-2.945-1.036-4.943-.158-6.284 2.768a.753.753 0 01-.68.45.723.723 0 01-.33-.08c-.376-.194-.533-.671-.35-1.067 1.665-3.63 4.475-4.87 8.121-3.585.397.14.61.591.478 1.01z"
          fill="#1A1A1A"
        />
        <path
          d="M46.833 25.64c1.338-5.744 7.024-9.365 12.799-8.152a10.819 10.819 0 017.071 5.033l-3.138.229a8.033 8.033 0 00-4.392-2.637c-4.35-.962-8.658 1.781-9.621 6.128l-5.413 24.4a5.5 5.5 0 0010.74 2.379l4.901-22.094a2.547 2.547 0 00-4.972-1.101L50.12 50.957a1.392 1.392 0 01-2.718-.602l4.688-21.134a5.33 5.33 0 0110.409 2.306l-4.901 22.095a8.285 8.285 0 01-9.766 6.217c-4.48-.937-7.35-5.325-6.411-9.8l5.412-24.4z"
          fill="#1A1A1A"
        />
      </svg>
      <p>Please hold on, while your files are being converted.</p>
    </div>
  );
};

export default Converting;
