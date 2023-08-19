import React, { useEffect } from 'react'
import './AgendaBig.scss'
import DayAgenda from './WeekView/DayColumn/DayColumn'
import WeekView from './WeekView/WeekView'

const AgendaBig = () => {


  return (
    <div className='agenda'>
      <div className='agendaTopBar'>
        <div className='agendaTopBar--viewSelectorWrapper'>
          <div className='agendaViewSelector dayView'>Day</div>
          <div className='agendaViewSelector weekView'>Week</div>
          <div className='agendaViewSelector monthView'>Month</div>
          <div className='agendaViewSelector yearView'>Year</div>
        </div>
      </div>
          <WeekView />
      </div>
  )
}

export default AgendaBig