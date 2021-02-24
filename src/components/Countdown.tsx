import { Console } from 'console';
import { useState, useEffect, useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/countdown.module.css';

let countdownTimeout: NodeJS.Timeout;

export function Countdown() {

    const {startNewChallenge}  = useContext(ChallengesContext);

    const [time, setTime] = useState(0.1 * 60);
    const [Isactive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function ResetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (Isactive && time > 0) {
        countdownTimeout = setTimeout(() => { 
                setTime(time - 1);
            }, 1000)
        } else if(Isactive && time == 0){
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
    }
    }, [Isactive, time])

    return (
        <div>
            <div className={styles.CountdownContainer}>
            <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div className={styles.secondContent}>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
            </div>
            </div>

            {hasFinished ? (
                <button 
                    disabled
                    className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
            >
                    <span> Concluido !!!</span>
                    <img src="icons/check.png" alt="Check"/>
            </button>   
            ) : (
                    <>
                        {Isactive ? (
            <button type="button"
                    className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}
                onClick={ResetCountdown}
            >
            <span> Stop Count</span>
            </button> 
            ) : (
            <button type="button"
                className={styles.CountdownButton}
                onClick={startCountdown}
            >
                <span> Start Count</span>
            </button>
            )}      
                    </>
            )}

            


    </div>
    );
}