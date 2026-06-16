import React from 'react';
import './Header.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";


function Header() {

  return (

    <div className='header'>
        <h1 className='amura'><span>✦</span>Amura.ai</h1>

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

export default Header;