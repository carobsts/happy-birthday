"use client";
import { FC } from "react";

interface ICountdown {
  timeLeft: any;
}

const Countdown: FC<ICountdown> = ({ timeLeft }) => {
  const value: any = "--value";
  return (
    <div className="flex items-center justify-center gap-x-6">
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ [value]: timeLeft.days }}>
              {timeLeft.days || "0"}
            </span>
          </span>
          días
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ [value]: timeLeft.hours }}>
              {timeLeft.hours || "0"}
            </span>
          </span>
          horas
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ [value]: timeLeft.minutes }}>
              {timeLeft.minutes || "0"}
            </span>
          </span>
          min
        </div>
        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
          <span className="countdown font-mono text-5xl">
            <span style={{ [value]: timeLeft.seconds }}>
              {timeLeft.seconds || "0"}
            </span>
          </span>
          seg
        </div>
      </div>
    </div>
  );
};

export default Countdown;
