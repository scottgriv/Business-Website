import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="title-header">Welcome to Night Owl Labs! 👋</h1>
      <p>
        Since our inception in 2014, <b>Night Owl Labs</b> has been at the
        forefront of digital innovation. We offer a wide range of consulting{" "}
        <a href="/services">Services</a> and also publish our own software{" "}
        <a href="/products">Products</a>.
      </p>

      <p>
        We pride ourselves on crafting state-of-the-art mobile apps, websites,
        and software solutions. Our creations are not only functional but also
        aesthetically pleasing. At <b>Night Owl Labs</b> , we believe that the
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
        Community is integral to our ethos. At <b>Night Owl Labs</b>, we
        actively contribute to the open-source sphere, sharing projects and
        tools on platforms like{" "}
        <a
          href="https://github.com/Night-Owl-Labs"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        to assist others in their tech endeavors. We also post content on{" "}
        <a
          href="https://www.linkedin.com/company/nightowllabs"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{" "}
        and{" "}
        <a
          href="https://twitter.com/night_owl_labs"
          target="_blank"
          rel="noreferrer"
        >
          X
        </a>
        . Beyond being developers, we are educators and consultants dedicated to
        empowering others with knowledge and expertise.
      </p>

      <p>
        Whether you're in search of cutting-edge digital solutions, perceptive
        consulting, or enlightening content to elevate your venture,{" "}
        <b>Night Owl Labs</b> stands as your trusted ally.{" "}
      </p>

      <p>Dive into our offerings, and let's build the future together.</p>
    </Layout>
  )
}
