import { styled } from "@stitches/react";
export var StyledMonthCalendar = styled("div", {
    width: "540px",
    padding: "10px 20px",
    border: "1px solid #D4D4D4",
    ".calendar-wrapper": {
        display: "flex",
        flexDirection: "column",
    },
    ".calendar-box": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
    },
    ".calendar-bottom": {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
        height: "35px",
        ".calendar-date": {
            display: "flex",
            alignItems: "center",
            ">div": {
                display: "flex",
                marginLeft: "10px",
                color: "#6165FF",
                fontWeight: "600",
                ".hyphen": {
                    margin: "auto 10px",
                },
            },
        },
    },
});
