import React from "react";
import * as FaIcons from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="fixed-bottom d-flex justify-content-end justify-content-end  px-3">
      <a href="https://www.linkedin.com/in/mackenzie-giesler-abe/"
        className="icon">
        <FaIcons.FaLinkedin size="30px"/>
      </a>
      <a href="https://github.com/mackenzieabe"
        className="icon">
        <FaIcons.FaGithub size="30px"/>
      </a>
      <a href="https://stackexchange.com/users/24749128/mackenzie-abe?_gl=1*1589dlb*_ga*MzE4ODA0ODEwLjE2NTEwMDQwNTA.*_ga_WCZ03SZFCQ*MTY2Mzk0MzI5MC4yOC4xLjE2NjM5NDQ5NjAuMC4wLjA."
        className="icon">
        <FaIcons.FaStackOverflow size="30px"/>
      </a>
   
    </footer>
  );
}