import React, { useState } from "react"
import Layout from "../components/layout"

export default function Products() {
  const [selectedSection, setSelectedSection] = useState("apps")

  return (
    <Layout>
      <h1 className="products-header">Products</h1>
      <p>
        <b>Night Owl Labs</b> takes immense pride in creating innovative
        software products tailored to the evolving needs of the modern world. We
        believe in blending functionality with user-centric design to deliver
        experiences that are both practical and memorable.
      </p>

      <p>
        Whether they are fully-developed applications available to the public or
        beta versions inviting user feedback, each product reflects our
        dedication to quality and innovation. Explore our range of published
        software products and get a sneak peek into what's coming next.
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
                href="#"
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
                href="#"
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
                <br />
                <br />
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
                <br />
                <br />
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
                At <b>Night Owl Labs</b>, we are proud of our contributions to
                the open source community. You can explore a variety of our
                projects on{" "}
                <a
                  href="https://github.com/night-owl-labs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                and on our founder Scott Grivner's{" "}
                <a
                  href="https://github.com/scottgriv"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                as well.
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
                  A repository categorization and guideline system developed to
                  standardize repositories, projects, README’s, and overall
                  repository structure. Utilizes GitHub Actions to create a
                  custom tier table to showcase your categorized repositories
                  for your GitHub portfolio.
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
                <br />
                <br />
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
                <br />
                <br />
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
                <br />
                <br />
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
                <br />
                <br />
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
