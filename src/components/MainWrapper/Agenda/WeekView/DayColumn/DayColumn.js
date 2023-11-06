import React, { useEffect, useState } from 'react'
import './DayColumn.scss'
import { findEventIndicesByDate, logAllEvents, logEventsByIndexes, saveEvent } from 'functions/calendarEventsHandler/calendarEventsHandler'

const DayAgenda = ({displayHours, day}) => {
    const hoursArr = new Array(24).fill(null).map((x,i)=> x = i)
    //.fill(null).map((x,i)=> x = i+':00')
    const [events, setEvents] = useState([])


    useEffect(()=>{
        if(!displayHours){
            logAllEvents()
            setEvents(findEventIndicesByDate(day[1]))
            //console.log('day',day[1])
        }
    },[])
    if(displayHours){
        return (
        hoursArr.map(x => <div className='hour' key={x}>{displayHours && x+':00'}</div>)
        )
    } else {
        return (
        <>
            <div className='dayEvents'>
                <div className='eventsCells'>{hoursArr.map(x => <div className='hourEvent' key={x} onClick={()=>saveEvent([day[1]], x, 60, 'spotkanie')} ></div>)}
            </div>
            </div>
             <div className='addedEventsWrapper'>
                <div className='relativeWrapper'>
                {events.map((x)=><div className='example' style={{height: `calc(${logEventsByIndexes([x])[0].durationInMinutes/1440*100}% - 2px)` , top:`${logEventsByIndexes([x])[0].hour*4.17}%` }}>{logEventsByIndexes([x])[0].date+' '+logEventsByIndexes([x])[0].name+' '+logEventsByIndexes([x])[0].hour+' '+logEventsByIndexes([x])[0].durationInMinutes+' min'+`${logEventsByIndexes([x])[0].hour*4.17}%`}</div>)}
                </div>
            </div>
        </>
        )
        
    }
}

export default DayAgenda

