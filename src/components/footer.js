import React from "react"
import { CONFIG } from "./config.js"
import Icon from './icons/icon.js'; // Corrected import statement

const Footer = () => {
  const showFooter = CONFIG.showFooter

  return (
    <>
      <div id="pagefoot" style={{ display: showFooter ? "block" : "none" }}>
        <div className="social-links-wrapper">
          <div className="social-links-footer">
            <a
              href="mailto:info@nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a
              href="https://github.com/Night-Owl-Labs"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/nightowllabs"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/night_owl_labs"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://prgportfolio.com" target="_blank" rel="noreferrer">
              <Icon name="PRG" />
            </a>
            <a
              href="https://github.com/scottgriv/business-website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-fork"></i>{" "}
            </a>
            <a
              href="https://github.com/scottgriv/business-website"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-star"></i>{" "}
            </a>
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2014-{new Date().getFullYear()} Night Owl Labs, LLC. - All
          Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
