import React, { useState, useEffect } from "react";

const SessionTimer = () => { //남은 시간 저장 및 출력
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const getTimeLeft = () => { //남은 시간 계산
        const now = new Date(); //현재 시간
        const today = now.getDay(); //요일
        const nextWed = new Date(now);
        nextWed.setDate(now.getDate() + ((3 - today + 7) % 7)); //다음 돌아오는 수요일
        nextWed.setHours(18, 30, 0, 0); //18시 30분

        const diff = nextWed - now; // 남은 시간 계산

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24)); //일자
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24); //시간
            const minutes = Math.floor((diff / (1000 * 60)) % 60); //분
            const seconds = Math.floor((diff / 1000) % 60); //초

            setTimeLeft({ days, hours, minutes, seconds });
        } else {
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        }
    };

    useEffect(() => { //매 초 계산
        const intervalId = setInterval(getTimeLeft, 1000);

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div>
            <h1>이번 주 수요일 18시 30분까지 남은 시간</h1>
            <p>
                {timeLeft.days}일 {timeLeft.hours}시간 {timeLeft.minutes}분 {timeLeft.seconds}초
            </p>
        </div>
    );
};

export default SessionTimer;
