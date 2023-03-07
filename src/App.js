import { useState, useContext, useEffect } from "react";

import CalendarHeader from "./Components/CalendarHeader/CalendarHeader";
import Month from "./Components/Month/Month";
import { getMonth } from "./utils";
import GlobalContext from "./Context/GlobalContext";
import EventModal from "./Components/EventModal/EventModal";
import "./app.css";

const App = () => {
  console.table(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);
  const [currentMonth, setCurrentMonth] = useState(getMonth());

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <div className="App">
      <>
        {showEventModal && <EventModal />}
        <div className="main-container">
          <CalendarHeader />
          <div className="main-content">
            <Month month={currentMonth} />
          </div>
        </div>
      </>
    </div>
  );
};

export default App;
