import React from 'react'
import './Header.css'
import logOut from 'functions/authorization/logOut'
import { sidebarSlide } from 'functions/sidebarControl/sidebarSlide'
import { useNavigate } from 'react-router-dom'




const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='headerWrapper'>
        <div className='headerLogo'>
            <button className='headerMenuButton' onClick={()=>sidebarSlide()}/>
            <button onClick={()=>navigate('/menu')}> menu</button>
        </div>
        <div className='userinfo'>

        </div>
        <div className='controls'>
            <button className='headerSettings' />
            <div className='headerlogout' onClick={()=>logOut()}></div>
        </div>
    </div>
  )
}

export default Header