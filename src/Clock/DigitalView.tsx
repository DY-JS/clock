import React from 'react';
import {DateType} from "./Clock";
import cls from "./clock.module.css";

export const DigitalView = ({date}: DateType) => {
    const transformDigits = (value: number) => {
        return value < 10 ? '0' + value : value
    }

    return (
        <div className={cls.clock}>
            <span>{transformDigits(date.getHours())}:</span>
            <span>{transformDigits(date.getMinutes())}:</span>
            <span>{transformDigits(date.getSeconds())}</span>
        </div>
    );
};
