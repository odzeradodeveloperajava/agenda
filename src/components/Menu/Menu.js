import React from 'react'
import './Menu.scss'
import { useNavigate } from 'react-router-dom'


const Menu = () => {

 const navigate = useNavigate();

  return (
    <div className='menuWrapper' onClick={()=>navigate('/main')}>
        <div className='menuHeader'></div>
        <div className='menuIconsWrapper'>
            <div className='menuIcons--calendar'>
                <div className='menuIconsWrapper--calendarWrapper--icon'></div>
                <div className='menuIconsWrapper--calendarWrapper--text'>Calendar</div>
            </div>
        </div>
    </div>
  )
}

export default Menu