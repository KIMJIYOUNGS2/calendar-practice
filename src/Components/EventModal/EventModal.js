import { useContext, useState } from "react";
import GlobalContext from "../../Context/GlobalContext";
import "./EventModal.css";

import DragHandleIcon from "@mui/icons-material/DragHandle";
import CloseIcon from "@mui/icons-material/Close";
import SegmentIcon from "@mui/icons-material/Segment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CheckIcon from "@mui/icons-material/Check";

const EventModal = () => {
  const { showEventModal, setShowEventModal, selectedDay, dispatchCallEvent } =
    useContext(GlobalContext);
  // 모달창 카테고리 색상
  const labelStyle = [
    "#1F8A70",
    "RED",
    "#FFD372",
    "#9DF1DF",
    "#93C6E7",
    "#BE6DB7",
  ];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLabel, setSelectedLabel] = useState(labelStyle[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const calendarEvent = {
      title,
      description,
      label: selectedLabel,
      day: selectedDay.valueOf(),
      id: Date.now(),
    };

    dispatchCallEvent({ type: "ADD", payload: calendarEvent });

    setShowEventModal(!showEventModal);
  };

  return (
    <div className="eventModal">
      <form className="eventModal-form" onSubmit={(e) => handleSubmit(e)}>
        <header className="eventModal-header">
          <span className="eventModal-icon">
            <DragHandleIcon />
          </span>
          <span className="eventModal-scheduleDate">
            {selectedDay.format("dddd, MMMM DD")}
          </span>
          <button
            className="eventModal-icon close"
            onClick={() => setShowEventModal(!showEventModal)}
          >
            <CloseIcon />
          </button>
        </header>
        <div className="eventModal-content">
          <div className="eventModal-layout">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="일정을 입력하세요"
              className="eventModal-input eventModal-inputTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <span />
            {/* <input
              type="text"
              name="description"
              placeholder="장소를 입력하세요"
              className="eventModal-input eventModal-inputDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <span /> */}
            <div className="eventModal-circle">
              {labelStyle.map((label, i) => (
                <span
                  key={i}
                  className="circle"
                  style={{ backgroundColor: `${label}` }}
                  onClick={() => setSelectedLabel(label)}
                >
                  {selectedLabel === label && (
                    <span className="eventModal-check">
                      <CheckIcon />
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
        <footer className="footer">
          <button type="submit" className="eventModal-submitBtn">
            Save
          </button>
        </footer>
      </form>
    </div>
  );
};

export default EventModal;
