"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var styled_1 = require("./styled");
var Icons = require("react-feather");
exports.Input = function (_a) {
    var className = _a.className, type = _a.type, name = _a.name, placeholder = _a.placeholder, value = _a.value, width = _a.width, maxLength = _a.maxLength, fullwidth = _a.fullwidth, disabled = _a.disabled, backgroundColor = _a.backgroundColor, onChange = _a.onChange, icon = _a.icon, dataTest = _a.dataTest, error = _a.error;
    var Icon = function () {
        var nameIconCapitalize = (icon.name.charAt(0).toUpperCase() + icon.name.slice(1)).toString();
        var IconName = Icons[nameIconCapitalize];
        return React.createElement(IconName, null);
    };
    var handleChange = function (e) {
        var target = e.target;
        if (type === 'number') {
            target.value = formatValueChangeState(target.value);
        }
        if (onChange) {
            onChange(e);
        }
    };
    var formatValueChangeState = function (val) {
        return val.replace(/([^0-9]+|^\.)/, '');
    };
    return (React.createElement(styled_1.InputWrapper, null,
        React.createElement(styled_1.InputText, { className: className, type: type === "number" ? "text" : type, name: name, placeholder: placeholder, defaultValue: value, width: width, maxLength: maxLength, disabled: disabled, backgroundColor: backgroundColor, onChange: handleChange, "data-test": dataTest, "data-error": error, fullwidth: fullwidth }),
        icon ?
            React.createElement(styled_1.IconWrapper, { onClick: icon.onClick },
                React.createElement(Icon, null)) : null));
};
exports.Input.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    maxLength: PropTypes.string,
    onChange: PropTypes.func,
    width: PropTypes.string,
    fullwidth: PropTypes.bool,
    disabled: PropTypes.bool,
    backgroundColor: PropTypes.string,
    icon: PropTypes.shape({
        name: PropTypes.string,
        onClick: PropTypes.func
    }),
    dataTest: PropTypes.string,
    error: PropTypes.bool
};
exports.Input.defaultProps = {
    type: 'text',
    width: '200px',
    disabled: false,
    backgroundColor: '#FFFFFF'
};
