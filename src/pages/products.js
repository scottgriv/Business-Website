import React, { useState } from "react"
import Layout from "../components/layout"

export default function Products() {
  const [selectedSection, setSelectedSection] = useState("apps")

  return (
    <Layout>
      <h1 className="title-header-large">Products</h1>
      <p>
        <b>Night Owl Labs</b> takes immense pride in creating innovative
        software products and open source projects tailored to the evolving
        needs of the modern world. We believe in blending functionality with
        user-centric design to deliver experiences that are both practical and
        memorable. Explore our range of published software products and get a
        sneak peek into what's coming next.
      </p>

      <div className="products-container">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul>
            <li>
              <button
                className={selectedSection === "apps" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("apps")
                }}
              >
                <h3>Apps</h3>
              </button>
            </li>
            <li>
              <button
                className={selectedSection === "open-source" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("open-source")
                }}
              >
                <h3>Open Source</h3>
              </button>
            </li>
            <li>
              <button
                className={selectedSection === "content" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("content")
                }}
              >
                <h3>Content</h3>
              </button>
            </li>
          </ul>
        </div>

        {/* Content based on Selected Section */}
        <div className="content">
          {selectedSection === "apps" && (
            <div className="product-section">
              <h2>Apps</h2>
              <p>
                {" "}
                Our showcased applications are a testament to our innovation and
                capabilities. While these are our in-house creations, our client
                projects, accessible under the <a href="/projects">
                  Projects
                </a>{" "}
                menu, uphold the same gold standard of quality and meticulous
                attention to detail.
              </p>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://www.reciperesizer.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recipe Resizer
                  </a>
                </h3>
                <p>
                  A utility application that allows you to resize recipes,
                  convert unit of measure, cooking tips, and save your favorite
                  recipes.
                </p>
                <a
                  href="https://www.reciperesizer.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/Recipe-Resizer.png"
                    alt="Recipe Resizer"
                  />
                </a>
                <p>
                  <b>Category:</b> Mobile Application.
                </p>
                <p>
                  <b>Technology:</b> iOS, Swift, SwiftUI, Core Data.
                </p>
                <div className="social-links">
                  <a
                    href="https://reciperesizer.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-app-store-ios"></i>
                  </a>
                  <a
                    href="https://www.reciperesizer.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://www.beeheard.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bee Heard
                  </a>
                </h3>
                <p>To be announced.</p>
                <a
                  href="https://www.beeheard.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/Bee-Heard.png"
                    alt="Bee Heard"
                  />
                </a>
                <p>
                  <b>Category:</b> Mobile Application.
                </p>
                <p>
                  <b>Technology:</b> TBA.
                </p>
                <div className="social-links">
                  <a
                    href="https://www.beeheard.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="http://tsdr.uspto.gov/#caseNumber=86416016&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-trademark"></i>
                  </a>
                  <a
                    href="http://tsdr.uspto.gov/#caseNumber=86415605&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-trademark"></i>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          )}

          {selectedSection === "open-source" && (
            <div className="product-section">
              <h2>Open Source</h2>
              <p>
                Community is integral to our ethos. At <b>Night Owl Labs</b>, we
                actively contribute to the open-source sphere, sharing projects
                and tools on platforms like{" "}
                <a
                  href="https://github.com/Night-Owl-Labs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                to assist others in their tech endeavors. We also post content
                on{" "}
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
                . Beyond being developers, we are educators and consultants
                dedicated to empowering others with knowledge and expertise.
                <p>
                  Check out our founder, Scott Grivner's{" "}
                  <a
                    href="https://github.com/scottgriv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>{" "}
                  , as well.
                </p>
              </p>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://www.prgoptimized.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Personal Repository Guidelines
                  </a>
                </h3>
                <p>
                  Revolutionize your GitHub Portfolio with this system.
                  Utilizing GitHub Actions, it auto-generates a categorized
                  display for organized, impactful repository presentation.
                  Includes essential guidelines and templates for READMEs and
                  repository structure.
                </p>
                <a
                  href="https://www.prgoptimized.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/PRG.png"
                    alt="Personal Repository Guidelines"
                  />
                </a>
                <p>
                  <b>Category:</b> Categorization, Guidelines, Templates,
                  Standards, Documentation.
                </p>
                <p>
                  <b>Technology:</b> Markdown, API, GitHub Actions, Jekyll,
                  Python, DataTables.
                </p>
                <div className="social-links">
                  <a
                    href="https://www.prgoptimized.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/PRG-Personal-Repository-Guidelines"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://github.com/scottgriv/Post.e"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Post.e
                  </a>
                </h3>
                <p>
                  A fully functional, multi-programming language, “how-to-build”
                  social media application.
                </p>
                <a
                  href="https://github.com/scottgriv/Post.e"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/Post-e.png"
                    alt="Post.e"
                  />
                </a>
                <p>
                  <b>Category:</b> Mobile Application.
                </p>
                <p>
                  <b>Technology:</b> iOS, watchOS, UIKit, Objective-C, Swift,
                  PHP, MySQL.
                </p>
                <div className="social-links">
                  <a
                    href="https://github.com/scottgriv/Post.e"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://www.rivercharts.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    River Charts
                  </a>
                </h3>
                <p>
                  A Python, Django, Plotly, and Pandas web application that
                  visualizes river data pulled using an API from the United
                  States Geological Survey (USGS).
                </p>
                <a
                  href="https://www.rivercharts.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/River-Charts.png"
                    alt="River Charts"
                  />
                </a>
                <p>
                  <b>Category:</b> Web Application.
                </p>
                <p>
                  <b>Technology:</b> Python, Django, Plotly, Pandas, API.
                </p>
                <div className="social-links">
                  <a
                    href="https://www.rivercharts.app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/River-Charts"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://github.com/scottgriv/Palm-Tree"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Palm Tree
                  </a>
                </h3>
                <p>
                  A web based CRM application with Google Business Review email
                  request capabilities.
                </p>
                <a
                  href="https://github.com/scottgriv/Palm-Tree"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/Palm-Tree.png"
                    alt="Palm Tree"
                  />
                </a>
                <p>
                  <b>Category:</b> Web Application.
                </p>
                <p>
                  <b>Technology:</b> JavaScript, PHP, HTML, CSS, MySQL.
                </p>
                <div className="social-links">
                  <a
                    href="https://github.com/scottgriv/Palm-Tree"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://github.com/Night-Owl-Labs/SOLID-Principles"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SOLID Principles
                  </a>
                </h3>
                <p>
                  In software engineering, SOLID is a mnemonic acronym for five
                  design principles intended to make object-oriented designs
                  more understandable, flexible, and maintainable.
                </p>
                <a
                  href="https://github.com/Night-Owl-Labs/SOLID-Principles"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image-small"
                      src="/images/products/SOLID.png"
                      alt="SOLID Principles"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> Software Architecture. Clean Code.
                </p>
                <p>
                  <b>Technology:</b> Java, Markdown.
                </p>
                <div className="social-links">
                  <a
                    href="https://github.com/Night-Owl-Labs/SOLID-Principles"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    href="https://github.com/Night-Owl-Labs/OOP-Principles"
                    target="_blank"
                    rel="noreferrer"
                  >
                    OOP Principles
                  </a>
                </h3>
                <p>
                  This repository aims to provide a comprehensive guide to
                  Object-Oriented Programming (OOP) principles. Whether you are
                  new to OOP or want to reinforce your understanding, this
                  repository has you covered.
                </p>
                <a
                  href="https://github.com/Night-Owl-Labs/OOP-Principles"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image-small"
                      src="/images/products/OOP.png"
                      alt="OOP Principles"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> Software Architecture. Clean Code.
                </p>
                <p>
                  <b>Technology:</b> Java, Markdown.
                </p>
                <div className="social-links">
                  <a
                    href="https://github.com/Night-Owl-Labs/OOP-Principles"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <hr />
            </div>
          )}

          {selectedSection === "content" && (
            <div className="product-section">
              <h2>Upcoming Content</h2>
              <p>
                <b>At Night Owl Labs</b>, we're always looking forward to
                providing valuable insights and resources to our community. In
                the near future, you can expect:
              </p>
              <ul>
                <li>
                  Comprehensive tutorials (articles/videos) on emerging
                  technologies
                </li>
                <li>Case studies of our recent projects</li>
                <li>Papers and publications on our upcoming products</li>
                <li>Podcasts and interviews with industry leaders</li>
                <li>Webinars on best practices in software development</li>
                <li>Reviews of new development tools and platforms</li>
                <li>Guides on business strategy and digital transformation</li>
                <li>
                  Books, eBooks, and Courses on both business and software
                  development topics
                </li>
                <li>
                  An online forum and Discourse server for community
                  interactions
                </li>
                <li>An online gift shop with official NOL merchandise!</li>
              </ul>
              <p>
                <b>Stay Tuned!</b> We're excited to share these resources with
                you soon.
              </p>
              <hr />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
