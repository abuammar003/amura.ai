import React from 'react';
import './Footer.css';


function Footer() {

    const currYear = new Date().getFullYear();

  return (

    <div className='footer'>

        <h3>© {currYear} Amura.ai All rights reserved.</h3> 
        <p>Built with ❤️ by Abu Ammar</p>
    
    </div>
  )
}

export default Footer