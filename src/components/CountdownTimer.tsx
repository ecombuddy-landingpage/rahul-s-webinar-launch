import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const targetDate = new Date("2025-01-08T12:00:00+05:30").getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Minutes" },
    { value: timeLeft.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[80px] text-center shadow-card"
        >
          <div className="font-display text-2xl sm:text-4xl font-bold text-primary">
            {String(unit.value).padStart(2, "0")}
          </div>
          <div className="text-muted-foreground text-xs sm:text-sm uppercase tracking-wide">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
