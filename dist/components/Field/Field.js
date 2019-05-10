"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var styled_1 = require("./styled");
exports.Field = function (_a) {
    var className = _a.className, label = _a.label, portionWidth = _a.portionWidth, children = _a.children, errorMessage = _a.errorMessage;
    return (React.createElement(styled_1.FieldStyled, { className: className, portionWidth: portionWidth },
        React.createElement(styled_1.Label, null, label),
        children,
        React.createElement(styled_1.BoxMessage, { errorMessage: errorMessage }, errorMessage)));
};
exports.Field.propTypes = {
    className: PropTypes.string,
    label: PropTypes.string,
    portionWidth: PropTypes.number,
    children: PropTypes.node.isRequired,
    errorMessage: PropTypes.string,
};
