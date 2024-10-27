import { useState, useEffect } from "react";

const Countdown = (props) => {
    const [duration, setDuration] = useState(10000);

    useEffect(() => {
        if (duration === 0) {
            props.onTimeUp();
            return;
        }
        const timer = setInterval(() => {
            setDuration(duration - 1);
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [duration])


    const toHHHMSS = (secs) => {
        const sec_num = parseInt(secs, 10)
        const hours = Math.floor(sec_num / 3600)
        const minutes = Math.floor(sec_num / 60) % 60
        const seconds = sec_num % 60

        return [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":")
    }


    return (
        <div className="countdown-container">
            {toHHHMSS(duration)}
        </div>
    )
}

export default Countdown;