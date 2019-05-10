"use strict";
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var react_1 = require("react");
var styled_1 = require("./styled");
exports.TextArea = function (_a) {
    var text = _a.text, getText = _a.getText, nextProps = __rest(_a, ["text", "getText"]);
    var _b = react_1.useState(text), value = _b[0], setValue = _b[1];
    var handleChange = function (value) {
        setValue(value);
        getText && getText(value);
    };
    return (React.createElement(styled_1.TextAreaStyled, __assign({ value: value, onChange: function (e) { return handleChange(e.target.value); } }, nextProps)));
};
exports.TextArea.propTypes = {
    text: PropTypes.string,
    width: PropTypes.string,
    fullWidth: PropTypes.bool,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    maxLength: PropTypes.string,
    minLength: PropTypes.string,
    getText: PropTypes.func
};
exports.TextArea.defaultProps = {
    width: '420px'
};
