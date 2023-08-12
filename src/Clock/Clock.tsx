import React, {useEffect, useState} from 'react';
import {AnalogView} from "./AnalogView";
import {DigitalView} from "./DigitalView";

export type PropsType = {
    mode?: 'analog' | 'digital'
}

export type DateType = {
    date: Date
}

export const Clock = ({mode}: PropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()), 1000);

        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            {mode === 'digital'
                ? <DigitalView date={date}/>
                : <AnalogView date={date}/>
            }
        </div>
    );
};
