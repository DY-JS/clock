import React, {useEffect, useState} from 'react';
import cls from "./clock.module.css"

const Clock = () => {
    const [date, setDate] = useState(new Date())

    const transformDigits = (value: number) => {
        return value < 10 ? '0' + value : value
    }

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(interval)
    }, [])

    return (
        <div className={cls.clock}>
            <span>{transformDigits(date.getHours())}:</span>
            <span>{transformDigits(date.getMinutes())}:</span>
            <span>{transformDigits(date.getSeconds())}</span>
        </div>
    );
};

export default Clock;