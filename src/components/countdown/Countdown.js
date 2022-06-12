import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import {Stack} from "@mui/material";


const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;

const timerProps = {
    isPlaying: true,
    size: 120,
    strokeWidth: 6
};

const renderTime = (dimension, time) => {
    return (
        <div className="time-wrapper">
            <div className="time">{time}</div>
            <div>{dimension}</div>
        </div>
    );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Countdown() {
    const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
    const endTime = stratTime + 243248; // use UNIX timestamp in seconds

    const remainingTime = endTime - stratTime;
    const days = Math.ceil(remainingTime / daySeconds);
    const daysDuration = days * daySeconds;

    return (
        <Stack align direction="row-reverse">


            <CountdownCircleTimer

                {...timerProps}
                colors="#D14081"
                duration={daySeconds}
                size = {50}
                initialRemainingTime={remainingTime % daySeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > hourSeconds
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
            {renderTime("hrs", getTimeHours(daySeconds - elapsedTime))}
          </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#EF798A"
                size = {50}
                duration={hourSeconds}
                initialRemainingTime={remainingTime % hourSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
            {renderTime("min", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
                )}
            </CountdownCircleTimer>
            <CountdownCircleTimer
                {...timerProps}
                colors="#218380"
                duration={minuteSeconds}
                size = {50}
                initialRemainingTime={remainingTime % minuteSeconds}
                onComplete={(totalElapsedTime) => ({
                    shouldRepeat: remainingTime - totalElapsedTime > 0
                })}
            >
                {({ elapsedTime, color }) => (
                    <span style={{ color }}>
            {renderTime("sec", getTimeSeconds(elapsedTime))}
          </span>
                )}
            </CountdownCircleTimer>

        </Stack>
    );
}
