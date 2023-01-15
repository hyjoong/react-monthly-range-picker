import { styled } from "@stitches/react";

export const StyledMonthList = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  width: "250px",
  gap: "7px",

  button: {
    // color: "#FFFFFF",
  },
});
