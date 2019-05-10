"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var react_1 = require("react");
var DatePickerCalendar_1 = require("./DatePickerCalendar");
var Icon_1 = require("./../Icon");
var styled_1 = require("./styled");
var useDate = function (date) {
    var _a = react_1.useState(null), dateFormat = _a[0], setDateFormat = _a[1];
    var dateTime;
    if (date === '') {
        dateTime = new Date().getTime();
    }
    else {
        var dateSeparated = date.split("/");
        var year = parseInt(dateSeparated[2]);
        var month = parseInt(dateSeparated[1]) - 1;
        var day = parseInt(dateSeparated[0]);
        dateTime = new Date(year, month, day).getTime();
    }
    react_1.useEffect(function () {
        setDateFormat(dateTime);
    }, [date]);
    return dateFormat;
};
exports.DatePicker = function (_a) {
    var _b = _a.date, date = _b === void 0 ? '' : _b, width = _a.width, fullWidth = _a.fullWidth, error = _a.error, isDisabledPreviousDate = _a.isDisabledPreviousDate, disabled = _a.disabled, onChange = _a.onChange;
    var _c = react_1.useState(date), value = _c[0], setValue = _c[1];
    var _d = react_1.useState(false), open = _d[0], setOpen = _d[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        document.addEventListener('mousedown', handleOutsideClick);
        return function () {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });
    var handleOutsideClick = function (e) {
        var isOutside = !ref.current.contains(e.target);
        isOutside && setOpen(false);
    };
    var dateFormat = useDate(value);
    var handleChange = function (date) {
        setValue(date);
        onChange && onChange(date);
    };
    return (React.createElement(styled_1.DatePickerWrapper, { ref: ref, width: width, fullWidth: fullWidth, disabled: disabled },
        React.createElement(styled_1.DatePickerBox, null,
            React.createElement(styled_1.DatePickerInput, { placeholder: "dd/mm/aaaa", value: value, onClick: function () { return setOpen(true); }, onChange: function (e) { setValue(e.target.value); setOpen(false); }, error: error }),
            React.createElement(styled_1.DatePickerIcon, { error: error },
                React.createElement(Icon_1.Icon, { name: "calendar", color: "#B6B6B6" }))),
        open &&
            (React.createElement(DatePickerCalendar_1.DatePickerCalendar, { date: dateFormat, onChange: handleChange, onClick: function () { return setOpen(false); }, isDisabledPreviousDate: isDisabledPreviousDate }))));
};
exports.DatePicker.propTypes = {
    date: PropTypes.string,
    width: PropTypes.string,
    fullWidth: PropTypes.bool,
    error: PropTypes.bool,
    isDisabledPreviousDate: PropTypes.bool,
    disabled: PropTypes.bool,
    onChange: PropTypes.func
};
exports.DatePicker.defaultProps = {
    width: '200px'
};
