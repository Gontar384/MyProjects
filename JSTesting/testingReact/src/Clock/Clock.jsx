import styles from './Clock.module.css'
import React,{useState, useEffect} from 'react';

function Clock() {

    document.title = "Digital Clock";

    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },1000)

        return () => {
            clearInterval(intervalId)
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        return `${hours}:${minutes}:${seconds} ${meridiem}`;
    }

    return (
        <body className={styles.clockBody}>
        <div className={styles.clockContainer}>
            <span className={styles.clockDisplay}>{formatTime()}</span>
        </div>
        </body>
    );
}

export default Clock;