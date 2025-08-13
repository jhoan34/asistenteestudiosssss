"use client";

import React, { useEffect, useState } from "react";

export default function Page() {
  const [time, setTime] = useState("00:00:00");
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null);

  const inter = () => {
    intervalRef.current = setInterval(() => {
      setTime((prev) => {
        const [hours, minutes, seconds] = prev.split(":");
        let newSeconds = parseInt(seconds);
        let newMinutes = parseInt(minutes);
        let newHours = parseInt(hours);

        if (newSeconds === 0 && newMinutes === 0 && newHours !== 0) {
          newHours--;
          newMinutes = 59;
          newSeconds = 59;
        }
        if (newSeconds === 0 && newMinutes !== 0) {
          newMinutes--;
          newSeconds = 59;
        }
        newSeconds--;

        return `${newHours.toString().padStart(2, "0")}:${newMinutes
          .toString()
          .padStart(2, "0")}:${newSeconds.toString().padStart(2, "0")}`;
      });
    }, 1000);
  };

  const componentes_clock = [
    {
      name: "Inicio",
      func: () => {
        setIsRunning(true);
        inter();
      },
    },
    {
      name: "Parar",
      func: () => {
        setIsRunning(false);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      },
    },
    {
      name: "Reiniciar",
      func: () => {
        setTime("00:00:00");
      },
    },
  ];

  const changeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  /*
  useEffect(() => {
    console.log(isRunning);
  }, [isRunning]);
  */
  return (
    <div className="w-[70%] h-[80vh] bg-gradient-to-br from-amber-500 to-amber-700 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col rounded-2xl shadow-2xl overflow-hidden">
      {/* Barra de controles */}
      <div className="w-full h-[10vh] flex flex-row justify-center items-center bg-amber-200 gap-x-6 px-4 shadow-md">
        {componentes_clock.map((ele, i) => {
          return (
            <div
              key={i}
              onClick={() => {
                ele.func();
              }}
              className="cursor-pointer transition-all duration-300 hover:scale-105 border border-amber-400 w-[20%] h-[70%] bg-white flex flex-col items-center justify-center rounded-lg shadow-sm hover:shadow-lg"
            >
              <p className="text-lg font-semibold text-amber-700">{ele.name}</p>
            </div>
          );
        })}
      </div>

      {/* Pantalla principal */}
      <div className="flex-1 bg-gradient-to-br from-blue-500 to-blue-700 flex flex-col items-center justify-center gap-6 p-6">
        {isRunning ? (
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg">
            <p className="text-5xl font-bold text-gray-800 tracking-widest">
              {time}
            </p>
          </div>
        ) : (
          <div className="bg-white px-6 py-4 rounded-lg shadow-lg">
            <input
              disabled={isRunning}
              value={time}
              onChange={changeTime}
              type="text"
              className="bg-amber-50 w-full h-full text-center rounded-lg  font-semibold text-gray-800 focus:outline-none text-4xl disabled:bg-gray-200"
            />
          </div>
        )}
      </div>
    </div>
  );
}
