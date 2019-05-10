"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ui_1 = require("../../ui");
exports.SelectIcon = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n  z-index: 1;\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  position: absolute;\n  right: 8px;\n  top: 8px;\n  cursor: pointer;\n  z-index: 1;\n"])));
exports.SelectStyled = styled_components_1.default.select(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  height: 40px;\n  border: 2px solid ", ";\n  border-radius: 4px;\n  background: transparent;\n  box-sizing: border-box;\n  padding: 0 12px;\n  outline: 0;\n  appearance: none;\n  cursor: pointer;\n  z-index: 2;\n\n  ", "\n\n  &:focus {\n    border: 2px solid ", ";\n  }\n\n  &:focus ~ ", " {\n    svg {\n      color: black;\n    }\n  }\n"], ["\n  width: 100%;\n  height: 40px;\n  border: 2px solid ", ";\n  border-radius: 4px;\n  background: transparent;\n  box-sizing: border-box;\n  padding: 0 12px;\n  outline: 0;\n  appearance: none;\n  cursor: pointer;\n  z-index: 2;\n\n  ",
    "\n\n  &:focus {\n    border: 2px solid ", ";\n  }\n\n  &:focus ~ ", " {\n    svg {\n      color: black;\n    }\n  }\n"])), ui_1.COLORS.BORDER_GRAY, function (props) { return props.error && "\n    border: 2px solid " + ui_1.COLORS.ERROR_RED + ";\n  "; }, ui_1.COLORS.AQUA_BLUE, exports.SelectIcon);
exports.SelectWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: ", ";\n  position: relative;\n  z-index: 0;\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n\n  ", "\n"], ["\n  display: inline-flex;\n  flex-wrap: wrap;\n  align-items: center;\n  width: ", ";\n  position: relative;\n  z-index: 0;\n  color: ", ";\n  font-family: ", ";\n  font-size: 14px;\n\n  ",
    "\n"])), function (props) { return props.fullWidth ? '100%' : props.width; }, ui_1.COLORS.BLACK, ui_1.FONTS.ROBOTO_REGULAR, function (props) { return props.disabled && "\n    pointer-events: none;\n\n    " + exports.SelectStyled + " {\n      opacity: 0.3;\n    }\n\n    " + exports.SelectIcon + " {\n      opacity: 0.3;\n    }\n  "; });
var templateObject_1, templateObject_2, templateObject_3;
