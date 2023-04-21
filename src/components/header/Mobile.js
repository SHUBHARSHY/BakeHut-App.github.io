import React, { useState } from 'react'
import './Mobile.css'
import { Link } from 'react-router-dom'

const Mobile = ({isOpen,setIsopen}) => {
    const [Isloggedin, setIsloggedin] = useState(false);
  return (
    <div>

<div className='mobile'>
        <div className='close-icon' onClick={()=> setIsopen(!isOpen)}>
        <span className="material-symbols-outlined">close</span>
        </div> 
        <div className='mobile-option'>
        <div className='mobile-options'>
          
          <Link to="/home" onClick={()=> setIsopen(!isOpen)} className='link' >
              <li className="le">Home</li>
            </Link>
      </div>

      <div className='mobile-options'>
          
          <Link to="/about" onClick={()=> setIsopen(!isOpen)} className='link' className='link'>
              <li className="le">About</li>
            </Link>
      </div>

      <div className='mobile-options'>
          
          <Link to="/contact" onClick={()=> setIsopen(!isOpen)} className='link' className='link' >
              <li className="le">Contact</li>
            </Link>
      </div>

      <div className='mobile-options'>
          
          <Link to="/Login"  className='link' className='link' >
              {Isloggedin ? (
                <Link to="/home"  className="link">
                  <li className="le" onClick={() => {return(setIsopen(!isOpen),setIsloggedin(false))}}>
                    Logout
                  </li>
                </Link>
              ) : (
                <li className="le" onClick={() => setIsloggedin(true)}>
                  Login{" "}
                </li>
              )}
            </Link>
      </div>
        </div>
    
    </div>
    </div>
  )
}

export default Mobile