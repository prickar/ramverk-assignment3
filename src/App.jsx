import { useState } from 'react'
import './App.css'
import { parseISO, intervalToDuration } from 'date-fns'
import useInterval from 'use-interval'
import './fonts.css'

function getInterval() {
  const myBirthday = parseISO('2023-03-20T00:00:00')
  const interval = intervalToDuration({
    start: new Date(), 
    end: myBirthday
  })

  return interval
}

function App() {
  const [untilmyBirthday, setUntilmyBirthday] = useState(getInterval())
  const [count, setCount] = useState(0)

  useInterval(() => {
    const interval = getInterval()
    setUntilmyBirthday(interval)
    setCount(count + 1);
  }, 1000);

  console.log(untilmyBirthday)
  return (
    <div className="App">
      <div className="outerContainer">
        <div className="leftContainer">
          <h1 className="clock">
          <div className='triangle'></div>
          <div className='months'>{untilmyBirthday.months} <br/></div>
          <div className='days'>{untilmyBirthday.days} <br/></div>
          <div className='time'>
          {untilmyBirthday.hours}:
          {untilmyBirthday.minutes}:
          {untilmyBirthday.seconds}
          <div className='secondTriangle'></div>
          <p>My birthday countdown</p>
          </div>
         </h1>
        </div>
        <div className="rightContainer"></div>
      </div>
      <div></div>
    </div>
  );
  }
  


export default App
