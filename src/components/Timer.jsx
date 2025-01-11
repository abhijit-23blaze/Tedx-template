import React, { useEffect, useState } from "react";

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div
      className="flex justify-center items-center bg-black rounded-full py-4 px-4"
      trans
    >
      {["Days", "Hours", "Minutes", "Seconds"].map((label, index) => (
        <div key={label} className="text-center mx-2">
          <p
            className="text-5xl font-bold"
            style={{ color: "rgba(144, 14, 16, 255)" }}
          >
            {label === "Days"
              ? timeLeft.days
              : label === "Hours"
              ? timeLeft.hours
              : label === "Minutes"
              ? timeLeft.minutes
              : timeLeft.seconds}
          </p>
          <p className="text-lg text-white">{label}</p>
        </div>
      ))}
    </div>
  );
}

function Timer() {
  // change the date
  const targetDate = new Date("2025-01-19T23:59:59"); // Set your target date here

  return (
    <div className="h-[80%]">
      <div
        className="w-full h-[60vh] bg-no-repeat bg-right-bottom flex  flex-col justify-center items-center mt-[-2.3vh]"
        style={{
          backgroundImage: `url('/timerbg.jpg')`,
          backgroundPosition: "30% 30%",
        }}
      >
        <h3 className="text-3xl font-semibold  text-white mb-20">
          Countdown to our special event.
        </h3>

        <CountdownTimer targetDate={targetDate} />
      </div>
    </div>
  );
}

export default Timer;
