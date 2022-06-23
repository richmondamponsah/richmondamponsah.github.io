import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsDribbble } from "react-icons/bs";

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>
        Richmond Amponsah
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#testimonials'>Testimonials</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      <div className='footer__socials'>
        <a href='https://Linkedin.com/'>
          <BsLinkedin />
        </a>
        <a href='https://Github.com/'>
          <BsGithub />
        </a>
        <a href='https://dribbble.com/'>
          <BsDribbble />
        </a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; Richmond Amponsah. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
