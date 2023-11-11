import React, { useState } from "react"
import Layout from "../components/layout"

export default function Projects() {
  const [selectedSection, setSelectedSection] = useState("designs")

  return (
    <Layout>
      <h1 className="title-header-large">Projects</h1>
      <p className="projects-intro">
        At <b>Night Owl Labs</b>, we pride ourselves on a rich portfolio that
        spans across multiple domains of the tech industry. Our projects serve
        as a testament to our expertise, passion, and commitment to delivering
        unparalleled solutions. From the conception of intricate designs, the
        craftsmanship in development, to strategic business solutions, our work
        reflects our pursuit of excellence. Navigate through the categories to
        explore our distinguished projects and discover the innovation and
        creativity that drive us every day.
      </p>

      <div className="projects-container">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul>
            <li>
              <button
                className={selectedSection === "designs" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("designs")
                }}
              >
                <h3>Designs</h3>
              </button>
            </li>
            <li>
              <button
                className={selectedSection === "development" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("development")
                }}
              >
                <h3>Development</h3>
              </button>
            </li>
            <li>
              <button
                className={selectedSection === "business" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("business")
                }}
              >
                <h3>Business</h3>
              </button>
            </li>
          </ul>
        </div>

        {/* Content based on Selected Section */}
        <div className="content">
          {selectedSection === "designs" && (
            <div className="projects-section">
              <h2>Designs</h2>
              <p>
                We have a passion for creating designs that are not only
                aesthetically pleasing, but also functional and easy to use. We
                believe that design is a crucial part of any product and we
                strive to create designs that are both visually appealing and
                functional. Below are some of our graphic designs crafted to fit
                our products personality, click on the images to view more
                information about each project.
              </p>
              <hr />
              <h3>App Banners</h3>
              <div className="app-banners">
                <a
                  href="https://www.beeheard.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/banners/bee-heard-banner_large.png"
                    className="banner-image"
                    alt="Bee Heard"
                  />
                </a>
                <br />
                <a
                  href="https://www.prgoptimized.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/banners/prg-banner_large.png"
                    className="banner-image"
                    alt="PRG"
                  />
                </a>
                <br />
                <a
                  href="https://github.com/scottgriv/Post.e"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/banners/post-e-banner_large.png"
                    className="banner-image"
                    alt="Post.e"
                  />
                </a>
                <br />
                <a
                  href="https://www.rivercharts.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/banners/river-charts-banner_large.png"
                    className="banner-image"
                    alt="River Charts"
                  />
                </a>
                <br />
                <a
                  href="https://github.com/scottgriv/Palm-Tree"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/banners/palm-tree-banner_large.png"
                    className="banner-image"
                    alt="Palm Tree"
                  />
                </a>
                <br />
                <a
                  href="https://www.nightowllabs.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/banners/nol-banner_large.png"
                    className="banner-image"
                    alt="Night Owl Labs"
                  />
                </a>
              </div>
              <br />
              <hr />
              <h3>App Icons</h3>
              <div className="app-grid">
                <a
                  href="https://www.nightowllabs.net"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/icons/nol-icon-rounded.png"
                    className="app-image"
                    alt="Night Owl Labs"
                  />
                </a>
                <a
                  href="https://www.reciperesizer.com"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/icons/recipe-resizer-icon-rounded.png"
                    className="app-image"
                    alt="Recipe Resizer"
                  />
                </a>
                <a
                  href="https://www.beeheard.com"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/icons/bee-heard-icon-rounded.png"
                    className="app-image"
                    alt="Bee Heard"
                  />
                </a>
                <a
                  href="https://www.prgoptimized.com"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/icons/prg-icon-rounded.png"
                    className="app-image"
                    alt="PRG"
                  />
                </a>
                <a
                  href="https://github.com/scottgriv/Post.e"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/icons/post-e-icon-rounded.png"
                    className="app-image"
                    alt="Post.e"
                  />
                </a>
                <a
                  href="https://www.rivercharts.app"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/icons/river-charts-icon-rounded.png"
                    className="app-image"
                    alt="River Charts"
                  />
                </a>
                <a
                  href="https://github.com/scottgriv/Palm-Tree"
                  className="icon-container"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/images/projects/icons/palm-tree-icon-rounded.png"
                    className="app-image"
                    alt="Palm Tree"
                  />
                </a>
              </div>
              <br />
              <hr />
            </div>
          )}

          {selectedSection === "development" && (
            <div className="projects-section">
              <h2>Development</h2>
              <p>
                Our passion for excellence is reflected in every project we
                undertake. We are dedicated to building not only beautiful but
                also functional and scalable software solutions that are
                meticulously tailored to meet your exact needs. Below, you will
                find a portfolio of client projects that showcase our expertise.
                Should you have any questions or wish to discuss your own
                project, please feel free to <a href="/contact">Contact</a> us.
              </p>
              <div className="projects-card">
                <hr />
                <h3>API Data Export Project</h3>
                <p>
                  This project involved creating a front-end website that makes
                  API calls to fetch a large data set which is then exported
                  into a CSV file for the end-user. This allowed the user to
                  quickly get a large amount of data in a single file for
                  further analysis, saving them time and effort vs. manually
                  downloading the data.
                </p>
                <p>
                  Check out the below GitHub link for a similar open source
                  replica of this project.
                </p>
                <div className="social-links">
                  <a
                    href="https://github.com/scottgriv"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="projects-card">
                <h3>Real-time Chat Application</h3>
                <p>
                  Designed a real-time chat application using WebSockets,
                  allowing users to send and receive messages instantly.
                </p>
              </div>
              <hr />
              <div className="projects-card">
                <h3>Machine Learning Forecast Tool</h3>
                <p>
                  Developed a tool that predicts stock market trends using
                  machine learning algorithms and Black–Scholes Model, aiding investors in making
                  informed decisions.
                </p>
              </div>
              <hr />
            </div>
          )}

          {selectedSection === "business" && (
            <div className="projects-section">
              <h2>Business</h2>
              <p>
                Below are some of our client business projects that we have been
                involved in.
              </p>
              <div className="projects-card">
                <hr />
                <h3>Supply Chain Optimization</h3>
                <p>
                  We collaborated with a leading manufacturing company to revamp
                  their supply chain strategy, leading to a 20% increase in
                  efficiency.
                </p>
              </div>
              <hr />
              <div className="projects-card">
                <h3>Market Penetration Strategy</h3>
                <p>
                  Formulated a strategy for a beverage company to enter the
                  Asian market, leading to a successful launch and increased
                  sales in the first year.
                </p>
              </div>
              <hr />
              <div className="projects-card">
                <h3>Customer Retention Analysis</h3>
                <p>
                  Conducted an in-depth analysis of customer behavior for an
                  e-commerce platform and developed a retention strategy that
                  decreased churn rate by 15%.
                </p>
              </div>
              <hr />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
