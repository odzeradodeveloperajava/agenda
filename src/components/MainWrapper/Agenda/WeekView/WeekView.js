import React, { useEffect, useState } from 'react'
import DayColumn from './DayColumn/DayColumn'
import './WeekView.scss'
import { getCurrDateArr, getCustomWeek } from 'functions/calendarHelper/calendarHelper'
import dayjs from 'dayjs'

const WeekView = () => {
const [days, setDays] = useState([])
const [hourLine, setHourLine] = useState(1)
const today = new Date()
const isToday = (date) => date === dayjs().format('DD-MM-YYYY') ? true : '';

useEffect(()=>{
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
            {days.map((x)=><div className='dayName' key={x}><span className={isToday(x[1]) && 'spanToday'}>{x[0]}</span></div>)}
        </div>
        <div id='weekContainer' className='weekContainer'>
            <div className='curTimeLine' style={{top: `${hourLine}px`}}>
                <div className='hourLineTime'>{today.getHours()+':'+(today.getMinutes()<10?'0':'')+today.getMinutes()}</div>
                {days.map((x)=><div className='hourLine' key={x}></div>)}
            </div>
                    <div className='wrapper'>
                        <div className='hoursBar' id='dupa'><DayColumn displayHours={true}/></div>
                        <div className='dayContainer'><DayColumn /></div>
                        <div className='dayContainer'><DayColumn /></div>
                        <div className='dayContainer'><DayColumn /></div>
                        <div className='dayContainer'><DayColumn /></div>
                        <div className='dayContainer'><DayColumn /></div>
                        <div className='dayContainer'><DayColumn /></div>
                        <div className='dayContainer'><DayColumn /></div>
                    </div>
            </div>
    </>
  )
}

export default WeekView