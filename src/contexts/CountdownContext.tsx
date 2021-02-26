import {createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";

interface CountdownContextData{
    minutes: number,
    seconds: number,
    hasFinished: boolean,
    Isactive: boolean,
    startCountdown: () => void,
    ResetCountdown: () => void,
}

interface CountdownProviderProps{
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData)

let countdownTimeout: NodeJS.Timeout;

export function CountdownProvider({ children }: CountdownProviderProps) {
    
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(25 * 60);
    const [Isactive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function ResetCountdown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (Isactive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (Isactive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }
        }, [Isactive, time])



    return (
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            Isactive,
            startCountdown,
            ResetCountdown,
        }}>
            {children}
        </CountdownContext.Provider>
    )  
}