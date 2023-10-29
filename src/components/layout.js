import React, { useEffect } from 'react';
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {

  useEffect(() => {
    const handleScroll = () => {
      var scrolled = window.pageYOffset;
      var parallaxAmount = 0.3; // Adjust this for stronger or weaker parallax

      // Adjust these values as necessary
      var paddingOffset = 50; // Your body's padding
      var fadeStart = paddingOffset; // Start fade-out after 50 pixels (accounting for padding)
      var fadeEnd = 250; // End fade-out after 500 pixels of actual scrolling (added to the 50px padding)
      var opacity = 1 - Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart));

      var headlogo = document.getElementById("headlogo");
      headlogo.style.transform = "translateY(" + -scrolled * parallaxAmount + "px)";
      headlogo.style.opacity = opacity;
    };
    
    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="pagecontent">
      <header>
        <Header />
      </header>
      <div id="contentarea">
        <main>{children}</main>
      </div>

      <footer>
        <br />

        <div className="social-links-wrapper">
          <div className="social-links">
            <a
              href="mailto:info@nightowllabs.net"
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
            <a
              href="https://twitter.com/night_owl_labs"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-solid fa-code-fork"></i>{" "}
            </a>
          </div>
        </div>
        <div id="pagefoot">
          Copyright © 2014-{new Date().getFullYear()} Night Owl Labs, LLC. - All
          Rights Reserved.
        </div>
      </footer>
    </div>
  )
}

export default Layout
