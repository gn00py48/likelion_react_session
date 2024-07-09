import React, {useEffect, useState } from "react";

const UseEffectTimer = ()=>{
    const [time, setTime ] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    useEffect (() => {
        if (isRunning){
            const timeoutId = setTimeout(()=>{
                setTime((prevTime) => prevTime + 1);
            }, 1000)
            if(time === 10){
                setIsRunning(false);
                setTime(0);
                clearTimeout(timeoutId);
            }
            return () => {
                clearTimeout(timeoutId);
            };
        }
    }, [isRunning, time]);
    
    const handleStart = () => {
        setIsRunning(true);
    };

    return(
        <div>
            {isRunning ?(
                <>
                    <h1>Time : {time} seconds</h1>
                    <h2>남은 시간 : {10 -time}</h2>
                </>
            ) : (
                <button onClick={handleStart}>타이머 시작!</button>
            )}
        </div>
    );
};

export default UseEffectTimer;