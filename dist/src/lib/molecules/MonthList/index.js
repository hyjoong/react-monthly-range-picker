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
import { ArrowIcon } from "../../atom/ArrowIcon";
import Button from "../../atom/Button";
import { StyledMonthList } from "./style";
var MonthList = function (_a) {
    var year = _a.year, handleRangeMonth = _a.handleRangeMonth, handleHoverMonth = _a.handleHoverMonth, setHoverMonth = _a.setHoverMonth, startMonth = _a.startMonth, hoverMonth = _a.hoverMonth, endMonth = _a.endMonth, isStartYear = _a.isStartYear, todayYearMonth = _a.todayYearMonth, onPrevYear = _a.onPrevYear, onNextYear = _a.onNextYear;
    return (_jsxs("div", __assign({ style: { display: "flex", flexDirection: "column" } }, { children: [_jsxs("div", __assign({ style: { display: "flex", justifyContent: "center" } }, { children: [_jsx(Button, __assign({ onClick: function () { return onPrevYear(isStartYear); }, style: { background: "transparent" } }, { children: _jsx(ArrowIcon, {}, void 0) }), void 0), _jsx("p", __assign({ style: {
                            fontWeight: "600",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "cneter",
                        } }, { children: year }), void 0), _jsx(Button, __assign({ onClick: function () { return onNextYear(isStartYear); }, style: { transform: "rotate(180deg)", background: "transparent" } }, { children: _jsx(ArrowIcon, {}, void 0) }), void 0)] }), void 0), _jsx(StyledMonthList, { children: new Array(12).fill(0).map(function (_, index) {
                    var month = index < 9 ? "0".concat(index + 1) : "".concat(index + 1);
                    var yearMonth = String(year) + month;
                    var isRange = (startMonth < yearMonth && yearMonth <= hoverMonth) ||
                        (startMonth < yearMonth && yearMonth <= endMonth);
                    return (_jsxs(Button, __assign({ onMouseOver: function () { return handleHoverMonth(year, month); }, onMouseOut: function () { return setHoverMonth(undefined); }, onClick: function () { return handleRangeMonth(year, month); }, isRange: isRange, isSelected: String(year) + month === startMonth ||
                            String(year) + month === endMonth, isDisabled: todayYearMonth < yearMonth }, { children: [index + 1, "\uC6D4"] }), year + index));
                }) }, void 0)] }), void 0));
};
// 사이에 있으면
export default MonthList;
