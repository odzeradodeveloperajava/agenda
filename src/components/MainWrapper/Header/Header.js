import React from 'react'
import './Header.scss'
import logOut from 'functions/authorization/logOut'
import { sidebarSlide } from 'functions/sidebarControl/sidebarSlide'
import { useNavigate } from 'react-router-dom'




const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='headerWrapper'>
        <div className='headerLogo'>
          <div className='menuButtonWrapper'>
            <button className='headerMenuButton' onClick={()=>sidebarSlide()}/>
          </div>
          <div className='headerLogoWrapper'>
            <div className='headerLogoWrapper-logo'>
              <div className="headerLogoWrapper-logo--topBar">
                <div className='headerLogoWrapper-logo--topBar-1'></div>
                <div className='headerLogoWrapper-logo--topBar-2'></div>
                <div className='headerLogoWrapper-logo--topBar-3'></div>
              </div>
              <div className="headerLogoWrapper-logo--middleBar">
                <div className='headerLogoWrapper-logo--middleBar-1'></div>
                <div className='headerLogoWrapper-logo--middleBar-2'>
                  <span>10</span>
                </div>
                <div className='headerLogoWrapper-logo--middleBar-3'></div>
              </div>
              <div className="headerLogoWrapper-logo--bottomBar">
                <div className='headerLogoWrapper-logo--bottomBar-1'></div>
                <div className='headerLogoWrapper-logo--bottomBar-2'></div>
                <div className='headerLogoWrapper-logo--bottomBar-3'></div>
              </div>
            </div>
            <div className='headerLogoWrapper-text'>your agenda</div>
          </div>
        </div>
        <div className='controls'>
            <div className='headerUserButton' onClick={()=>logOut()}>
              <span className='headerUserButton-text'>S</span>
            </div>
        </div>
    </div>
  )
}

export default Header