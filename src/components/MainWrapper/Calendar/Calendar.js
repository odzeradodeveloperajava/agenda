import React, {useEffect, useState, useRef, useCallback} from 'react'
import DatePicker from './../DatePicker/DatePicker'
import {getMonth, getCustomMonth, getCurrDateArr} from './../../../functions/calendarHelper/calendarHelper'
import Day from '../DatePicker/Day'
import './Calendar.scss'
import dayjs from 'dayjs'
import { isMobile } from "react-device-detect";

const Calendar = ({year, isInYearView}) => {
  const currDate = getCurrDateArr();

  const yearArray = [0,1,2,3,4,5,6,7,8,9,10,11]
  return (
    !isMobile ? (
    <React.Fragment>
      <div className='calendarWrapper'>
      {yearArray.map((x,i)=>{
          return(
            <DatePicker date={[year,i]} key={i} month={getCustomMonth(year, i)} iterator={x} children={<Day />} isInYearView={isInYearView}/>
          )
      })}
      </div>
    </React.Fragment>
  )
  : (
    <DatePicker date={[2024,7]} month={getCustomMonth([2024,7])} iterator={7} children={<Day />} isInYearView={isInYearView} onlyMonth={true}/>
  )
)
}

export default Calendar
//            <DatePicker monthArray={months} handlerx={(c)=>addMonthHandler(c)} key={i} month={getMonth(x)} iterator={x} children={<Day />} />
