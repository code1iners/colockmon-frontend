import { useEffect, useRef, useState } from "react";
import { withFormat } from "@ce1pers/date-helpers";

export default function SimpleDigitalClock() {
  const [dateTime, setDateTime] = useState("");
  const intervalId = useRef(-1);

  useEffect(() => {
    intervalId.current = window.setInterval(() => {
      const dateTime = withFormat({ format: "YYYY-MM-DD HH:mm:ss" });
      setDateTime(dateTime);
    }, 1000);
    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  const sexyDate = () => {
    if (!dateTime) return "";
    const result = new Intl.DateTimeFormat(navigator.language, {
      dateStyle: "long",
    }).format(new Date(dateTime));
    return result;
  };

  const sexyTime = () => {
    if (!dateTime) return "";
    const result = new Intl.DateTimeFormat(navigator.language, {
      timeStyle: "short",
    }).format(new Date(dateTime));
    return result;
  };

  return (
    <div className="aspect-video flex flex-col gap-2 justify-center items-center">
      <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl">
        {sexyTime()}
      </span>
      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
        {sexyDate()}
      </span>
    </div>
  );
}
