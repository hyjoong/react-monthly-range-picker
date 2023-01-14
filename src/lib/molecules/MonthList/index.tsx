import React from "react";
import MonthBox from "../../atom/MonthBox";

const MonthList = () => {
  return (
    <div>
      {new Array(12).fill(0).map((_, index) => (
        <MonthBox>{index}월</MonthBox>
      ))}
    </div>
  );
};

export default MonthList;
