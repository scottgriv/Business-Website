import React, { useEffect } from "react";
import "../components/layout.css"

export default function ComingSoon() {
  useEffect(() => {
    // Store the original body background color
    const originalBackgroundColor = document.body.style.backgroundColor;

    // Set the body background color to yellow
    document.body.style.backgroundColor = "#FCDB3A";

    // Cleanup function to revert the body background color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor;
    };
  }, []);

  return (
      <div className="coming-soon-container">
        <img
          src="/images/company/nol-icon-transparent-no-edge.png"
          alt="Company Logo"
          style={{ maxWidth: "250px", marginBottom: "20px" }}
        />
        <h1>Whoa! Are you as excited as we are for our new software drop?!</h1>
        <h2>Let's be honest, probably not... regardless, check back soon to see what it is!</h2>
        <p><i><b>- Team Night Owl Labs</b></i></p>
        <p>In the meantime, explore our <a href="/products" style={{ color: "#000", textDecoration: "underline" }}>
         current product list!
        </a></p>
      </div>
  );
}
