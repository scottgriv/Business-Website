import React from "react"
import Layout from "../components/layout"

export default function Services() {
  return (
    <Layout>
      <h1 className="title-header-large">Services</h1>
      <p>
        At <b>Night Owl Labs</b>, we specialize in offering comprehensive
        software development and consulting services tailored to your needs.
        Whether you're a startup or an established business looking to evaluate
        the feasibility of a new idea or seeking a dedicated partner for a
        full-scale project, our team is equipped to guide and collaborate with
        you every step of the way.
      </p>
      <p>
        From API integration, mobile apps, websites, custom solutions, UI/UX
        design, to business strategy, we've got you covered. Below is a list of
        our core services. If you have any questions or would like to discuss a
        project, please don't hesitate to <a href="/contact">Contact</a> us.
        Also, check out our <a href="/projects">Projects</a> to see some of our
        recent work.
      </p>

      <ul>
        <li>
          <b>Software Development</b>
          <ul>
            <li>
              Software Development Lifecycle (SDLC)
              <ul>
                <li>Requirement Gathering</li>
                <li>System Analysis</li>
                <li>System Design</li>
                <li>Implementation (Coding)</li>
                <li>Integration and Testing</li>
                <li>Deployment</li>
                <li>Maintenance and Support</li>
              </ul>
            </li>
            <li>
              Architecture
              <ul>
                <li>Tearing down Monolithic Applications</li>
                <li>Microservices</li>
                <li>Working with Legacy Xode</li>
              </ul>
            </li>
            <li>
              Documentation
              <ul>
                <li>UML Diagrams</li>
                <li>End-user documentation</li>
                <li>Technical documentation</li>
                <li>Support and maintenance documentation</li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <b>Software Design</b>
          <ul>
            <li>Prototyping</li>
            <li>UI/UX Design</li>
            <li>Product Branding and Identity Design</li>
            <li>Accessibility Features</li>
          </ul>
        </li>

        <li>
          <b>Business Consultancy</b>
          <ul>
            <li>Market Research</li>
            <li>Business Strategy Development</li>
            <li>Operational Planning</li>
            <li>Financial Planning and Analysis</li>
            <li>Human Resources Consulting</li>
            <li>Supply Chain Management</li>
            <li>Digital Marketing Strategies</li>
            <li>Branding and Identity Design</li>
            <li>Business Transformation</li>
            <li>Risk Management</li>
          </ul>
        </li>
      </ul>
    </Layout>
  )
}
