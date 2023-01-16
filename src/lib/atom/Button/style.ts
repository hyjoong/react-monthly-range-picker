import { styled } from "@stitches/react";

export const StyledButton = styled("button", {
  padding: "10px",
  outLine: "none",
  color: "#1D2429",
  border: "none",
  cursor: "pointer",
  fontWeight: "600",
  borderRadius: "5px",
  backgroundColor: "#F8F8F8",

  "&.selected": {
    color: "#FFFFFF",
    backgroundColor: "#586CF5",
  },
  "&[disabled]": {
    color: "#FFFFFF",
    backgroundColor: "#D1D5DB",
    cursor: "not-allowed",
  },
  variants: {
    isRange: {
      true: {
        color: "#FFFFFF",
        backgroundColor: "#3D91FF",
      },
    },

    isSelected: {
      true: {
        color: "#FFFFFF",
        backgroundColor: "#3D91FF",
      },
    },
  },
});
