import { useContext } from "react";

import dayjs from "dayjs";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "./CalendarHeader.css";
import GlobalContext from "../../Context/GlobalContext";
import logo from "../../assets/logo_main.png";

const CalendarHeader = () => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  // console.log(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };

  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };

  const handleToday = () => {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  };

  return (
    <header className="calendarHeader">
      <div className="calendar-content">
        <img src={logo} alt="calendar-logo" className="logo" />
        <h1 className="calendarHeader-title">내 최애의 스케줄</h1>
        <button
          className="calendarHeader-todayButton"
          onClick={() => handleToday()}
        >
          Today
        </button>
        <h2 className="calendarHeader-monthYear">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          {/* March 2023 */}
        </h2>
      </div>
      <div className="calendar-button">
        <button
          className="calendarHeader-arrow"
          onClick={() => handlePrevMonth()}
        >
          <span>
            <ChevronLeftIcon />
          </span>
        </button>
        <button
          className="calendarHeader-arrow"
          onClick={() => handleNextMonth()}
        >
          <span>
            <ChevronRightIcon />
          </span>
        </button>
      </div>
    </header>
  );
};

export default CalendarHeader;
