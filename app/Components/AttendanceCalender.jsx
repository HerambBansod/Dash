"use client";
import { useState } from "react";

export default function Calendar() {
    const today = new Date();

    const [month, setMonth] = useState(today.getMonth());
    const [year, setYear] = useState(today.getFullYear());
    const [selectedDay, setSelectedDay] = useState(today.getDate());

    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let firstDay = new Date(year, month, 1).getDay();
    firstDay = (firstDay + 6) % 7;

    const days = [];
    for (let i = 0; i < firstDay; i++) days.push(null);
    for (let d = 1; d <= daysInMonth; d++) days.push(d);

    const nextMonth = () => {
        if (month === 11) {
            setMonth(0);
            setYear(y => y + 1);
        } else setMonth(m => m + 1);
    };

    const prevMonth = () => {
        if (month === 0) {
            setMonth(11);
            setYear(y => y - 1);
        } else setMonth(m => m - 1);
    };

    const monthName = new Date(year, month).toLocaleString("default", {
        month: "long",
    });

    return (
        <div className="p-6 `w-85` text-gray-700 bg-[#D8E983]/40 rounded-lg shadow">
            <div className="flex justify-between mb-4">
                <button onClick={prevMonth}>◀</button>
                <h2>{monthName} {year}</h2>
                <button onClick={nextMonth}>▶</button>
            </div>

            <div className="grid grid-cols-7 text-center text-sm mb-2">
                {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(d => <div key={d}>{d}</div>)}
            </div>

            <div className="grid grid-cols-7 gap-2">
                {days.map((day, i) => (
                    <div
                        key={i}
                        onClick={() => day && setSelectedDay(day)}
                        className={`h-10 flex items-center justify-center rounded-full cursor-pointer
              ${day === selectedDay ? "bg-black text-white" : "hover:bg-gray-200"}
            `}
                    >
                        {day || ""}
                    </div>
                ))}
            </div>
        </div>
    );
}
