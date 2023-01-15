import { styled } from "@stitches/react";

export const StyledMonthCalendar = styled("div", {
  width: "530px",
  ".calendar-wrapper": {
    display: "flex",
    flexDirection: "column",
  },
  ".calendar-box": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
});
