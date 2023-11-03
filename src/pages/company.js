import React from "react"
import Layout from "../components/layout"

export default function Company() {
  return (
    <Layout>
      <h1 className="title-header-large">Company</h1>
      <p>
        At <strong>Night Owl Labs</strong>, we're more than just a software
        development firm. We're a team of creators, thinkers, and innovators.
        While we're passionate about technology, our true commitment is to the
        experiences and memories that technology can facilitate.
      </p>
      <p>
        We believe that the best products come from a place of understanding and
        purpose. That's why we dive deep into the needs and aspirations of our
        clients and their users to deliver solutions that not only meet but
        exceed expectations.
      </p>
      <hr />
      <blockquote>
        <h2>Our Vision</h2>
        <p>
          "Our vision is to revolutionize how people interact with technology,
          making every engagement an opportunity for joy and wonder. We aim to
          set new standards in user experience, crafting products that aren’t
          merely tools but become integral, cherished parts of daily life."
        </p>
      </blockquote>
      <blockquote>
        <h2>Our Mission</h2>
        <p>
          "Our mission is to innovate and elevate everyday interactions through
          our products, ensuring that every user experience is imbued with
          creativity, joy, and simplicity. We are dedicated to designing
          solutions that resonate with our users, bringing a touch of excitement
          to the mundane and making the ordinary extraordinary."
        </p>
      </blockquote>
      <hr />
      <p>
        Interested in learning more about how we work or want to discuss a
        project?
      </p>
      <p>
        Feel free to <a href="/contact">Contact</a> us, or take a look at our{" "}
        <a href="/projects">Projects</a> to see the dreams we've turned into
        reality.
      </p>
    </Layout>
  )
}
