var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import MonthList from "../molecules/MonthList";
import { StyledMonthCalendar } from "./styled";
var MonthCalendar = function () {
    return (_jsx(StyledMonthCalendar, { children: _jsxs("div", __assign({ className: "calendar-box" }, { children: [_jsx(MonthList, {}, void 0), _jsx(MonthList, {}, void 0)] }), void 0) }, void 0));
};
export default MonthCalendar;
