import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";

function Footer() {

    const currYear = new Date().getFullYear();

  return (

    <div className='footer'>
        <h3>© {currYear} Amura.ai All rights reserved.</h3> 
        <p>Built with ❤️ by Abu Ammar</p>
        <div className='socials'>
            <a href="https://abuammarportfolio.netlify.app/" rel="">
                <TbWorldCode />
            </a>
            <a href="https://github.com/abuammar003" rel="">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abu-ammar-252448284/" rel="">
                <FaLinkedin />
            </a>
        </div>
    </div>
  )
}

export default Footer