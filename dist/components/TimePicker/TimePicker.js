"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var react_1 = require("react");
var Icon_1 = require("./../Icon");
var styled_1 = require("./styled");
exports.TimePicker = function (_a) {
    var _b = _a.time, time = _b === void 0 ? '' : _b, width = _a.width, fullWidth = _a.fullWidth, error = _a.error, disabled = _a.disabled, getTimeSelected = _a.getTimeSelected;
    var _c = react_1.useState(false), show = _c[0], setShow = _c[1];
    var _d = react_1.useState(time), value = _d[0], setValue = _d[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        document.addEventListener('mousedown', handleOutsideClick);
        return function () {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });
    var handleOutsideClick = function (e) {
        var isOutside = !ref.current.contains(e.target);
        isOutside && setShow(false);
    };
    var TimePickerLisItem = function (_a) {
        var setTime = _a.setTime;
        var items = [];
        for (var i = 0; i < 24; i++) {
            items.push(i + ":00");
            items.push(i + ":30");
        }
        var handleClick = function (e) {
            var time = e.target.innerText;
            setTime(time);
        };
        var formatTime = function (time) {
            return time.length == 4 ? "0" + time : time;
        };
        return (React.createElement(React.Fragment, null, items.map(function (data, index) { return (React.createElement(styled_1.TimePickerItem, { key: index, onClick: handleClick }, formatTime(data))); })));
    };
    var getTime = function (time) {
        setValue(time);
        setShow(false);
        getTimeSelected && getTimeSelected(time);
    };
    return (React.createElement(styled_1.TimePickerWrapper, { ref: ref, width: width, fullWidth: fullWidth, disabled: disabled },
        React.createElement(styled_1.TimePickerStyled, { onClick: function () { return setShow(!show); } },
            React.createElement(styled_1.TimePickerInput, { type: "text", placeholder: "00:00", readOnly: true, value: value, error: error }),
            React.createElement(styled_1.TimePickerIcon, null,
                React.createElement(Icon_1.Icon, { name: "chevron-down", color: "#B6B6B6" }))),
        show && (React.createElement(styled_1.TimePickerList, null,
            React.createElement(TimePickerLisItem, { setTime: getTime })))));
};
exports.TimePicker.propTypes = {
    time: PropTypes.string,
    width: PropTypes.string,
    fullWidth: PropTypes.bool,
    error: PropTypes.bool,
    disabled: PropTypes.bool,
    getTimeSelected: PropTypes.func
};
exports.TimePicker.defaultProps = {
    width: '200px'
};
