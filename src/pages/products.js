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
                  A utility application that allows you to resize recipes,
                  convert unit of measure, cooking tips, and save your favorite
                  recipes.
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
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
                <p>To be announced.</p>
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
                    href="https://beeheard.com"
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
                    <i className="fa-regular fa-registered"></i>
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
                    href="https://prgoptimized.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://prgportfolio.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="PRG" />
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
                  <b>Category:</b> Multi-Platform Them
                </p>
                <p>
                  <b>Technology:</b> Hex, RGB, HSL
                </p>
                <div className="social-links">
                  <a
                    href="https://darkcastle.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://marketplace.visualstudio.com/items?itemName=scottgriv.Dark-Castle"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="VSCode" />
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
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
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
              <div className="project-card">
                <h3>
                  {" "}
                  <a
                    className="regular-link"
                    href="https://scottgriv.github.io/CREDITS-Generator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CREDITS Generator
                  </a>
                </h3>
                <p>
                  🚀 The CREDITS Generator is a straightforward tool designed to
                  help you quickly create a CREDITS.md file for acknowledging
                  contributions to your project. Simply input details of
                  contributors, third-party libraries, financial supporters, and
                  special thanks, then review or edit the preview. Once
                  satisfied, download the CREDITS.md file and place it in the
                  root (or .github folder) of your GitHub repository to
                  transparently showcase all project contributions.
                </p>
                <a
                  href="https://scottgriv.github.io/CREDITS-Generator/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image-small"
                      src="/images/products/silver/CREDITS-Generator.png"
                      alt="CREDITS Generator"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> Template Generator, Web Application.
                </p>
                <p>
                  <b>Technology:</b> Markdown, Svelte, SvelteKit.
                </p>
                <div className="social-links">
                  <a
                    href="https://scottgriv.github.io/CREDITS-Generator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/CREDITS-Generator"
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
                    href="https://scottgriv.github.io/Resolution-Scale-Calculator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Resolution Scale Calculator
                  </a>
                </h3>
                <p>
                  Scale design dimensions (width and height) up or down for @1x,
                  @2, and @3x resolutions. In the digital design realm, crafting
                  visually compelling and crisp graphics is pivotal. The
                  Resolution Scale Calculator emerges as a handy little tool for
                  designers and developers eager to recreate or adapt designs
                  inspired by existing website elements.
                </p>
                <a
                  href="https://scottgriv.github.io/Resolution-Scale-Calculator/"
                  className="icon-container-product"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image-small"
                      src="/images/products/silver/Resolution-Scale-Calculator.png"
                      alt="Resolution Scale Calculator"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> Design, Web Application.
                </p>
                <p>
                  <b>Technology:</b> JavaScript, HTML, CSS.
                </p>
                <div className="social-links">
                  <a
                    href="https://scottgriv.github.io/Resolution-Scale-Calculator/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/Resolution-Scale-Calculator"
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
                    href="https://scottgriv.github.io/GitHub-User-Info/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub User Info
                  </a>
                </h3>
                <p>
                  This dynamic web application leverages the GitHub API to
                  provide a comprehensive and interactive search experience,
                  enabling users to effortlessly find and explore profiles of
                  both individual developers and organizations on GitHub.
                  Featuring a sleek, user-friendly interface built with Angular,
                  the application not only displays basic profile information
                  but also offers insights into repositories, contributions, and
                  activity timelines, allowing for in-depth understanding of a
                  user's or organization's coding journey and open-source
                  contributions.
                </p>
                <a
                  href="https://scottgriv.github.io/GitHub-User-Info/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image-small"
                      src="/images/products/silver/GitHub-User-Info.png"
                      alt="GitHub User Info"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> API, Web Application.
                </p>
                <p>
                  <b>Technology:</b> GitHub API, Angular, Sass, TypeScript,
                  HTML.
                </p>
                <div className="social-links">
                  <a
                    href="https://scottgriv.github.io/GitHub-User-Info/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/GitHub-User-Info"
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
                    href="https://scottgriv.github.io/Binary-Converter/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Binary Converter
                  </a>
                </h3>
                <p>
                  This intuitive web application, built using the progressive
                  JavaScript framework Vue.js, offers a straightforward tool for
                  converting plain text into binary code and vice versa,
                  catering to both educational purposes and practical coding
                  needs. Designed for simplicity and efficiency, users can
                  quickly translate text to binary digits to understand the
                  foundational binary representation of data, or decode binary
                  sequences back into human-readable text. It stands as an
                  indispensable utility for students, programmers, and
                  technology enthusiasts looking to delve into the basics of
                  computer science and data encoding techniques, all while
                  experiencing the reactive and engaging user interface provided
                  by Vue.js.
                </p>
                <a
                  href="https://scottgriv.github.io/Binary-Converter/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image-small"
                      src="/images/products/silver/Binary-Converter.png"
                      alt="Binary Converter"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> Converter, Web Application.
                </p>
                <p>
                  <b>Technology:</b> Vue.js, JavaScript, Node.js, Less
                </p>
                <div className="social-links">
                  <a
                    href="https://scottgriv.github.io/Binary-Converter/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/Binary-Converter"
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
                    href="https://scottgriv.github.io/PWA-Demo-App/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PWA Demo App
                  </a>
                </h3>
                <p>
                  This Progressive Web App (PWA) demo showcases the cutting-edge
                  capabilities of web technology by utilizing a robust stack
                  including React, TypeScript, Node.js, PostgreSQL, and styling
                  with Scss/Sass/Less. Designed as both an educational tool and
                  a practical demonstration, it guides users through the
                  intricacies of building a high-performance PWA capable of
                  achieving a perfect Lighthouse score. The project not only
                  highlights best practices for web development and performance
                  optimization but also offers insights into creating seamless,
                  app-like experiences on the web, making it an invaluable
                  resource for developers looking to enhance their skills in
                  crafting modern, efficient web applications.
                </p>
                <a
                  href="https://scottgriv.github.io/PWA-Demo-App/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="projects-image-small-wrapper">
                    <img
                      className="projects-image-small"
                      src="/images/products/silver/PWA-Demo-App.png"
                      alt="PWA Demo App"
                    />
                  </div>
                </a>
                <p>
                  <b>Category:</b> React, TypeScript, Node.js, Postgresql, Sass,
                  Less, Scss, Workbox, Webpack.
                </p>
                <p>
                  <b>Technology:</b> PWA, Web Application.
                </p>
                <div className="social-links">
                  <a
                    href="https://scottgriv.github.io/PWA-Demo-App/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    href="https://github.com/scottgriv/PWA-Demo-App"
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
                      src="/images/products/silver/SOLID.png"
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
                    className="regular-link"
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
                      src="/images/products/silver/OOP.png"
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
