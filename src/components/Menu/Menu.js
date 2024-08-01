import React, { useEffect, useState, useRef} from 'react'
import './Menu.scss'
import { useNavigate } from 'react-router-dom'

const Menu = () => {
  const divRef = useRef(null);
  const navigate = useNavigate();
  const [test, setTest] = useState(null)
  const iframeHandler = () => setTest(
    <div className='iframeTest'>
      <div ref={divRef} className='iframeTopBar'>
        <div className='iframeTopBar-title'><div className='testlogo'/>VS Code</div>
        <div className='iframeTopBar-controls'>
          <div className='windowClose' onClick={()=>setTest(null)}/>
        </div>
      </div>
      <iframe className='okienko' src='https://github1s.com/odzeradodeveloperajava/agenda/blob/HEAD/src/App.js'></iframe>
    </div>)

  useEffect(()=>{
    const draggableWindow = divRef.current;
    const handleDoubleClick = () => {
      if (draggableWindow && draggableWindow.parentNode) {
        const parentRect = draggableWindow.parentNode.getBoundingClientRect();
        const parentWidth = parentRect.width;
        const parentHeight = parentRect.height;
        console.log(parentWidth, parentHeight)
        console.log(window.innerWidth, window.innerHeight)
        if (parentWidth < window.innerWidth || parentHeight < window.innerHeight-45) {
          // Warunek 1: Jeśli % rodzica jest mniejsze niż 100, ustaw oba parametry na 100
          if (draggableWindow.parentNode) {
            draggableWindow.parentNode.style.width = '100%';
            draggableWindow.parentNode.style.height = `calc(100% - 45px)`; // Odejmujemy 45px od wysokości
            draggableWindow.parentNode.style.left = ''; // Usuwamy left
            draggableWindow.parentNode.style.top = ''; // Usuwamy top
          }
        } else if (parentWidth === window.innerWidth && parentHeight === window.innerHeight-45) {
          // Warunek 2: Jeśli oba elementy są na 100, ustaw oba na 50 i wyświetl okno na środku ekranu
          if (draggableWindow.parentNode) {
            draggableWindow.parentNode.style.width = '50%';
            draggableWindow.parentNode.style.height = `calc(50% - 45px)`; // Odejmujemy 45px od wysokości
            draggableWindow.parentNode.style.left = '25%';
            draggableWindow.parentNode.style.top = '25%';
          }
        }
      }
    };

    const handleDoubleClickx = () => {
      if (draggableWindow && draggableWindow.parentNode) {
        const parentWidth = draggableWindow.parentNode.offsetWidth;
        // Sprawdź szerokość rodzica
        if (parentWidth < window.innerWidth) {
          // Jeśli szerokość rodzica jest mniejsza niż 100vw, ustaw na 100vw
          draggableWindow.parentNode.style.width = '100vw';
        } else if (parentWidth === window.innerWidth) {
          // Jeśli szerokość rodzica jest równa 100vw, ustaw na 50vw
          draggableWindow.parentNode.style.width = '50vw';
        }
      }
    };

    if (draggableWindow){
      draggableWindow.addEventListener('dblclick', handleDoubleClick)
    }
      return ()=>{
        if(draggableWindow !== null){
          draggableWindow.removeEventListener('dblclick', (e)=>console.log('aaa',e))
        }
      }
  },[test])

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
export default Menu

