import React, { useEffect, useState } from 'react'
import './Nav.css'
import {useNavigate} from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if(window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return() => window.removeEventListener('scroll', transitionNavBar);
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
        <div className="nav__content">
            <img
                onClick={() => navigate('/')} 
                className='nav__logo'
                src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="" 
            />
            
            <img
                onClick={() => navigate('/profile')} 
                className='nav__avatar' 
                src="https://cdn-icons-png.flaticon.com/512/8104/8104575.png" 
                alt="" 
            />

            
        </div>
        
    </div>
  )
}

export default Nav