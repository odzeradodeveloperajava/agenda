import React, { cloneElement, useEffect, useState } from "react";
import { getMonthName } from "functions/calendarHelper/calendarHelper";
import { connect } from "react-redux";
import { setSelectedMonth, toggleFocusedOnDay } from "redux/reducers";
import './DatePicker.scss'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import isMobileDevice from "functions/isMobileDevice/isMobileDevice";

function DatePicker({ inFocusedView, date, month, iterator, children, isInYearView, setSelectedMonth, focusedOnDay, initialSlide, toggleFocusedOnDay, onlyMonth}) {
  
   const addDateId = (row) =>{
    if(inFocusedView){
      //console.log(month[1][1].format('MM'))
      return(row.map((x,i) => x.format('DD-MM-YY')))
    }
  }
  function check(){
      if(isInYearView){
        return (<div className="inYearViewOverlay"></div>)
      } else return null
  }
  function isFocused(){
    if(inFocusedView){
      return 'Focused'
    } else return ''
  }
  function clickHandler(){
    if(!inFocusedView){
      console.log('klinales ',date)
      setSelectedMonth(date);
      document.getElementById('focusedMonth').classList.add('focusedMonthVisible')
      document.getElementById('yearPicker').classList.add("yearPickerHidden")
    } 
  }
  function cancelFocus(){
    //toggleFocusedOnDay(false)
    console.warn('x')
  }
  return (
    <div className={'monthWrapper'+isFocused()} onClick={()=>clickHandler()}>
      {check()}
      <button className="datebutton">prev</button>
      <div className='month'>
        <div className="monthFocusedHeader">
          <h1 className={'monthName'+isFocused()}>{getMonthName(iterator)} {inFocusedView ? month[2][0].format('YYYY') : null }</h1>
        </div>
        <div className={'daysOfTheWeek'+isFocused()}>
          <div className="sunday">s</div>
          <div>m</div>
          <div>t</div>
          <div>w</div>
          <div>t</div>
          <div>f</div>
          <div>s</div>
        </div>
          <div className="datePicker">
            {isInYearView || inFocusedView && !focusedOnDay ? 
            month.map((row, i) => (              
              <React.Fragment key={i+'p'}>
                <div className="row" key={i} id={addDateId(row)}>
                  {row.map((day, idx) => (
                    cloneElement(children,{day, key: idx+'month', rowIdx: i, iterator, month: getMonthName(iterator), isInYearView})
                  ))}
                </div>
           </React.Fragment> 
           ))
           :
           <Swiper
            id="swiperEditingMode"
            className="swiperEditingMode"
            loop={false}
            initialSlide={initialSlide}
            modules={[Navigation]}
            navigation={isMobileDevice()}>
            {month.map((row, i) => (     
              <React.Fragment key={row}>
                    <SwiperSlide key={i*2+'z'}>
                      <div className="row" key={i+'c'} id={addDateId(row)}>
                        {row.map((day, idx) => (
                        cloneElement(children,{day, key: idx+'days', rowIdx: i, iterator, month: getMonthName(iterator), isInYearView})
                        ))}
                      </div>
                    </SwiperSlide>
            </React.Fragment>
            ))}
           </Swiper>
          }
      </div>
    </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      focusedOnDay: state.socialFun.focusedOnDay,
      initialSlide: state.socialFun.initialSlide
  }
}
const mapDispatchToProps =(dispatch) =>{
  return{
    setSelectedMonth: (date)=> dispatch(setSelectedMonth(date)),
    toggleFocusedOnDay: (bool)=>dispatch(toggleFocusedOnDay(bool))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)

//<div className="row" key={i} id={addDateId(row)}>
//<Day day={day} key={idx} rowIdx={i} iterator={iterator} month={getMonthName(iterator)} isInYearView={isInYearView} />
//</div>