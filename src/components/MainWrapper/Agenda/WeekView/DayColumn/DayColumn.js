import React, { useEffect } from 'react'
import './DayColumn.scss'

const DayAgenda = ({displayHours, day}) => {
    const hoursArr = new Array(24).fill(null).map((x,i)=> x = i+':00')




    if(displayHours){
        return (
        hoursArr.map(x => <div className='hour' key={x}>{displayHours && x}</div>)
        )
    } else {
        return (
        hoursArr.map(x => <div className='hourEvent' key={x} onClick={()=>console.log([x,day])} ></div>)
        )
    }
}

export default DayAgenda