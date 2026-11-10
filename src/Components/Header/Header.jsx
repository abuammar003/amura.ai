// import React from 'react';
// import './Header.css';
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { TbWorldCode } from "react-icons/tb";


// function Header() {

//   return (
 
//     <div className='header'>
//         <h1 className='amura'><span>✦</span>Amura.ai</h1>

//         <div className='socials'>
//                     <a href="https://abuammarportfolio.netlify.app/" rel="">
//                         <TbWorldCode />
//                     </a>
//                     <a href="https://github.com/abuammar003" rel="">
//                         <FaGithub />
//                     </a>
//                     <a href="https://www.linkedin.com/in/abu-ammar-252448284/" rel="">
//                         <FaLinkedin />
//                     </a>
//                 </div>
//     </div>

//   )
// }

// export default Header;








// ================== Updated UI =====================

import React from 'react';
import './Header.css';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";

function Header() {
  return (
    <header className="header">

      <h1 className="amura">
        <span className="amura-icon">✦</span>
        Amura.ai
      </h1>

      <div className="socials">
        <a
          href="https://abuammarportfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Portfolio"
          title="Portfolio"
        >
          <TbWorldCode />
        </a>

        <a
          href="https://github.com/abuammar003"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/abu-ammar-252448284/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

    </header>
  );
}

export default Header;
