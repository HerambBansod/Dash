"use client";
import { useState, useEffect } from 'react';

export default function AttendanceList() {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setStudents(data))
    }, [])

    const handleChange = (studentId, status) => {
        setAttendance(prev => ({
            ...prev,
            [studentId]: status
        }))
    }

    const handleSubmit = () => {
        console.log(attendance);
        alert("Attendance submitted! Check console for details.");
    }
    return (
        <div className="bg-[#D8E983]/40 rounded-2xl p-5 w-90 shadow">
            <h2 className="text-lg text-gray-700 font-semibold mb-4">Mark Attendance</h2>

            <div className="space-y-3 max-h-105 overflow-y-auto">
                {students.map(student => (
                    <div
                        key={student.id}
                        className="flex items-center justify-between border-b pb-2"
                    >
                        <span className="text-sm text-gray-700 font-medium">{student.name}</span>

                        <div className="flex gap-3 text-sm">
                            <label className="flex items-center text-gray-700  gap-1">
                                <input
                                    type="radio"
                                    name={`attendance-${student.id}`}
                                    checked={attendance[student.id] === "present"}
                                    onChange={() => handleChange(student.id, "present")}
                                    className="accent-green-700"
                                />
                                P
                            </label>

                            <label className="flex items-center text-gray-700 gap-1">
                                <input
                                    type="radio"
                                    name={`attendance-${student.id}`}
                                    checked={attendance[student.id] === "absent"}
                                    onChange={() => handleChange(student.id, "absent")}
                                    className="accent-red-700"
                                />
                                A
                            </label>

                            <label className="flex items-center text-gray-700 gap-1">
                                <input
                                    type="radio"
                                    name={`attendance-${student.id}`}
                                    checked={attendance[student.id] === "late"}
                                    onChange={() => handleChange(student.id, "late")}
                                    className="accent-gray-700"
                                />
                                L
                            </label>
                        </div>
                    </div>
                ))}
            </div>

            <button
                onClick={handleSubmit}
                className="mt-5 w-full bg-black text-white py-2 rounded-lg hover:opacity-90"
            >
                Submit Attendance
            </button>
        </div>
    );
}

