"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ui_1 = require("./../../ui");
var animationLoading = styled_components_1.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  to {transform: rotate(360deg);}\n"], ["\n  to {transform: rotate(360deg);}\n"])));
exports.ButtonLoading = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: inline-block;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  border-top: 2px solid ", ";\n  animation: ", " .6s linear infinite;\n\n  ", ";\n"], ["\n  display: inline-block;\n  box-sizing: border-box;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  border-top: 2px solid ", ";\n  animation: ", " .6s linear infinite;\n\n  ",
    ";\n"])), ui_1.COLORS.BLACK, ui_1.COLORS.LIGHT_GRAY, animationLoading, function (props) { return props.primary && "\n    border: 2px solid " + ui_1.COLORS.WHITE + ";\n    border-top: 2px solid " + ui_1.COLORS.BLACK + ";\n  "; });
exports.ButtonStyled = styled_components_1.default.button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  background-color: ", ";\n  height: 44px;\n  padding: 12px 25px;\n  border: none;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  color: ", ";\n  font-size: 14px;\n  font-family: ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: ", ";\n  background-color: ", ";\n  height: 44px;\n  padding: 12px 25px;\n  border: none;\n  border: 1px solid ", ";\n  border-radius: 4px;\n  color: ", ";\n  font-size: 14px;\n  font-family: ", ";\n  cursor: pointer;\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  ",
    ";\n\n  ",
    ";\n\n  ",
    ";\n"])), function (props) { return props.fullWidth ? '100%' : 'auto'; }, ui_1.COLORS.LIGHT_GRAY, ui_1.COLORS.OPAQUE_GRAY, ui_1.COLORS.BLACK, ui_1.FONTS.ROBOTO_REGULAR, ui_1.COLORS.HOVER_GRAY, function (props) { return props.disabled && "\n    pointer-events: none;\n    user-select: none;\n    opacity: 0.3;\n  "; }, function (props) { return props.loading && "\n    pointer-events: none;\n    user-select: none;\n  "; }, function (props) { return props.primary && "\n    background:" + ui_1.COLORS.BLACK + ";\n    color: " + ui_1.COLORS.WHITE + ";\n\n    &:hover {\n      background-color: " + ui_1.COLORS.HOVER_BLACK + ";\n    }\n  "; });
var templateObject_1, templateObject_2, templateObject_3;
