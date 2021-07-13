import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="meta">
        2021 @{" "}
        <a href="https://blinkdigital.in/" target="_blank">
          Blink Digital
        </a>{" "}
      </div>
      <div className="social">
        <a
          href="https://www.facebook.com/BlinkDigitalIndia/"
          target="_blank"
          className="link"
        >
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.instagram.com/blink.digital/"
          target="_blank"
          className="link"
        >
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a
          href="https://twitter.com/blink_india/"
          target="_blank"
          className="link"
        >
          <i className="fa fa-twitter" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  );
}
