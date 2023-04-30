import React from 'react'
import './AgendaBig.scss'
import DayAgenda from './DayAgenda/DayAgenda'

const AgendaBig = () => {
  return (
    <div className='agenda'>
                <div className='monthContainer'>
                  <div className='dayContainer hoursBar'><DayAgenda displayHours={true}/></div>
                  <div className='dayContainer'><DayAgenda /></div>
                  <div className='dayContainer'><DayAgenda /></div>
                  <div className='dayContainer'><DayAgenda /></div>
                  <div className='dayContainer'><DayAgenda /></div>
                  <div className='dayContainer'><DayAgenda /></div>
                  <div className='dayContainer'><DayAgenda /></div>
                  <div className='dayContainer'><DayAgenda /></div>
                </div>
              </div>
  )
}

export default AgendaBig