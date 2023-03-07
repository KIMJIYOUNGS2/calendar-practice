import { createContext } from "react";

const GlobalContext = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},

  smallCalendarMonth: null,
  setSmallCalendarMonth: (index) => {},

  selectedDay: null,
  setSelectedDay: (day) => {},

  showEventModal: false,
  setShowEventModal: () => {},

  // reducer
  dispatchCallEvent: ({ type, payload }) => {},
  savedEvents: []
});

export default GlobalContext;
