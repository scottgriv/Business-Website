import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="title-header-small">
        🌙 🦉 Welcome to Night Owl Labs! 👋
      </h1>
      <p>
        Since our inception in 2014, <b>Night Owl Labs</b> has been at the
        forefront of digital innovation.
        <br />
        <br />
        <li>
          📱 We publish our own Software{" "}
          <a className="regular-link" href="/products">
            Products
          </a>
          .
        </li>
        <li>
          👨🏻‍💻 We offer a wide range of Software and Business Consulting{" "}
          <a className="regular-link" href="/services">
            Services
          </a>
          .
        </li>
        <li>
          🎨 We've worked on a large number of Development, Design, and Business {" "}
          <a className="regular-link" href="/projects">
            Projects
          </a>
          .
        </li>
      </p>

      <p>
        We pride ourselves on crafting state-of-the-art mobile apps, websites,
        and software solutions. Our creations are not only functional but also
        aesthetically pleasing. At <b>Night Owl Labs</b>, we believe that the
        future of software lies in sound design and usability, coupled with
        traditional pillars of reliability, accessibility, and scalability.
      </p>

      <p>
        Our dedicated team of experts specializes in various domains: software
        development, architecture, infrastructure, project management, and UI/UX
        design. This ensures that every product we develop offers an intuitive
        and user-friendly experience. But our expertise doesn't end at product
        development. We're passionate about aiding businesses to thrive in
        today's digital realm. Through custom marketing and business strategies,
        we've aided countless clients in realizing their ambitions and enhancing
        their digital presence.
      </p>
      <p>
        Whether you're in search of cutting-edge digital solutions, perceptive
        consulting, or enlightening content to elevate your venture,{" "}
        <b>Night Owl Labs</b> stands as your trusted ally.{" "}
      </p>

      <p>
        <b>
          <i>Dive into our offerings, and let's build the future together.</i>
        </b>
      </p>
      <p>
        Don't hesitate to{" "}
        <a className="regular-link" href="/contact">
          Contact
        </a>{" "}
        us to discuss what <b>NOL</b> can do for you!
      </p>
    </Layout>
  )
}
