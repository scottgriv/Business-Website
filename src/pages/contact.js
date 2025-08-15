import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icons/icon.js"

export default function Contact() {
  return (
    <Layout>
      <h1 className="title-header-large">Contact Night Owl Labs</h1>
      <p>
        We'd love to hear from you! Whether you have questions, feedback, or any
        inquiries, feel free to reach out to us through the following channels:
      </p>
      <hr />
      <h2>Email us!</h2>
      <p>For general inquiries or consulting services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="mailto:info@nightowllabs.io"
        target="_blank"
        rel="noreferrer"
      >
        info@nightowllabs.io
      </a>
      <p>For support around our products and prior provided services:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="mailto:support@nightowllabs.io"
        target="_blank"
        rel="noreferrer"
      >
        support@nightowllabs.io
      </a>
      <p>For questions regarding your invoice:</p>
      <i className="fa-regular fa-envelope"></i>&nbsp;
      <a
        className="regular-link"
        href="mailto:billing@nightowllabs.io"
        target="_blank"
        rel="noreferrer"
      >
        billing@nightowllabs.io
      </a>
      <br />
      <h2>Connect with us!</h2>
      <p>Follow or contact us on our social platforms:</p>
      <i className="fab fa-github"></i>&nbsp;
      <a
        className="regular-link"
        href="https://github.com/Night-Owl-Labs"
        target="_blank"
        rel="noreferrer"
      >
        Night Owl Labs
      </a>
      <br /> <br />
      <i className="fab fa-linkedin"></i>&nbsp;
      <a
        className="regular-link"
        href="https://www.linkedin.com/company/nightowllabs"
        target="_blank"
        rel="noreferrer"
      >
        Night Owl Labs
      </a>
      <br /> <br />
      <i className="fa-brands fa-x-twitter"></i>&nbsp;
      <a
        className="regular-link"
        href="https://twitter.com/night_owl_labs"
        target="_blank"
        rel="noreferrer"
      >
        @Night_Owl_Labs
      </a>
      <br /> <br />
      <i className="fa-brands fa-instagram"></i>&nbsp;
      <a
        className="regular-link"
        href="https://www.instagram.com/night.owl.labs"
        target="_blank"
        rel="noreferrer"
      >
        @Night.Owl.Labs
      </a>
      <br />
      <h2>Share our website!</h2>
      <p>
        Know somebody that may need our help? Share the Night Owl Labs website
        with others:
      </p>
      <div class="about-header-container">
        <div className="social-links-owl">
          <Icon name="NOL" />
        </div>
        <a
          className="regular-link"
          href="https://nightowllabs.io"
          target="_blank"
          rel="noreferrer"
        >
          nightowllabs.io
        </a>
      </div>
      <br />
      <br />
      <hr />
      <div className="closing-wrapper">
        <p>
          Like this website? Feel free to...
          <br />
          <br />
          <i id="github-fork" className="fa-solid fa-code-fork fa-bounce"></i>
          &nbsp;&nbsp;
          <a
            className="regular-link"
            href="https://github.com/scottgriv/business-website"
            target="_blank"
            rel="noreferrer"
          >
            Fork and Star it on GitHub!
          </a>
          &nbsp;&nbsp;
          <i id="github-star" className="fa-solid fa-star fa-bounce"></i>
        </p>
        <a
          href="https://github.com/Night-Owl-Labs"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="/images/company/nol-footer.png"
            alt="Night Owl Labs"
            title="Night Owl Labs"
            className="landing-logo"
            id="landing-footer"
          />
        </a>
      </div>
    </Layout>
  )
}
