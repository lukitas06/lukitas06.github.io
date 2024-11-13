import React from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {

  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection); // add event listener
    console.log(scrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection); // clean up
    };
  }, [scrollDirection]);

  return (
    <div className={`header-div sticky ${scrollDirection === "down" ? " -top-20" : "top-0"} transition-all duration-500`}>
      <div className='logo-div'>
        <h1 className='font-bold text-2xl tracking-wider'>Portfolio</h1>
      </div>
      <div className='links-div'>
        <ul>
          <li className='page-link'> <Link to="/">HOME</Link></li>
          <li className='page-link'><Link to="/about">ABOUT</Link></li>
          <li className='page-link'><Link to="/blog">BLOG</Link></li>
        </ul>
      </div>
    </div>
  );
}