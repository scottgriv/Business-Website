import React from "react"
import Layout from "../components/layout"
import Icon from "../components/icons/icon.js" // Corrected import statement

export default function About() {
  return (
    <Layout>
      <h1 className="title-header-large">
        Meet the Owls{" "}
        <img
          src="/images/company/nol-icon-transparent.png"
          alt="Night Owl Labs"
          title="Night Owl Labs"
          className="company-thumbnail"
        />
      </h1>

      <p>
        <b>Night Owl Labs</b>, established in 2014, has been at the forefront of
        providing exceptional IT products and services for nearly a decade.
        Comprising a dedicated team of software engineers, designers, and
        business professionals, <b>NOL</b> boasts a wealth of experience across
        various technologies and industries.
      </p>
      <hr />
      <br />
      <div className="about-container">
        <div className="photo-container">
          <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
            <img
              className="about-image"
              src="/images/about/scott_grivner.jpg"
              alt="Scott Grivner"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            className="regular-link"
            href="https://scottgrivner.dev"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Scott Grivner</h2>
          </a>
          <p>
            Founder of <b>Night Owl Labs</b>, Scott brings over a decade of
            professional Software Engineering, Architecture, and Design
            experience to the team. He has worked with a wide range of
            technologies in multiple industries, and is passionate about
            building functional and beautiful software. Check out his{" "}
            <a
              className="regular-link"
              href="https://scottgrivner.dev"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio
            </a>{" "}
            to learn more about him and his work.
          </p>
          <div className="social-links">
            <a
              href="mailto:scott.grivner@nightowllabs.io"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-regular fa-envelope"></i>
            </a>
            <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a href="https://prgportfolio.com" target="_blank" rel="noreferrer">
              <Icon name="PRG" />
            </a>
            <a
              href="https://github.com/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://stackoverflow.com/u/3092847"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-stack-overflow"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/scottgrivner/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://codepen.io/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
            <a href="https://goodreads.com/scottgrivner" target="_blank" rel="noreferrer">
              <Icon name="Goodreads" />
            </a>
            <a
              href="https://medium.com/@scottgrivner"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-medium"></i>
            </a>
            <a
              href="https://twitter.com/scottgrivner"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.youtube.com/@scottgrivner"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.buymeacoffee.com/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="BMC" />
            </a>
            <a
              href="https://fishbrain.com/anglers/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fa-solid fa-fish"></i>            
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="about-container-flipped">
        <div className="photo-container">
          <a
            href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="about-image"
              src="/images/about/anya_druzhenko.jpg"
              alt="Anya Druzhenko"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            className="regular-link"
            href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Anya Druzhenko</h2>
          </a>

          <p>
            Classically trained as a Chef and working in some of the most
            prestigious restaurants in Manhattan, NYC, cooking elaborate dishes
            for big named individuals, Anya's culinary expertise is only matched
            by her passion for Software Design. She brings a unique perspective
            to the team by using her creative talents to craft beautiful and
            intuitive user experiences.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/anyaenko"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="about-container">
        <div className="photo-container">
          <a
            href="https://www.linkedin.com/in/devin-olshefski-71399657"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="about-image"
              src="/images/about/devin_olshefski.jpg"
              alt="Devin Olshefski"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            className="regular-link"
            href="https://www.linkedin.com/in/devin-olshefski-71399657"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Devin Olshefski</h2>
          </a>

          <p>
            Devin brings a business and project management skill set to the
            team. He has over a decade of experience in Logistics & Supply
            Chain; he's currently a Capacity Planning Manager at a large US
            company and holds a masters degree in Logistics & Supply Chain.
            Devin is passionate about helping businesses grow and thrive. He has
            been tasked to lead a number of large scale projects over the past
            decade, and is excited to bring his expertise to the team.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/devin-olshefski-71399657"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <br />
      <div className="about-container-flipped">
        <div className="photo-container">
          <a
            href="https://www.linkedin.com/in/daniel-volovic-0862b01b2"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="about-image"
              src="/images/about/daniel_volovic.jpg"
              alt="Daniel Volovic"
            />
          </a>
        </div>

        <div className="description-container">
          <a
            className="regular-link"
            href="https://www.linkedin.com/in/daniel-volovic-0862b01b2"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Daniel Volovic</h2>
          </a>

          <p>
            Dan holds three degrees in a number of fields, including Criminal
            Justice, Psychology, and Computer Information Systems; he is also
            currently in the process of acquiring a number of IT certificates.
            Dan is our team's 'wildcard,' able to find solutions to problems
            that others can't. He has worked in various industries, including
            Nuclear Security, which is why IT Security is always at the
            forefront of his mind. Dan brings an outsider's perspective to the
            team, and we're happy to have him.
          </p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/daniel-volovic-0862b01b2"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
      <hr />
      <h2>Interested in joining our Parliament of Owls?</h2>
      <p>
        Currently, we do not have any open positions here at{" "}
        <b>Night Owl Labs</b>. We tend to keep our team small and follow a{" "}
        <a
          className="regular-link"
          href="https://a.co/d/fBdBFPJ"
          target="_blank"
          rel="noreferrer"
        >
          Company of One
        </a>{" "}
        philosophy and only hire when absolutely necessary (we believe that
        bigger isn't always better). However, if we do post job openings, we
        will stand up a dedicated "Careers" tab right here on our website so
        keep an eye out for it if you're interested in becoming the latest Owl
        to join our team!
      </p>
    </Layout>
  )
}
