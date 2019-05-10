"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var styled_1 = require("./styled");
exports.HeaderImage = function (_a) {
    var title = _a.title, image = _a.image, subTitle = _a.subTitle;
    var _b = { src: image[0], pos: image[1] || 'end' }, src = _b.src, pos = _b.pos;
    return (React.createElement(styled_1.HeaderWrapper, null,
        React.createElement(styled_1.HeaderTitleImage, { pos: pos },
            title,
            "  ",
            src && React.createElement("img", { src: src })),
        subTitle && (React.createElement(styled_1.HeaderSubTitle, null, subTitle))));
};
exports.HeaderImage.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
    image: PropTypes.array.isRequired
};
