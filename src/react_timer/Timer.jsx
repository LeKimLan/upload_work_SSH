

import React, {useState} from 'react'

export default function Timer() {
    const [timeElapsed, setTimeElapsed] = useState(0);

    let startTime;
    let endTime;
    let realTimeElapsed;

    return (
        <>
            <div>
                Đếm thời gian: {(Math.round(timeElapsed * 1000) / 1000).toFixed(3)} <span id='text'></span>
            </div>
            <button onClick={() =>{
                startTime = Date.now();
                document.getElementById("text").innerHTML = 'chưa hiện đc số';
                console.log('startTime', startTime)
            }}>Bắt đầu</button>
            <button onClick={() => {
                document.getElementById("text").innerHTML = '';
                endTime = Date.now();
                console.log('endTime', endTime)
                setTimeElapsed((endTime - startTime)/1000)
            }}>Dừng</button>
            <button onClick={() => {
                setTimeElapsed(0)
            }}>Reset</button>
        </>
    )
}
