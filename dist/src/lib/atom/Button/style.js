import { styled } from "../../../../stitches.config";
export var StyledButton = styled("button", {
    padding: "10px",
    outLine: "none",
    color: "black",
    border: "1px solid grey",
    cursor: "pointer",
    backGroundColor: "transparent",
    "&.selected": {
        color: "#FFFFFF",
        backgroundColor: "#586CF5",
    },
});
