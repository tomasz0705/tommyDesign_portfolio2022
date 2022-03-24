import React from "react";

function Header() {
  return (
    <header className="header">
      <h1 className="header__nameTitle">tommydesign</h1>
      <p className="header__jobTitle">
        <span>FRONTEND DEVELOPER</span>
      </p>
      <svg
        width="262"
        height="203"
        viewBox="0 0 262 203"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
        className="draw"
          // fillRule="evenodd"
          // clipRule="evenodd"
          d="M17 19C17 15.134 20.134 12 24 12H145.908H157.323H171.338C181.012 12 190.59 14.315 199.527 18.8128C208.465 23.3106 216.585 29.9031 223.425 38.2139C230.265 46.5248 235.691 56.3912 239.393 67.2498C243.095 78.1085 245 89.7467 245 101.5C245 113.253 243.095 124.892 239.393 135.75C235.691 146.609 230.265 156.475 223.425 164.786C216.585 173.097 208.465 179.689 199.528 184.187C190.59 188.685 181.012 191 171.338 191H145.908V41.3277H97.6769V184C97.6769 187.866 94.5429 191 90.6769 191H79.2461C75.3801 191 72.2461 187.866 72.2461 184V41.3277H24C20.134 41.3277 17 38.1937 17 34.3277V19ZM189.315 59.9464L197.289 88.6592H223.093L202.217 106.405L210.191 135.118L189.315 117.372L168.44 135.118L176.414 106.405L155.538 88.6592H181.342L189.315 59.9464Z"
          // fill="#4595FF"
        />
      </svg>
      <span className="header__scrollDownIcon">
        <button>
          <span className="dot"></span>
        </button>
      </span>
    </header>
  );
}

export default Header;
