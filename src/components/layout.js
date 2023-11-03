import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import './layout.css';

const Layout = ({ children }) => {
  const [showScroll, setShowScroll] = useState(false);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  useEffect(() => {
    // Ensure that window is available before adding event listeners
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        let scrolled = window.scrollY;
        let parallaxAmount = 0.3;
        let paddingOffset = 50;
        let fadeStart = paddingOffset;
        let fadeEnd = 250;
        let opacity = 1 - Math.min(1, (scrolled - fadeStart) / (fadeEnd - fadeStart));
        let headlogo = document.getElementById('headlogo');

        if (headlogo) {
          headlogo.style.transform = `translateY(${-scrolled * parallaxAmount}px)`;
          headlogo.style.opacity = opacity;
        }

        setShowScroll(scrolled > 500);

        // Clear any existing timeouts to reset the timer
        if (scrollTimeout) clearTimeout(scrollTimeout);

        // Set a new timeout
        const newTimeout = setTimeout(() => {
          setShowScroll(false);
        }, 4000); // Hide button 4 seconds after scrolling stops
        setScrollTimeout(newTimeout);
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
        if (scrollTimeout) clearTimeout(scrollTimeout);
      };
    }
  }, [scrollTimeout]);

  const scrollTop = () => {
    // Check if window is available
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Reset scroll visibility and clear timeout
      setShowScroll(true);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    }
  };

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

      <button 
        onClick={scrollTop} 
        className={`scroll-to-top ${showScroll ? 'visible' : ''}`}
        aria-label="Scroll to top"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </div>
  );
};

export default Layout;
