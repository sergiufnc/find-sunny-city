import React from "react";
import "./Calendar.css";

const Calendar = () => {
  const today = new Date();
  const currentMonth = today.toLocaleString("default", { month: "long" });
  const currentYear = today.getFullYear();
  const daysInMonth = new Date(currentYear, today.getMonth() + 1, 0).getDate();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  const weekRows = [];
  const daysCopy = [...days];
  while (daysCopy.length > 0) {
    weekRows.push(daysCopy.splice(0, 7));
  }

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <h2>
          {currentMonth} {currentYear}
        </h2>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
          </tr>
        </thead>
        <tbody>
          {weekRows.map((week, index) => (
            <tr key={index}>
              {week.map((day, index) => (
                <td key={index}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
