import React from "react"
import Layout from "../components/layout"

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
        various technologies and industries. Our passion is evident in every
        project we undertake building beautiful, functional, and scalable
        software tailored to meet your precise needs.
      </p>
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
          <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
            <h2>Scott Grivner</h2>
          </a>
          <p>
            Founder of <b>Night Owl Labs</b>, Scott brings over a decade of
            professional software engineering and design experience to the team.
            He has worked with a wide range of technologies in multiple
            industries, and is passionate about building functional and
            beautiful software. Check out his{" "}
            <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
              Portfolio
            </a>{" "}
            to learn more about him and his work.
          </p>
          <div className="social-links">
            <a href="https://scottgrivner.dev" target="_blank" rel="noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
            <a
              href="https://github.com/scottgriv"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/scottgrivner/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://twitter.com/scottgrivner"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa-brands fa-x-twitter"></i>
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
            href="https://www.linkedin.com/in/anya-druzhenko-56985a180"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Anya Druzhenko</h2>
          </a>

          <p>
            Classically trained as a Chef and working in some of the most
            prestigious restaurants in Manhattan, NYC, Anya's culinary expertise
            is only matched by her passion for software design. She brings a
            unique perspective to the team by using her creative talents to
            craft beautiful and intuitive user experiences.
          </p>
          <div className="social-links">
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
            href="https://www.linkedin.com/in/devin-olshefski-71399657"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Devin Olshefski</h2>
          </a>

          <p>
            Devin brings a business and project management skillset to the team.
            He has a background and masters in Logistics & Supply Chain, and is
            passionate about helping businesses grow and thrive. He has been
            tasked to lead a number of large scale projects over the past
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
            href="https://www.linkedin.com/in/daniel-volovic-0862b01b2"
            target="_blank"
            rel="noreferrer"
          >
            <h2>Daniel Volovic</h2>
          </a>

          <p>
            Dan holds three degrees in a number of fields, his most recent is in
            Computer Information Systems and is currently in the process of
            aquiring a number of IT certificates. Daniel is our teams
            "wildcard", he's able to find solutions to problems that others
            can't. He has worked in a number of industries and brings an
            outsiders perspective to the team.
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
    </Layout>
  )
}
