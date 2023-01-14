import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import Button from "../../atom/Button";
import { StyledMonthList } from "./style";
var MonthList = function () {
    return (_jsx(StyledMonthList, { children: new Array(12).fill(0).map(function (_, index) { return (_jsxs(Button, { children: [index + 1, "\uC6D4"] }, void 0)); }) }, void 0));
};
export default MonthList;
