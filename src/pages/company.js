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
      <h2>Our History</h2>
      <p>
        <b>Night Owl Labs</b> was founded in 2014 by Scott Grivner and Daniel
        Volovic. Devin Olshefski was brought on as a partner in 2016. The three
        of them have been friends since grade school, and have always had a
        passion for business and technology. They started the company with the
        goal of creating a software development firm that would be able to
        create products that would resonate with users, and bring a touch of
        excitement to the mundane. Almost a decade later, they have been able to
        do just that.
      </p>
      <h2>Our Vision</h2>
      <blockquote className="block-quote">
        <p>
          "Our vision is to revolutionize how people interact with technology,
          making every engagement an opportunity for joy and wonder. We aim to
          set new standards in user experience, crafting products that aren’t
          merely tools but become integral, cherished parts of daily life."
        </p>
      </blockquote>
      <h2>Our Mission</h2>
      <blockquote className="block-quote">
        <p>
          "Our mission is to innovate and elevate everyday interactions through
          our products, ensuring that every user experience is imbued with
          creativity, joy, and simplicity. We are dedicated to designing
          solutions that resonate with our users, bringing a touch of excitement
          to the mundane and making the ordinary extraordinary."
        </p>
      </blockquote>
      <h2>Words from our Founder</h2>
      <blockquote className="block-quote">
        <p>
          "With the upcoming AI revolution at our doorstep, NOL is positioned to
          be a leader in the field of software development. We have a unique
          ability that combines cutting edge technology with a memorable user
          experience. We believe combining both of these aspects is the key to
          creating a successful product that will stand above the rest. AI may
          be able to code and design, but it can't combine the two to create a
          product that will resonate with users. That's where we come in. We are
          the bridge between the two, and I believe embracing AI as a tool,
          which is all it currently is, will be the key to our success."
          <br />
          <br />
          -Scott Grivner, Founder and CEO of Night Owl Labs.
        </p>
      </blockquote>
      <hr />
      <p>
        Interested in learning more about how we work or want to discuss a
        project?
      </p>
      <p>
        Feel free to{" "}
        <a className="regular-link" href="/contact">
          Contact
        </a>{" "}
        us, or take a look at our{" "}
        <a className="regular-link" href="/projects">
          Projects
        </a>{" "}
        to see the dreams we've turned into reality.
      </p>
    </Layout>
  )
}
