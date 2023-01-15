import { styled } from "@stitches/react";
export var StyledButton = styled("button", {
    padding: "10px",
    outLine: "none",
    color: "black",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    borderRadius: "5px",
    "&.selected": {
        color: "#FFFFFF",
        backgroundColor: "#586CF5",
    },
    variants: {
        isRange: {
            true: {
                backgroundColor: "#D2C6E3",
            },
        },
        isSelected: {
            true: {
                color: "#FFFFFF",
                backgroundColor: "#586CF5 !important",
            },
        },
        isDisabled: {
            true: {
                color: "#FFFFFF",
                backgroundColor: "#D1D5DB !important",
            },
        },
    },
});
