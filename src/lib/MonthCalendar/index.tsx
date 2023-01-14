import React from "react";
import MonthList from "../molecules/MonthList";
import { StyledMonthCalendar } from "./styled";

const MonthCalendar = () => {
  return (
    <StyledMonthCalendar>
      <MonthList />
    </StyledMonthCalendar>
  );
};

export default MonthCalendar;
