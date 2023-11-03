import React, { useEffect } from "react"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      var scrolled = window.pageYOffset
      var parallaxAmount = 0.3 // Adjust this for stronger or weaker parallax

      var paddingOffset = 50 // Your body's padding
      var fadeStart = paddingOffset // Start fade-out after 50 pixels (accounting for padding)
      var fadeEnd = 250 // End fade-out after 500 pixels of actual scrolling (added to the 50px padding)
      var opacity =
        1 - Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart))

      var headlogo = document.getElementById("headlogo")
      headlogo.style.transform =
        "translateY(" + -scrolled * parallaxAmount + "px)"
      headlogo.style.opacity = opacity
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div id="pagecontent">
      <header>
        <Header />
      </header>
      <div id="contentarea">
        <main>{children}</main>
      </div>
      <br />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout
