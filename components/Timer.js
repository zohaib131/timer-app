import {useEffect, useState,useRef } from "react"


const Timer = ()=>{
  const [time,setTime] =useState(0);
  const [isRunning,setIsRunning] =useState(false);
  const intervalRef = useRef(null);
  
  const startTimer =()=>{
  if(!isRunning){
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
  setTime((prevTime) => prevTime + 1);
    }, 1000);
  }
  }

  const stopTimer =()=>{
    clearInterval(intervalRef.current);
    setIsRunning(false);

  }

  const resetTimer=()=>{
    clearInterval(intervalRef.current)
    setTime(0);
    setIsRunning(false);

  }

useEffect(()=>{
  return ()=>{clearInterval(intervalRef.current)}
}, [])

    return(
  <div>
    <h1 className="container">Timer: {time}</h1>
    <button onClick={startTimer} disabled ={isRunning}>start</button>
    <button onClick={stopTimer} disabled ={!isRunning}>stop</button>
    <button onClick={resetTimer}>restart</button>
  </div>
    )
}
export default Timer