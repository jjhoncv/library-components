"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var react_1 = require("react");
var styled_1 = require("./styled");
exports.DatePickerCalendar = function (_a) {
    var date = _a.date, onClick = _a.onClick, onChange = _a.onChange, isDisabledPreviousDate = _a.isDisabledPreviousDate;
    var _b = react_1.useState(new Date(date).getMonth()), month = _b[0], setMonth = _b[1];
    var _c = react_1.useState(new Date(date).getFullYear()), year = _c[0], setYear = _c[1];
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var monthsName = months[month];
    var weekdays = ['Dom', 'Lun', 'Mar', 'Mie', 'Juv', 'Vie', 'Sab'];
    var totalDays = new Date(year, month + 1, 0).getDate();
    var firstDay = new Date(year, month, 1).getDay();
    var onNext = function () {
        if (month < 11) {
            setMonth(month + 1);
        }
        else {
            setMonth(0);
            setYear(year + 1);
        }
    };
    var onPrev = function () {
        if (month > 0) {
            setMonth(month - 1);
        }
        else {
            setMonth(11);
            setYear(year - 1);
        }
    };
    var DatePickerDaysWeek = function (_a) {
        var weekdays = _a.weekdays;
        return (React.createElement(styled_1.DatePickerWeekDays, null, weekdays.map(function (weekday, index) { return (React.createElement(styled_1.DatePickerWeekDay, { key: index }, weekday)); })));
    };
    var DatePickerDaysCalendar = function (_a) {
        var setDay = _a.setDay, onClick = _a.onClick;
        var items = [];
        var rows = [];
        var contador = 1;
        for (var count = 0; count < 42; count++) {
            if (firstDay <= count && count <= totalDays + firstDay - 1) {
                items.push(contador++);
            }
            else {
                items.push("");
            }
        }
        for (var i = 0; i < items.length; i += 7) {
            var sliceIt = items.slice(i, i + 7);
            rows.push(sliceIt);
        }
        var handleClick = function (e) {
            var value = e.target.innerText;
            setDay(value);
            if (onClick) {
                onClick(e);
            }
        };
        return (React.createElement(styled_1.DatePickerDates, null, rows.map(function (row, index) {
            return (React.createElement(styled_1.DatePickerWeek, { key: index }, row.map(function (data, i) {
                var isEmpty = row[i] == "";
                var isLessCurrentDate = new Date(year, month, row[i] + 1).getTime() < new Date().getTime();
                var isSelected = new Date(year, month, row[i]).getTime() == new Date(date).getTime();
                return (isEmpty || (isDisabledPreviousDate && isLessCurrentDate) ? (React.createElement(styled_1.DatePickerWeekDate, { key: i, disabled: true }, data)) :
                    (isSelected ?
                        (React.createElement(styled_1.DatePickerWeekDate, { key: i, selected: true, onClick: function (e) { return handleClick(e); } }, data)) :
                        (React.createElement(styled_1.DatePickerWeekDate, { key: i, onClick: function (e) { return handleClick(e); } }, data))));
            })));
        })));
    };
    var getDay = function (day) {
        onChange(formatDate(day) + "/" + formatDate(month + 1) + "/" + year);
    };
    var formatDate = function (date) {
        return date.toString().length == 1 ? '0' + date : date;
    };
    return (React.createElement(styled_1.DatePickerCalendarWrapper, null,
        React.createElement(styled_1.DatePickerMonth, null,
            React.createElement(styled_1.DatePickerPrev, { onClick: onPrev }, "\u2039"),
            React.createElement(styled_1.DatePickerTitle, null,
                monthsName,
                " ",
                year),
            React.createElement(styled_1.DatePickerNext, { onClick: onNext }, "\u203A")),
        React.createElement(DatePickerDaysWeek, { weekdays: weekdays }),
        React.createElement(DatePickerDaysCalendar, { setDay: getDay, onClick: onClick })));
};
exports.DatePickerCalendar.propTypes = {
    date: PropTypes.number,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    isDisabledPreviousDate: PropTypes.bool
};
