import React from "react"
import { Link } from "gatsby"
import { CONFIG } from "./config.js"

const Header = () => {
  const showHeader = CONFIG.showHeader

  return (
    <>
      <div id="pagehead" style={{ display: showHeader ? "block" : "none" }}>
        <div id="headlogo">
          <Link to="/">
            <img
              src="/images/company/nol-banner_large.png"
              alt="Night Owl Labs"
              title="Night Owl Labs"
              className="desktop-logo"
            />
            <img
              src="/images/company/nol-banner_small.png"
              alt="Night Owl Labs"
              title="Night Owl Labs"
              className="mobile-logo"
            />
          </Link>
        </div>
        <div id="menutabs">
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/company" activeClassName="active">
                Company
              </Link>
            </li>
            <li>
              <Link to="/products" activeClassName="active">
                Products
              </Link>
            </li>
            <li>
              <Link to="/services" activeClassName="active">
                Services
              </Link>
            </li>
            <li>
              <Link to="/projects" activeClassName="active">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/faq" activeClassName="active">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" activeClassName="active">
                Contact
              </Link>
            </li>
            {/* ... other navigation items */}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
