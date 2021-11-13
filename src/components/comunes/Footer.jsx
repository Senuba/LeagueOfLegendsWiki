import React from "react";
import '../../assets/styles/components/Footer.scss'
import github from "../../assets/static/images/Octocat.png"


const Footer = () => (
    <footer className="footer">
        <div className="row down">
            <div className="col left">
            </div>
            <div className="col center">
                
        <a
        href="https://www.linkedin.com/in/sebastián-núñez-badilla-ab179373/"
        rel="noopener noreferrer"
        target="_blank"
        className="logo"
        >
        <span className="logo-img font">© 2021 Senuba.</span>
      </a>
            </div>
            <div className="col right">
            <a
            href="https://github.com/Senuba"
            rel="noopener noreferrer"
            target="_blank"
            className="logo"
            >
            <span className="logo-img font">GitHub</span>
          </a>
            </div>
        </div>
    </footer>
);

export default Footer;
