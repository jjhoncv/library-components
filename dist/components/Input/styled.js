"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ui_1 = require("./../../ui");
exports.InputWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline;\n  position: relative;\n  z-index: 0;\n"], ["\n  display: inline;\n  position: relative;\n  z-index: 0;\n"])));
exports.InputText = styled_components_1.default.input(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  width: ", ";\n  height: 40px;\n  border: 2px solid ", ";\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 12px;\n  font-size: 14px;\n  ", ";\n  ", ";\n  font-family: ", ";\n  &::placeholder{\n    font-family: ", "\n  }\n  &:focus{\n    outline: none;\n    border: 2px solid ", ";\n  }\n"], ["\n  background-color: ", ";\n  width: ", ";\n  height: 40px;\n  border: 2px solid ", ";\n  box-sizing: border-box;\n  border-radius: 4px;\n  padding: 12px;\n  font-size: 14px;\n  ",
    ";\n  ",
    ";\n  font-family: ", ";\n  &::placeholder{\n    font-family: ", "\n  }\n  &:focus{\n    outline: none;\n    border: 2px solid ", ";\n  }\n"])), function (props) { return props.backgroundColor ? "" + props.backgroundColor : "" + ui_1.COLORS.WHITE; }, function (props) { return props.fullwidth ? '100%' : props.width; }, ui_1.COLORS.BORDER_GRAY, function (props) { return props.disabled && styled_components_1.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    pointer-events: none;\n    user-select: none;\n    opacity: 0.3;\n  "], ["\n    pointer-events: none;\n    user-select: none;\n    opacity: 0.3;\n  "]))); }, function (props) { return props['data-error'] && styled_components_1.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    border: 2px solid ", ";\n  "], ["\n    border: 2px solid ", ";\n  "])), ui_1.COLORS.ERROR_RED); }, ui_1.FONTS.ROBOTO_REGULAR, ui_1.FONTS.ROBOTO_REGULAR, ui_1.COLORS.AQUA_BLUE);
exports.IconWrapper = styled_components_1.default.span(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  right: 10px;\n  z-index: 10;\n  top: -3px;\n  cursor: pointer;\n"], ["\n  position: absolute;\n  right: 10px;\n  z-index: 10;\n  top: -3px;\n  cursor: pointer;\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
