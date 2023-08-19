import React, { useEffect } from 'react'
import './DayColumn.scss'

const DayAgenda = ({displayHours}) => {
    const hoursArr = new Array(24).fill(null).map((x,i)=> x = i+':00')


    if(displayHours){
        return (
        hoursArr.map(x => <div className='hour' key={x}>{displayHours && x}</div>)
        )
    } else {
        return (
        hoursArr.map(x => <div className='hourEvent' key={x}></div>)
        )
    }
}

export default DayAgenda