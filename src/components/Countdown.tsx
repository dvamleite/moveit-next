import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/Countdown.module.css';



export function Countdown() {

    const {
        minutes,
        seconds,
        hasFinished,
        Isactive,
        startCountdown,
        ResetCountdown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

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
                    <img src="icons/check.png" alt="Check" />
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