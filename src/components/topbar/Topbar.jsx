import React from 'react'
import './topbar.scss'
import {Person, Mail, BusinessCenter, LinkedIn, GitHub} from "@material-ui/icons";
import { Button } from '@material-ui/core';

export default function Topbar({menuOpen, setMenuOpen}) {

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Naman Sogani_10690967.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = "Naman's Resume.pdf";
            alink.click();
        })
    })
}

  return (
    <div className={'topbar ' + (menuOpen && "active")}>
        <div className="wrapper">
            <div className='left'>
                <a href='#intro' className='logo'><BusinessCenter className='briefcase' /></a>
                <div className='itemContainer'>
                  <Person className='icon' />
                  <span>+91 7822 064 502</span>
                </div>

                <div className='itemContainer'>
                  <Mail className='icon' />
                  <span>nmnsgn@gmail.com</span>
                </div>

                <div className='itemContainer'>
                <a target="_blank" href="https://www.linkedin.com/in/naman-sogani/">
                  <LinkedIn className='icon' />
                  </a>
                </div>
                <div className='itemContainer'>
                <a target="_blank" href="https://github.com/Naman-Sogani">
                  <GitHub className='icon' />
                  </a>
                </div>


                <div  className = 'itemContainer '>
                <span>
                <Button variant="outlined" className='buttonContainer' onClick={onButtonClick} >Resume</Button>
                </span>
                </div>
            </div>
            <div className='right'>
            <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
            </div>
        </div>     
    </div>
  )
}
