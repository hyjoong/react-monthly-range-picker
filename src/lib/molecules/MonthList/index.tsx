import React from "react";
import { ArrowIcon } from "../../atom/ArrowIcon";
import Button from "../../atom/Button";
import { StyledMonthList } from "./style";

const MonthList = ({
  year,
  handleRangeMonth,
  handleHoverMonth,
  setHoverMonth,
  startMonth,
  hoverMonth,
  endMonth,

  isStartYear,
  todayYearMonth,
  onPrevYear,
  onNextYear,
}: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          onClick={() => onPrevYear(isStartYear)}
          style={{ background: "transparent" }}
        >
          <ArrowIcon />
        </Button>
        <p
          style={{
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            alignItems: "cneter",
          }}
        >
          {year}
        </p>

        <Button
          onClick={() => onNextYear(isStartYear)}
          style={{ transform: "rotate(180deg)", background: "transparent" }}
        >
          <ArrowIcon />
        </Button>
      </div>

      <StyledMonthList>
        {new Array(12).fill(0).map((_, index) => {
          const month = index < 9 ? `0${index + 1}` : `${index + 1}`;
          const yearMonth = String(year) + month;

          const isRange =
            (startMonth < yearMonth && yearMonth <= hoverMonth) ||
            (startMonth < yearMonth && yearMonth <= endMonth);

          return (
            <Button
              onMouseOver={() => handleHoverMonth(year, month)}
              onMouseOut={() => setHoverMonth(undefined)}
              onClick={() => handleRangeMonth(year, month)}
              key={year + index}
              isRange={isRange}
              isSelected={
                String(year) + month === startMonth ||
                String(year) + month === endMonth
              }
              isDisabled={todayYearMonth < yearMonth}
            >
              {index + 1}월
            </Button>
          );
        })}
      </StyledMonthList>
    </div>
  );
};
// 사이에 있으면

export default MonthList;
