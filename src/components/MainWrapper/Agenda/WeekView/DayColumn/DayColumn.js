import React, { useEffect, useState } from 'react'
import './DayColumn.scss'
import { findEventIndicesByDate, logAllEvents, logEventsByIndexes, saveEvent } from 'functions/calendarEventsHandler/calendarEventsHandler'

const DayAgenda = ({displayHours, day}) => {
    const hoursArr = new Array(24).fill(null).map((x,i)=> x = i)
    //.fill(null).map((x,i)=> x = i+':00')
    const [events, setEvents] = useState([])


    useEffect(()=>{
        if(!displayHours){
            //localStorage.removeItem('calendar');
            logAllEvents()
            setEvents(findEventIndicesByDate(day[1]))
            //console.log('day',day[1])
        }
    },[])

    const saveNewEvent = (x) => {
        console.log('odpalam save event')
        saveEvent([day[1]], x, 60, 'spotkanie')
        setEvents(findEventIndicesByDate(day[1]))
    }
    const logEventsByIndexesConst = (x) => {
        return logEventsByIndexes(x)
    } 

    if(displayHours){
        return (
        hoursArr.map(x => <div className='hour' key={x}>{displayHours && x+':00'}</div>)
        )
    } else {
        return (
        <>
            <div className='dayEvents'>
                <div className='eventsCells'>{hoursArr.map(x => <div className='hourEvent' key={x} onClick={()=>saveNewEvent(x)} ></div>)}
            </div>
            </div>
             <div className='addedEventsWrapper'>
                <div className='relativeWrapper'>
                {events.map((x,y)=><div className='example' key={y} style={{height: `calc(${logEventsByIndexesConst([x])[0].durationInMinutes/1440*100}% - 2px)` , top:`${logEventsByIndexesConst([x])[0].hour*4.17}%` }}>{logEventsByIndexesConst([x])[0].date+' '+logEventsByIndexesConst([x])[0].name+' '+logEventsByIndexesConst([x])[0].hour+' '+logEventsByIndexesConst([x])[0].durationInMinutes+' min'+`${logEventsByIndexesConst([x])[0].hour*4.17}%`}</div>)}
                </div>
            </div>
        </>
        )
        
    }
}

export default DayAgenda

