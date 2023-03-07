import React, { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";

import GlobalContext from "../../Context/GlobalContext";
import "./Day.css";

const Day = (props) => {
  const { day, rowIdx } = props;

  const [dayEvents, setDayEvents] = useState([]);
  const { setSelectedDay, showEventModal, setShowEventModal, savedEvents } =
    useContext(GlobalContext);

  useEffect(() => {
    const events = savedEvents.filter(
      (evt) => dayjs(evt.day).format("DD-MM-YY") === day.format("DD-MM-YY")
    );
    setDayEvents(events);
  }, [savedEvents, day]);

  const getCurrentDay = () => {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") && "today";
  };

  return (
    <div
      className="day-container"
      onClick={() => {
        setSelectedDay(day);
        setShowEventModal(!showEventModal);
      }}
    >
      <header className="day-header">
        {rowIdx === 0 && (
          <p className="dayString">{day.format("ddd").toUpperCase()}</p> // 요일: SUN~SAT
        )}
        <span className={`dayNumber ${getCurrentDay()}`}>
          {day.format("D")}
        </span>
      </header>
      <div className="eventClass-container">
        {dayEvents.map((evt, idx) => (
          <span
            key={idx}
            className="eventClass"
            style={{ backgroundColor: `${evt.label}` }}
          >
            <span className="titleEvt">{evt.title}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Day;
