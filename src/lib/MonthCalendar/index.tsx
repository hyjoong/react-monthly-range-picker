import React from "react";
import MonthList from "../molecules/MonthList";
import { StyledMonthCalendar } from "./styled";

const MonthCalendar = () => {
  return (
    <StyledMonthCalendar>
      <div className="calendar-box">
        <MonthList />
        <MonthList />
      </div>
    </StyledMonthCalendar>
  );
};

export default MonthCalendar;
