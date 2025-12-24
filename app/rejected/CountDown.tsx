"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: string | Date;
}

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
}

const getTimeLeft = (target: Date): TimeLeft => {
  const now = new Date();

  if (target <= now) {
    return { months: 0, days: 0, hours: 0, minutes: 0 };
  }

  let yearsDiff = target.getFullYear() - now.getFullYear();
  let monthsDiff = target.getMonth() - now.getMonth();
  let daysDiff = target.getDate() - now.getDate();
  let hoursDiff = target.getHours() - now.getHours();
  let minutesDiff = target.getMinutes() - now.getMinutes();

  // Normalize negatives
  if (minutesDiff < 0) {
    minutesDiff += 60;
    hoursDiff--;
  }

  if (hoursDiff < 0) {
    hoursDiff += 24;
    daysDiff--;
  }

  if (daysDiff < 0) {
    const prevMonth = new Date(
      target.getFullYear(),
      target.getMonth(),
      0
    ).getDate();
    daysDiff += prevMonth;
    monthsDiff--;
  }

  if (monthsDiff < 0) {
    monthsDiff += 12;
    yearsDiff--;
  }

  return {
    months: yearsDiff * 12 + monthsDiff,
    days: daysDiff,
    hours: hoursDiff,
    minutes: minutesDiff,
  };
};

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(new Date(targetDate))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(new Date(targetDate)));
    }, 60_000); // update every minute

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex gap-6 text-center">
      <TimeBox label="Months" value={timeLeft.months} />
      <TimeBox label="Days" value={timeLeft.days} />
      <TimeBox label="Hours" value={timeLeft.hours} />
      <TimeBox label="Minutes" value={timeLeft.minutes} />
    </div>
  );
};

const TimeBox = ({ label, value }: { label: string; value: number }) => (
  <div className="flex flex-col">
    <span className="text-4xl font-bold">{value}</span>
    <span className="uppercase tracking-wide text-white font-semibold text-lg drop-shadow-sm">
      {label}
    </span>
  </div>
);

export default Countdown;
