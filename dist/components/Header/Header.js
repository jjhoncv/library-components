"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var styled_1 = require("./styled");
exports.Header = function (_a) {
    var title = _a.title, subTitle = _a.subTitle;
    return (React.createElement(styled_1.HeaderWrapper, null,
        React.createElement(styled_1.HeaderTitle, null, title),
        subTitle && (React.createElement(styled_1.HeaderSubTitle, null, subTitle))));
};
exports.Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string
};
