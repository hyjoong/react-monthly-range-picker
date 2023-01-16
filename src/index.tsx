import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MonthCalendar from "./lib/MonthCalendar/index";

ReactDOM.render(
  <React.StrictMode>
    <div style={{ margin: "150px" }}>
      <MonthCalendar />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
