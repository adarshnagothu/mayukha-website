import React, { useEffect, useState } from "react";
import m3 from "./images/m3.jpeg";

function BirthdayCountdown() {
  const calculateTimeLeft = () => {
    const birthday = new Date("August 6, 2025 00:00:00");
    const now = new Date();
    const difference = birthday - now;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ textAlign: "center", backgroundColor: "#ffe6f0", padding: "5px" }}>
      <h1 style={{ fontSize: "40px", color: "#ff66b2", fontWeight: "bold" }}>
        Mayukha Website
      </h1>
      <img src={m3} alt="pic loading..." style={{ marginTop: "3px", marginRight: "30px", width: "300px" }} />
      <p style={{ fontSize: "20px", color: "#ff66b2", fontWeight: "bold" }}>
        Hi I am Mayukha, welcome to my website
      </p>
      <h2 style={{ fontSize: "30px", color: "#ff66b2", fontWeight: "bold", marginTop: "30px" }}>
        Birthday Countdown
      </h2>

      <div
        style={{
          marginTop: "10px",
          backgroundColor: "#ffccdd",
          display: "inline-block",
          padding: "20px 40px",
          borderRadius: "10px",
          fontSize: "25px",
          fontWeight: "bold",
          color: "#ff3399",
        }}
      >
        {timeLeft.days} Days : {timeLeft.hours} Hours : {timeLeft.minutes} Minutes : {timeLeft.seconds} Seconds
      </div>
      <p
        style={{
          fontFamily: "'Dancing Script', cursive",
          fontWeight: "bold",
          fontSize: "96px",
          color: "#66ccff",
          marginTop: "10px",
        }}
      >
        Save the date: August 06<sup>th</sup>
      </p>
    </div>
  );
}

export default BirthdayCountdown;
