import React, { useState } from "react";
import Button from "../atom/Button";
import MonthList from "../molecules/MonthList";
import { StyledMonthCalendar } from "./styled";

const MonthCalendar = () => {
  const today = new Date();
  const year = String(today.getFullYear());
  const [startMonth, setStartMonth] = useState<string | undefined>(undefined);
  const [endMonth, setEndMonth] = useState<string | undefined>(undefined);
  const [hoverMonth, setHoverMonth] = useState<string | undefined>(undefined);
  const [startYear, setStartYear] = useState(String(Number(year) - 1));
  const [endYear, setEndYear] = useState(year);

  const handleRangeMonth = (year: string, month: string) => {
    const yearMonth = year + month;
    if ((startMonth && endMonth) || !startMonth) {
      setEndMonth(undefined);
      setStartMonth(yearMonth);
      return;
    } else {
      if (yearMonth < startMonth) {
        setEndMonth(startMonth);
        setStartMonth(yearMonth);
        setHoverMonth(undefined);
      } else {
        setEndMonth(yearMonth);
        setHoverMonth(undefined);
      }
    }
  };

  const handleHoverMonth = (year: string, month: string) => {
    if (!startMonth || (startMonth && endMonth)) return;
    const yearMonth = year + month;
    setHoverMonth(yearMonth);
  };

  const onPrevYear = (isStartYear: boolean) => {
    if (!isStartYear && String(Number(endYear) - 1) <= startYear) return;
    isStartYear
      ? setStartYear((prev) => String(Number(prev) - 1))
      : setEndYear((prev) => String(Number(prev) - 1));
  };

  const onNextYear = (isStartYear: boolean) => {
    if (isStartYear && String(Number(endYear) - 1) <= startYear) return;
    isStartYear
      ? setStartYear((prev) => String(Number(prev) + 1))
      : setEndYear((prev) => String(Number(prev) + 1));
  };

  const month =
    +today.getMonth() < 9
      ? `0${today.getMonth() + 1}`
      : `${today.getMonth() + 1}`;
  const todayYearMonth = year + month;

  return (
    <StyledMonthCalendar>
      <div className="calendar-wrapper">
        <div className="calendar-box">
          <MonthList
            year={startYear}
            today={today.getFullYear() + today.getMonth()}
            handleRangeMonth={handleRangeMonth}
            handleHoverMonth={handleHoverMonth}
            setHoverMonth={setHoverMonth}
            startMonth={startMonth}
            hoverMonth={hoverMonth}
            endMonth={endMonth}
            todayYearMonth={todayYearMonth}
            onPrevYear={onPrevYear}
            onNextYear={onNextYear}
            isStartYear={true}
          />
          <MonthList
            year={endYear}
            today={today.getFullYear() + today.getMonth()}
            handleRangeMonth={handleRangeMonth}
            handleHoverMonth={handleHoverMonth}
            setHoverMonth={setHoverMonth}
            startMonth={startMonth}
            hoverMonth={hoverMonth}
            endMonth={endMonth}
            todayYearMonth={todayYearMonth}
            onPrevYear={onPrevYear}
            onNextYear={onNextYear}
            isStartYear={false}
          />
        </div>
        <div className="calendar-bottom">
          <div className="calendar-date">
            {startMonth && (
              <div>
                <p> {startMonth}</p>
                <p className="hyphen">-</p>
                <p>{endMonth} </p>
              </div>
            )}
          </div>
          <Button
            isSelected={startMonth !== undefined && endMonth !== undefined}
            disabled={startMonth === undefined || endMonth === undefined}
          >
            적용하기
          </Button>
        </div>
      </div>
    </StyledMonthCalendar>
  );
};

export default MonthCalendar;
