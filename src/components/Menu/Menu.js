import React, { useState } from 'react'
import './Menu.scss'
import { useNavigate } from 'react-router-dom'


const Menu = () => {

 const navigate = useNavigate();

 const [test, setTest] = useState(null)

 const iframeHandler = () => setTest(
  <div className='iframeTest'>
    <div className='iframeTopBar'>
      <div className='iframeTopBar-title'><div className='testlogo'/>VS Code</div>
      <div className='iframeTopBar-controls'>
        <div className='windowClose' onClick={()=>setTest(null)}/>
      </div>
    </div>
    <iframe className='okienko' src='https://github1s.com/odzeradodeveloperajava/agenda/blob/HEAD/src/App.js'></iframe>
  </div>)

  
  return (
    <div className='menuWrapper' >
      {test}
        <div className='bottomBar'></div>
        <div className='menuHeader'></div>
        <div className='menuIconsWrapper'>
            <div className='menuIcons--calendar' onClick={()=>navigate('/main')}>
                <div className='menuIconsWrapper--icon calendarIcon' />
                <div className='menuIconsWrapper--calendarWrapper--text'>Calendar</div>
            </div>
            <div className='menuIcons--calendar' onClick={() => window.location.href = 'https://lrusso.github.io/Quake3/Quake3.htm'}>
                <div className='menuIconsWrapper--icon quakeIcon' />
                <div className='menuIconsWrapper--calendarWrapper--text'>Quake 3</div>
            </div>
            <div className='menuIcons--calendar' onClick={() => window.location.href = 'https://classic.minecraft.net/'}>
              <div className='menuIconsWrapper--icon minecraftIcon' />
              <div className='menuIconsWrapper--calendarWrapper--text'>Minecraft</div>
            </div>
            <div className='menuIcons--calendar' onClick={() => window.location.href = 'https://github1s.com/odzeradodeveloperajava/agenda/blob/HEAD/src/App.js'}>
              <div className='menuIconsWrapper--icon vscodeIcon' />
              <div className='menuIconsWrapper--calendarWrapper--text'>VS Code</div>
            </div>
            <div className='menuIcons--calendar' onClick={()=>iframeHandler()} >
              <div className='menuIconsWrapper--icon vscodeIcon' />
              <div className='menuIconsWrapper--calendarWrapper--text'>VS Code iframe</div>
            </div>
        </div>
    </div>
  )
}
// https://lrusso.github.io/Quake3/Quake3.htm
export default Menu

