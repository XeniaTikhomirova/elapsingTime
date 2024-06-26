import { useState, useRef, useContext, useEffect } from "react";
import styles from "./stopwatch.module.css";

export function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;

      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else {
      clearInterval(intervalIdRef.current);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning, elapsedTime]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
    console.log(startTimeRef.current);
  }

  function stop() {
    setIsRunning(false);
    console.log("Stopped");
  }

  function reset() {
    console.log("reseted");
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliSeconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliSeconds = String(miliSeconds).padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${miliSeconds}`;
  }

  return (
    <div className={styles.stopWatch}>
      <div className={styles.display}>{formatTime()}</div>
      <div className={styles.controls}>
        <button className={styles.startBtn} onClick={start}>
          Start
        </button>
        <button className={styles.stopBtn} onClick={stop}>
          Stop
        </button>
        <button className={styles.restartBtn} onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}
