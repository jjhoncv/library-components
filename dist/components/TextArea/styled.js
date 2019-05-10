"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ui_1 = require("./../../ui");
exports.TextAreaStyled = styled_components_1.default.textarea(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  height: 100px;\n  font-family: ", ";\n  font-size: 14px;\n  resize: none;\n  padding: 12px;\n  background: ", ";\n  border: 2px solid ", ";\n  border-radius: 4px;\n  outline: 0;\n\n  ", "\n\n  ", "\n\n  &:focus{\n    border: 2px solid ", ";\n  }\n\n  &::placeholder{\n    color: ", ";\n    font-family: ", "\n  }\n"], ["\n  width: ", ";\n  height: 100px;\n  font-family: ", ";\n  font-size: 14px;\n  resize: none;\n  padding: 12px;\n  background: ", ";\n  border: 2px solid ", ";\n  border-radius: 4px;\n  outline: 0;\n\n  ",
    "\n\n  ",
    "\n\n  &:focus{\n    border: 2px solid ", ";\n  }\n\n  &::placeholder{\n    color: ", ";\n    font-family: ", "\n  }\n"])), function (props) { return props.fullWidth ? '100%' : props.width; }, ui_1.FONTS.ROBOTO_REGULAR, ui_1.COLORS.WHITE, ui_1.COLORS.BORDER_GRAY, function (props) { return props.error && "\n    border: 2px solid " + ui_1.COLORS.ERROR_RED + ";\n  "; }, function (props) { return props.disabled && "\n    pointer-events: none;\n    opacity: 0.3;\n  "; }, ui_1.COLORS.AQUA_BLUE, ui_1.COLORS.TEXT_GRAY, ui_1.FONTS.ROBOTO_REGULAR);
var templateObject_1;
