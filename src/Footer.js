import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="GithubLink">
        <a
          href="https://github.com/renatacdp/weather-website"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Renata Pinto
      </div>
    </div>
  );
}
