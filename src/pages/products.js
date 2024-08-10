import React, { useState } from "react"
import Layout from "../components/layout"
import Icon from "../components/icons/icon.js"

export default function Products() {
  const [selectedSection, setSelectedSection] = useState("published")

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
                className={selectedSection === "published" ? "active" : ""}
                onClick={e => {
                  e.preventDefault()
                  setSelectedSection("published")
                }}
              >
                <h3>Published</h3>
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
          {selectedSection === "published" && (
            <div className="product-section">
              <h2 id="published-software">Published Software</h2>
              <p>
                {" "}
                Our showcased published applications are a testament to our
                innovation and capabilities. While these are our in-house
                creations, our client projects, accessible under the{" "}
                <a className="regular-link" href="/projects">
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
                    className="regular-link"
                    href="https://reciperesizer.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recipe Resizer
                  </a>
                </h3>
                <p>
                  Recipe Resizer allows you to effortlessly resize recipe
                  servings up or down, convert units of measure, and learn
                  valuable culinary tips from a classically trained chef.
                </p>
                <a
                  href="https://reciperesizer.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/platinum/Recipe-Resizer.png"
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
                    href="https://reciperesizer.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    className="regular-link"
                    href="https://beeheard.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bee Heard
                  </a>
                </h3>
                <p>A next generation audio recording platform.</p>
                <a href="https://beeheard.com" target="_blank" rel="noreferrer">
                  <img
                    className="projects-image"
                    src="/images/products/platinum/Bee-Heard.png"
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
                    href="https://marketplace.visualstudio.com/items?itemName=night-owl-labs.bee-heard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="VSCode" />
                  </a>
                  <a
                    href="https://beeheard.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                  <a
                    href="https://github.com/Night-Owl-Labs/Bee-Heard-Code-Memos"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="http://tsdr.uspto.gov/#caseNumber=86416016&caseSearchType=US_APPLICATION&caseType=DEFAULT&searchType=statusSearch"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-regular fa-registered"></i>
                  </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    className="regular-link"
                    href="https://darkcastle.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dark Castle Theme
                  </a>
                </h3>
                <p>
                  A vibrantly elegant dark theme available for multiple
                  platforms. Inspired by the timeless beauty and mystery of
                  medieval castles, this theme combines rich, deep colors with a
                  clean and modern design.
                </p>
                <a
                  href="https://darkcastle.netlify.app/"
                  className="icon-container-product"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/gold/Dark-Castle.png"
                    alt="Dark Castle"
                  />
                </a>
                <p>
                  <b>Category:</b> Multi-Platform Theme.
                </p>
                <p>
                  <b>Technology:</b> Hex, RGB, HSL.
                </p>
                <div className="social-links">
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=scottgriv.Dark-Castle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="VSCode" />
                  </a>
                  <a
                    href="https://darkcastle.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/Dark-Castle-Theme"
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

          {selectedSection === "open-source" && (
            <div className="product-section">
              <h2 id="open-source-software">Open Source Software</h2>
              <p>
                Community is integral to our ethos. At <b>Night Owl Labs</b>, we
                actively contribute to the open-source sphere, sharing projects
                and tools on platforms like{" "}
                <a
                  className="regular-link"
                  href="https://github.com/Night-Owl-Labs"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>{" "}
                to assist others in their tech endeavors. We also post content
                on{" "}
                <a
                  className="regular-link"
                  href="https://linkedin.com/company/nightowllabs"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{" "}
                and{" "}
                <a
                  className="regular-link"
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
                    className="regular-link"
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
                    className="regular-link"
                    href="https://github.com/Night-Owl-Labs/Software-Principles-Collection"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Software Principles Collection
                  </a>
                </h3>
                <p>
                  A growing curated collection of foundational software
                  principles, featuring links to repositories that delve into
                  key concepts like OOP, SOLID, and more.
                </p>
                <a
                  href="https://github.com/Night-Owl-Labs/Software-Principles-Collection"
                  className="icon-container-product"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/silver/Software-Principles-Collection.png"
                    alt="Post.e"
                  />
                </a>
                <p>
                  <b>Category:</b> Software Principles, Software Concepts.
                </p>
                <p>
                  <b>Technology:</b> Markdown.
                </p>
                <div className="social-links">
                  <a
                    href="https://github.com/Night-Owl-Labs/Software-Principles-Collection"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
                <div className="social-links">
                  <a
                    href="https://medium.com/@scottgrivner/understanding-software-ilities-key-attributes-of-quality-software-d4b7fadc9bbe"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="Medium" />
                    </a>
                </div>
              </div>
              <hr />
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    className="regular-link"
                    href="https://prgportfolio.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Personal Repository Guidelines (PRG)
                  </a>
                </h3>
                <p>
                  PRG is a system that transforms the way repositories are
                  organized and presented in your GitHub Portfolio. By
                  harnessing the power of GitHub Actions, it automatically
                  crafts a tier-based display, neatly categorizing your
                  repositories for enhanced clarity and impact. Beyond mere
                  organization, it sets forth comprehensive guidelines for{" "}
                  <span class="code-inline">READMEs</span> and overall
                  repository structure, ensuring each project is showcased with
                  maximum professionalism and coherence.
                </p>
                <a
                  href="https://prgportfolio.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/gold/PRG.png"
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
                    href="https://prgportfolio.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="PRG" />
                  </a>
                  <a
                    href="https://prgoptimized.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
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
                    className="regular-link"
                    href="https://github.com/scottgriv/Post.e"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Post.e
                  </a>
                </h3>
                <p>
                  A fully functional, multi-programming language, "how-to-build"
                  social media application. Create a user profile, follow other
                  users, and post messages similar to Twitter/X. Share content
                  with other users by attaching photos, videos, documents, and
                  files to your Posts. Written in Swift & Objective-C for the
                  front-end and multiple back-end languages such as PHP, Python,
                  Node.js, Ruby, Go, Java, Rust, and Perl. Includes a back-end
                  MySQL database, JSON interchange, and multiple out of the box
                  APIs. Designed to teach people how to build their own social
                  media app in mind.
                </p>
                <a
                  href="https://github.com/scottgriv/Post.e"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/gold/Post-e.png"
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
                    className="regular-link"
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
                  States Geological Survey (USGS). The application allows users
                  to view a river's gage height and discharge based on a
                  specific date range. The application also allows users to view
                  plotted dates of interest on the graph to view river levels
                  for said dates.
                </p>
                <a
                  href="https://www.rivercharts.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/gold/River-Charts.png"
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
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
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
                    className="regular-link"
                    href="https://scottgriv.github.io/Palm-Tree/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Palm Tree
                  </a>
                </h3>
                <p>
                  A web based CRM application with Google Business Review email
                  request capabilities. Send marketing emails out to your
                  customers, including emails requesting Google Business
                  Reviews. Directly open a Review window on your Google Business
                  page with a click of a button within the email.
                </p>
                <a
                  href="https://scottgriv.github.io/Palm-Tree/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="projects-image"
                    src="/images/products/gold/Palm-Tree.png"
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
                    href="https://scottgriv.github.io/Palm-Tree/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
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
                    className="regular-link"
                    href="https://launchportals.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Launch Portals
                  </a>
                </h3>
                <p>
                  Launch Portals is a dynamic web application designed for
                  developers, marketers, and project managers to showcase and
                  monitor their digital projects. This tool not only provides
                  quick links to projects, repositories, websites, apps, and
                  social media pages but also crucially displays and verifies
                  the metadata of each link. Users can easily ensure that their
                  projects are presented correctly across platforms by checking
                  Open Graph tags and other metadata in real-time. Whether
                  you're launching a new app or managing an existing portfolio,
                  Launch Portals helps you maintain control over how your
                  projects appear to the world, enhancing visibility and
                  consistency across the web.
                </p>
                <a
                  href="https://launchportals.netlify.app/"
                  className="icon-container-product"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image"
                      src="/images/products/gold/Launch-Portals.png"
                      alt="Launch Portals"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> Web Application.
                </p>
                <p>
                  <b>Technology:</b> Gatsby.js, Netlify, React, JavaScript
                </p>
                <div className="social-links">
                  <a
                    href="https://launchportals.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/Launch-Portals"
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
              <h2 id="upcoming-content">Upcoming Content</h2>
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
              <p>
                <b>FYI:</b> If you find yourself on our{" "}
                <a className="regular-link" href="/coming-soon">
                  Coming Soon
                </a>{" "}
                page, you know we're close to releasing a new product!
              </p>
              <hr />
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}
