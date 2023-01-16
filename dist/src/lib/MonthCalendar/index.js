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
import { useState } from "react";
import Button from "../atom/Button";
import MonthList from "../molecules/MonthList";
import { StyledMonthCalendar } from "./styled";
var MonthCalendar = function () {
    var today = new Date();
    var year = String(today.getFullYear());
    var _a = useState(undefined), startMonth = _a[0], setStartMonth = _a[1];
    var _b = useState(undefined), endMonth = _b[0], setEndMonth = _b[1];
    var _c = useState(undefined), hoverMonth = _c[0], setHoverMonth = _c[1];
    var _d = useState(String(Number(year) - 1)), startYear = _d[0], setStartYear = _d[1];
    var _e = useState(year), endYear = _e[0], setEndYear = _e[1];
    var handleRangeMonth = function (year, month) {
        var yearMonth = year + month;
        if ((startMonth && endMonth) || !startMonth) {
            setEndMonth(undefined);
            setStartMonth(yearMonth);
            return;
        }
        else {
            if (yearMonth < startMonth) {
                setEndMonth(startMonth);
                setStartMonth(yearMonth);
                setHoverMonth(undefined);
            }
            else {
                setEndMonth(yearMonth);
                setHoverMonth(undefined);
            }
        }
    };
    var handleHoverMonth = function (year, month) {
        if (!startMonth || (startMonth && endMonth))
            return;
        var yearMonth = year + month;
        setHoverMonth(yearMonth);
    };
    var onPrevYear = function (isStartYear) {
        if (!isStartYear && String(Number(endYear) - 1) <= startYear)
            return;
        isStartYear
            ? setStartYear(function (prev) { return String(Number(prev) - 1); })
            : setEndYear(function (prev) { return String(Number(prev) - 1); });
    };
    var onNextYear = function (isStartYear) {
        if (isStartYear && String(Number(endYear) - 1) <= startYear)
            return;
        isStartYear
            ? setStartYear(function (prev) { return String(Number(prev) + 1); })
            : setEndYear(function (prev) { return String(Number(prev) + 1); });
    };
    var month = +today.getMonth() < 9
        ? "0".concat(today.getMonth() + 1)
        : "".concat(today.getMonth() + 1);
    var todayYearMonth = year + month;
    return (_jsx(StyledMonthCalendar, { children: _jsxs("div", __assign({ className: "calendar-wrapper" }, { children: [_jsxs("div", __assign({ className: "calendar-box" }, { children: [_jsx(MonthList, { year: startYear, today: today.getFullYear() + today.getMonth(), handleRangeMonth: handleRangeMonth, handleHoverMonth: handleHoverMonth, setHoverMonth: setHoverMonth, startMonth: startMonth, hoverMonth: hoverMonth, endMonth: endMonth, todayYearMonth: todayYearMonth, onPrevYear: onPrevYear, onNextYear: onNextYear, isStartYear: true }, void 0), _jsx(MonthList, { year: endYear, today: today.getFullYear() + today.getMonth(), handleRangeMonth: handleRangeMonth, handleHoverMonth: handleHoverMonth, setHoverMonth: setHoverMonth, startMonth: startMonth, hoverMonth: hoverMonth, endMonth: endMonth, todayYearMonth: todayYearMonth, onPrevYear: onPrevYear, onNextYear: onNextYear, isStartYear: false }, void 0)] }), void 0), _jsxs("div", __assign({ className: "calendar-bottom" }, { children: [_jsx("div", __assign({ className: "calendar-date" }, { children: startMonth && (_jsxs("div", { children: [_jsxs("p", { children: [" ", startMonth] }, void 0), _jsx("p", __assign({ className: "hyphen" }, { children: "-" }), void 0), _jsxs("p", { children: [endMonth, " "] }, void 0)] }, void 0)) }), void 0), _jsx(Button, __assign({ isSelected: startMonth !== undefined && endMonth !== undefined, disabled: startMonth === undefined || endMonth === undefined }, { children: "\uC801\uC6A9\uD558\uAE30" }), void 0)] }), void 0)] }), void 0) }, void 0));
};
export default MonthCalendar;
