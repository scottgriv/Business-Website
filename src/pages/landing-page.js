import React from "react"
import { Link } from "gatsby" // comment out if not using, and set <Layout> to <></> below
import Layout from "../components/layout"

export default function LandingPage() {
  return (
    <Layout>
      <Link to="/">
        <br />
        <img
          src="/images/company/nol-banner_social.png"
          alt="Night Owl Labs"
          title="Night Owl Labs"
          className="landing-logo"
        />
      </Link>
      <div className="landing-container">
        <h1 className="title-header-large">Welcome to the Landing Page! 👋</h1>
      </div>
      <div className="landing-container">
        <p>This is where you can mention a new project or website release!</p>
      </div>
    </Layout>
  )
}
