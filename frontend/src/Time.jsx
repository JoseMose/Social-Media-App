import { useState, useEffect } from "react";
function Time(){
    const[getTime, setGetTime] = useState(0)
    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
        setGetTime(data.time.datetime);
    });
    }, []);
    return(
        <div>{getTime}</div>
    )
}
export default Time;
