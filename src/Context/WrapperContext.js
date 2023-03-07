import { useEffect, useReducer, useState } from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";

function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "ADD": {
      return [...state, payload];
    }
    // case "UPDATE": {
    //   return state.map((evt) => (evt.id === payload.id ? payload : evt));
    // }
    // case "DELETE": {
    //   return state.filter((evt) => evt.id !== payload.id);
    // }
    default:
      throw new Error();
  }
}

function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}

const WrapperContext = (props) => {
  const [monthIndex, setMonthIndex] = useState(dayjs().month());
  const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [showEventModal, setShowEventModal] = useState(false);
  const [savedEvents, dispatchCallEvent] = useReducer(
    savedEventsReducer,
    [],
    initEvents
  );

  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
  }, [savedEvents]);

  console.log("storage", savedEvents);

  useEffect(() => {
    if (smallCalendarMonth !== null) {
      setMonthIndex(smallCalendarMonth);
    }
  }, [smallCalendarMonth]);

  return (
    <GlobalContext.Provider
      value={{
        monthIndex,
        setMonthIndex,

        selectedDay,
        setSelectedDay,

        showEventModal,
        setShowEventModal,

        dispatchCallEvent,
        savedEvents,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default WrapperContext;
