import React, { useEffect } from 'react'
import './DayAgenda.scss'

const DayAgenda = ({displayHours}) => {
    const hoursArr = new Array(24).fill(null).map((x,i)=> x = i+':00')

    useEffect(()=>{
        console.log(hoursArr)
    })
    if(displayHours){
        return (
        hoursArr.map(x => <div className='hour'>{displayHours && x}</div>)
        )
    } else {
        return (
        hoursArr.map(x => <div className='hourEvent'></div>)
        )
    }
}

export default DayAgenda