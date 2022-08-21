import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { changeDay, getNormalDay, nextDay, prevDay, setCurrentToday } from '../services/CalendarServise';
import { IRootState } from '../store/reducers';

const week = [
  'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'
]

const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short', year: 'numeric' };

const CustomDatePicker: FC = () => {

  const currentDay:Date = useSelector((state: IRootState) => state.currentDay)
  const currentMounth: number = useSelector((state: IRootState) => state.currentMounth)

  const [days, setDays] = useState<number[][]>([]);
  const [today, setToday] = useState(currentDay.toLocaleDateString("ru-RU", options))
  const [showDrop, setShowDrop] = useState(false)

  useEffect(() => {
    const daysInMounth = currentDay.daysInMonth()

    const copyOfDate = new Date(currentDay.valueOf())
    const firstDay = getNormalDay(new Date(copyOfDate.setDate(1)).getDay() - 1)
    const weekCount = Math.ceil((daysInMounth + firstDay) / 7)
    const arr = []
    let counter = 0;
    for (let i = 0; i < weekCount; i++) {
      const line = []
      for (let j = 0; j < 7; j++) {
        if ((i > 0 || j >= firstDay) && counter < daysInMounth) {
          line.push(++counter)
        } else {
          line.push(null)
        }
      }
      arr.push(line)
    }
    setDays(arr)

  }, [currentMounth])

  useEffect(() => {
    setToday(currentDay.toLocaleDateString("ru-RU", options))
  }, [currentDay])

  const toggleDrop = () => setShowDrop(!showDrop);

  return (
    <div id='calendar'>
      <div className='current'>
        <i className="icon-circle-left" onClick={prevDay} />
        <span onClick={toggleDrop}>{today}</span>
        <i className="icon-circle-right" onClick={nextDay} />
      </div>
      {
        showDrop &&
        <div className="calendar-drop">
          <div className="week">
            {
              week.map(day => <div className="week-day" key={`day-title_${day}`}>{day}</div>)
            }
          </div>
          {
            days.map((week, index) => {
              return (
                <div className="week" key={`week-${index}`}>
                  {
                    week.map((d, i) => {
                      if (!d) return <div className="week-day" key={`empty-${i}`} />
                      return <div
                        className="week-day week-day-selectable"
                        key={`day_${d}`}
                        onClick={() => {changeDay(d); toggleDrop()}}
                      >{d}</div>
                    })
                  }
                </div>
              )
            })
          }
          <div className="calendar-today" onClick={() => {setCurrentToday(); toggleDrop()}}>Сегодня</div>
        </div>
      }
    </div>
  )
}

export default CustomDatePicker