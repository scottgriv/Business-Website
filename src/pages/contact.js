import React from "react"
import Layout from "../components/layout"

export default function Contact() {
  return (
    <Layout>
      <h1>Contact Night Owl Labs</h1>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or any
        inquiries, feel free to reach out to us through the following channels:
      </p>
      <hr />
      <h2>Email</h2>
      <p>For general inquiries, support, or consulting services:</p>
      <a href="mailto:info@nightowllabs.net" target="_blank" rel="noreferrer">
        <i className="fa-regular fa-envelope"></i> info@nightowllabs.net
      </a>
      <br />
      <hr />
      <h2>Connect with us</h2>
      <p>Follow or contact us on our social platforms:</p>
      <a
        href="https://github.com/Night-Owl-Labs"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i> Night Owl Labs on GitHub
      </a>
      <br /> <br />
      <a
        href="https://www.linkedin.com/company/nightowllabs"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i> Night Owl Labs on LinkedIn
      </a>
      <br /> <br />
      <a
        href="https://twitter.com/night_owl_labs"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-x-twitter"></i> @Night_Owl_Labs on X
      </a>
      <br />
      <hr />
      <div className="social-links-wrapper">
          <div className="social-links">
      <img
          src="/images/company/nol-icon-rounded.png"
          alt="Night Owl Labs"
          title="Night Owl Labs"
          className="company-thumbnail-contact"
        />
        </div></div>
    </Layout>
  )
}
