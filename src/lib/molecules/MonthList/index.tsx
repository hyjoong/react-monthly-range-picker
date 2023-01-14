import React from "react";
import Button from "../../atom/Button";
import { StyledMonthList } from "./style";

const MonthList = () => {
  return (
    <StyledMonthList>
      {new Array(12).fill(0).map((_, index) => (
        <Button>{index + 1}월</Button>
      ))}
    </StyledMonthList>
  );
};

export default MonthList;
