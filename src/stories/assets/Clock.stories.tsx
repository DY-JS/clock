import type { Meta, StoryObj } from '@storybook/react';
import React from "react";
import {Clock} from "../../Clock/Clock";

// const meta: Meta<typeof Clock> = {
//     title: 'Example/Clock',
//     component: Clock,
//     tags: ['autodocs'],
// }
//
// export default meta;
// type Story = StoryObj<typeof Clock>;
//
// // More on component templates:
// // https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// export const ClockStory: Story = {}
export default {
    title: 'Example/Clock',
    component: Clock,
}

export const ClockAnalogExample =() => {
    return <Clock mode={"analog"}/>
}

export const ClockDigitalExample =() => {
    return <Clock mode={"digital"}/>
}