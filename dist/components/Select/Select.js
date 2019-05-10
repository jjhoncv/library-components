"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var react_1 = require("react");
var styled_1 = require("./styled");
var Icon_1 = require("./../Icon");
exports.Select = function (_a) {
    var placeholder = _a.placeholder, disabled = _a.disabled, error = _a.error, width = _a.width, fullWidth = _a.fullWidth, selected = _a.selected, options = _a.options;
    var _b = react_1.useState(selected), value = _b[0], setValue = _b[1];
    var handleChange = function (e) {
        setValue(e.target.value);
    };
    return (React.createElement(styled_1.SelectWrapper, { disabled: disabled, fullWidth: fullWidth, width: width },
        React.createElement(styled_1.SelectStyled, { error: error, value: value, onChange: handleChange },
            placeholder && React.createElement("option", { value: "" }, placeholder),
            options.map(function (item, index) { return (React.createElement("option", { key: index, value: item.value }, item.label)); })),
        React.createElement(styled_1.SelectIcon, null,
            React.createElement(Icon_1.Icon, { name: "chevron-down", color: "#B6B6B6" }))));
};
exports.Select.propTypes = {
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    width: PropTypes.string,
    fullWidth: PropTypes.bool,
    selected: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.number,
        label: PropTypes.string,
    })).isRequired
};
exports.Select.defaultProps = {
    width: '200px'
};
