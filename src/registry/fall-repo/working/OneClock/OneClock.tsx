import styles from './OneClock.module.css'
import React, { useEffect, useState, useRef } from 'react'
const OneClock: React.FC = () => {
  const initTime = new Date()
  const [hour, setHour] = useState(initTime.getHours())
  const [minute, setMinute] = useState(initTime.getMinutes())
  const [second, setSecond] = useState(initTime.getSeconds())
  const cHour = useRef<HTMLDivElement>(null)
  const cMinuit = useRef<HTMLDivElement>(null)
  const cSecond = useRef<HTMLDivElement>(null)
  const clock = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const interval = setInterval(setTime, 500)
    function setTime () {
      const time = new Date()
      setHour(time.getHours())
      setMinute(time.getMinutes())
      setSecond(time.getSeconds())
      if (clock.current) {
        clock.current.style.display = 'block'
      }
      if (cSecond.current) {
        cSecond.current.style.transform = 'rotate(' + (6 * second) + 'deg)'
        cSecond.current.style.display = 'block'
      }
      if (cMinuit.current) {
        cMinuit.current.style.transform = 'rotate(' + (6 * (minute + (second / 60))) + 'deg)'
        cMinuit.current.style.display = 'block'
      }
      if (cHour.current) {
        cHour.current.style.transform = 'rotate(' + (6 * (hour + (minute / 60))) + 'deg)'
        cHour.current.style.display = 'block'
      }
    }
    return function () {
      clearInterval(interval)
    }
  }, [hour, minute, second])
  const ulNeedle = useRef<HTMLUListElement>(null)
  useEffect(() => {
    if (!ulNeedle.current?.childNodes.length) {
      for (let i = 0; i < 60; i++) {
        const liElement = document.createElement('li')
        liElement.className = styles.needle_one
        liElement.style.transform = 'rotate(' + (6 * i) + 'deg)'
        if (i % 5 === 0) {
          liElement.style.height = '14px'
          liElement.style.width = '5px'
        }
        if (ulNeedle) {
          ulNeedle.current?.appendChild(liElement)
        }
      }
    }
  }, [])
  return (
    <div className={styles.allContainer}>
      <div className={styles.clock} ref={clock}>
        <ul className={styles.needle} ref={ulNeedle}>
        </ul>
        <div className={styles.clock_container}>
          <div className={styles.hour} ref={cHour} id="hour"></div>
          <div className={styles.minute} ref={cMinuit} id="minute"></div>
          <div className={styles.second} ref={cSecond} id="second"></div>
          <div className={styles.clock_center}></div>
        </div>
      </div>
    </div>
  )
}
export default OneClock
