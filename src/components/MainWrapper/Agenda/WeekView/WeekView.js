import React, { useEffect, useState } from 'react'
import DayColumn from './DayColumn/DayColumn'
import './WeekView.scss'
import { getCurrDateArr, getCustomWeek } from 'functions/calendarHelper/calendarHelper'
import dayjs from 'dayjs'

const WeekView = () => {
const [days, setDays] = useState(Array(7))
const [hourLine, setHourLine] = useState(1)
const today = new Date()
const isToday = (date) => date === dayjs().format('DD-MM-YYYY') ? true : '';

useEffect(()=>{
    console.log('xxxx',localStorage)
    const currentTime = (today.getHours()*60+today.getMinutes())/1440
    setDays(getCustomWeek(getCurrDateArr()))
    const onResize = (x) => setHourLine(x[0].contentRect.height*currentTime)
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(document.querySelector("#dupa"));
},[])

  return (
    <>
        <div className='daysNames'>
            <div className='dayName'></div>
            {days.map((x)=><div className='dayName' key={x}>
                <span className={isToday(x[1]) && 'spanToday'}>{x[0]}</span>
            </div>)}
        </div>
        <div id='weekContainer' className='weekContainer'>
            <div className='curTimeLine' style={{top: `${hourLine}px`}}>
                <div className='hourLineTime'>{today.getHours()+':'+(today.getMinutes()<10?'0':'')+today.getMinutes()}</div>
                {days.map((x)=><div className='hourLine' key={x}></div>)}
            </div>
                    <div className='wrapper'>
                        <div className='hoursBar' id='dupa'><DayColumn displayHours={true}/></div>
                        {days.map((x)=><div className='dayContainer' key={x}><DayColumn displayHours={false} key={x[1]} day={x[1]}/></div>)}
                        
                    </div>
            </div>
    </>
  )
}

export default WeekView