import React from 'react';
import {DateType} from "./Clock";
import cls from './clock.module.css'

export const AnalogView = ({date}:DateType) => {
    const hr = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    const hr_rotation = 30 * hr + min / 2; //converting current time
    const min_rotation = 6 * min;
    const sec_rotation = 6 * sec;

    const hourStyle = { transform: `rotate(${hr_rotation}deg)` };
    const minuteStyle = {transform: `rotate(${min_rotation}deg)`};
    const secondStyle = {transform: `rotate(${sec_rotation}deg)`};

    return (
        <div className={cls.clockContainer}>
            <div className={cls.hour} style={hourStyle}></div>
            <div className={cls.minute} style={minuteStyle}></div>
            <div className={cls.second} style={secondStyle}></div>
        </div>
    );
};
