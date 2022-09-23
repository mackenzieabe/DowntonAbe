import React from "react";
import * as FaIcons from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
    <div class="footer-container">
      <a href="www.linkedin.com/in/mackenzie-abe-69a8001a3"
        className="linkedin">
        <FaIcons.FaLinkedin size="30px"/>
      </a>
      <a href="https://github.com/mackenzieabe"
        className="github">
        <FaIcons.FaGithub size="30px"/>
      </a>
      <a href="https://stackexchange.com/users/24749128/mackenzie-abe?_gl=1*1589dlb*_ga*MzE4ODA0ODEwLjE2NTEwMDQwNTA.*_ga_WCZ03SZFCQ*MTY2Mzk0MzI5MC4yOC4xLjE2NjM5NDQ5NjAuMC4wLjA."
        className="stack-overflow">
        <FaIcons.FaStackOverflow size="30px"/>
      </a>
    </div>
    </footer>
  );
}