"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ui_1 = require("./../../ui");
exports.IconStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  svg {\n    color: ", "\n    ", "\n  }\n\n  &:hover {\n    svg {\n      color: ", ";\n    }\n  }\n"], ["\n  display: inline-flex;\n  flex-wrap: wrap;\n\n  svg {\n    color: ", "\n    ",
    "\n  }\n\n  &:hover {\n    svg {\n      color: ", ";\n    }\n  }\n"])), function (props) { return props.color || "" + ui_1.COLORS.TEXT_GRAY; }, function (props) { return "\n      width: " + (props.size || 'auto') + ";\n      height: " + (props.size || 'auto') + ";\n    "; }, function (props) { return props.colorHover && "" + props.colorHover; });
var templateObject_1;
