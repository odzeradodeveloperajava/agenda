import React , {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header/Header.js'
import 'components/MainWrapper/MainWrapper.scss'
import Calendar from './Calendar/Calendar'
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import './swiperStyle.scss'
import 'swiper/css/navigation';
import dayjs from 'dayjs'
import DatePicker from './DatePicker/DatePicker';
import { getCustomMonth } from 'functions/calendarHelper/calendarHelper';
import Day from './DatePicker/Day';
import Sidebar from './Sidebar/Sidebar';
import { connect } from 'react-redux';
import { sidebarSlide } from 'functions/sidebarControl/sidebarSlide';
import { setSelectedMonth, toggleFocusedOnDay } from 'redux/reducers';
import isMobileDevice from 'functions/isMobileDevice/isMobileDevice'
import AgendaBig from './Agenda/AgendaBig'

const MainWrapper = ({isSidebarOpen, selectedMonth, setSelectedMonth, toggleFocusedOnDay, focusedOnDay}) => {
  const cur = dayjs().year()
  const [years, setYears] = useState([cur-1, cur, cur+1])
  const [months, setMonths] = useState([selectedMonth,selectedMonth,selectedMonth])
  const [activeIndex, setActiveIndex] = useState(1)
  const [currentDisplayYear, setCurrentDisplayYear] = useState(cur)
  const [prevYearBtn, setPrevYearBtn] = useState(null);
  const [nextYearBtn, setNextYearBtn] = useState(null);



  useEffect(()=>{
    handleChangeMonth()
  },[selectedMonth])


  //temp -- check if device is mobile device
  useEffect(()=>{
    setPrevYearBtn(document.getElementById('yearPicker').getElementsByClassName('swiper-button-prev'));
    setNextYearBtn(document.getElementById('yearPicker').getElementsByClassName('swiper-button-next'));
    console.log(isMobileDevice())
  })

  function getPrevNextMonth(year, month) {
    const prevMonth = month === 0 ? [year - 1, 11] : [year, month - 1];
    const nextMonth = month === 11 ? [year + 1, 0] : [year, month + 1];
    return [prevMonth, nextMonth];
  }
  
  function handleChangeMonth(e) {
    const [year, month] = selectedMonth;
    const [selectPrevMonth, selectNextMonth] = getPrevNextMonth(year, month);
    const monthsToSet = e == null
      ? [[selectedMonth, selectNextMonth, selectPrevMonth],
          [selectPrevMonth, selectedMonth, selectNextMonth],
          [selectNextMonth, selectPrevMonth, selectedMonth]
        ][activeIndex]
      : (() => {
          setActiveIndex(e.realIndex);
          const selectedMonthFocused = months[e.realIndex];
          const [focusedYear, focusedMonth] = selectedMonthFocused;
          const [prevFocusedMonth, nextFocusedMonth] = getPrevNextMonth(focusedYear, focusedMonth);
          return [[selectedMonthFocused, nextFocusedMonth, prevFocusedMonth],
            [prevFocusedMonth, selectedMonthFocused, nextFocusedMonth],
            [nextFocusedMonth, prevFocusedMonth, selectedMonthFocused]
          ][e.realIndex];
        })();
  
    setMonths(monthsToSet);
    toggleFocusedOnDay(false)
  }

  function handleChangeYear(e){
    const curDisplayYear = years[e.realIndex]
    setCurrentDisplayYear(curDisplayYear)
    if(e.realIndex+1 === years.length){
      setYears([curDisplayYear+1, curDisplayYear-1, curDisplayYear])
    } else if(e.realIndex === 0){
      setYears([curDisplayYear, curDisplayYear +1, curDisplayYear-1])
    } else if(e.realIndex === 1){
      setYears([curDisplayYear-1, curDisplayYear, curDisplayYear+1])
    }
  }

  return (
    <div className='mainWrapper'>
        <Sidebar />
        {isSidebarOpen && <div className='contentOverlay' onClick={sidebarSlide} />}
        <Header />
          <div className='mainScreen'>
            <div className='contentWrapper'>
              <div className='contentWrapper--background'/>
              <div className='slider' ref={null}>
                <div className="innerSlider">
                
                
                <div id='focusedMonth' className='focusedMonth'>
                <Swiper
                  id={'monthPicker'}
                  loop={true} 
                  navigation={isMobileDevice()} 
                  direction={'horizontal'} 
                  initialSlide={1} 
                  modules={[Navigation]} 
                  onSlideChange={(e)=>handleChangeMonth(e)}>
                    {months.map((x,i)=> <SwiperSlide key={i+'x'}><DatePicker inFocusedView={true} date={months[i]} month={getCustomMonth(months[i][0], months[i][1])} iterator={months[i][1]} children={<Day />}/></SwiperSlide>)}
                </Swiper>
                </div>


                <div className='yearCalendar__wrapper' id={'yearPicker'}>
                  <div className='yearCalendar__header'>
                    <div className='yearCalendar__wrapper--selectedYear'>{currentDisplayYear}</div>
                    <div className='yearCalendar__wrapper--buttons'>
                      <div className='yearCalendar__wrapper--buttons--prevYear' onClick={()=>prevYearBtn[0].click()}></div>
                      <div className='yearCalendar__wrapper--buttons--nextYear' onClick={()=>nextYearBtn[0].click()}></div>
                    </div>
                  </div>
                  <Swiper
                   id={'yearPicker'}
                   loop={true}
                   navigation={isMobileDevice()}
                   modules={[Navigation]}
                   initialSlide={1}
                   onSlideChange={(e)=>handleChangeYear(e)} >
                    {years.map((x,i) => <SwiperSlide key={i}><Calendar key={i} year={years[i]} isInYearView={true} /></SwiperSlide>)}
                  </Swiper>
                </div>
                </div>
              </div>
            </div>




            <div className='agendaScreen'>
              <div className='topBar'></div>
              <AgendaBig />
              </div>
          </div>
      </div>
  )
}
MainWrapper.propTypes ={
  isSidebarOpen: PropTypes.bool,
  selectNextMonth: PropTypes.array,
  setSelectedMonth: PropTypes.func
}
const mapStateToProps = state => {
  return {
      isSidebarOpen: state.socialFun.isSidebarOpen,
      selectedMonth: state.socialFun.selectedMonth,
      focusedOnDay: state.socialFun.focusedOnDay
  }
}
const mapDispatchToProps =(dispatch) =>{
  return{
    setSelectedMonth: (date)=> dispatch(setSelectedMonth(date)),
    toggleFocusedOnDay: (bool)=> dispatch(toggleFocusedOnDay(bool))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MainWrapper)