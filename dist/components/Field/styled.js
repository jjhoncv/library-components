"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styled_1 = require("../Select/styled");
var styled_2 = require("../DatePicker/styled");
var styled_3 = require("../TimePicker/styled");
var styled_4 = require("../TextArea/styled");
var ui_1 = require("../../ui");
exports.FieldStyled = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  font-family: ", ";\n  width: ", ";\n  flex: 1 1 100%;\n\n\n  input {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  margin-bottom: 14px;\n\n  @media(min-width: 480px) {\n    ", "\n  }\n"], ["\n  font-family: ", ";\n  width: ", ";\n  flex: 1 1 100%;\n\n\n  input {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  ", " {\n    width: 100%;\n  }\n  margin-bottom: 14px;\n\n  @media(min-width: 480px) {\n    ",
    "\n  }\n"])), ui_1.FONTS.ROBOTO_REGULAR, function (props) { return props.portionWidth * 100 + "%"; }, styled_1.SelectWrapper, styled_2.DatePickerWrapper, styled_3.TimePickerWrapper, styled_4.TextAreaStyled, function (props) { return props.portionWidth && "\n      flex: 1 1 calc(" + props.portionWidth * 100 + "% - 20px);\n    "; });
exports.FieldGroup = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n\n  ", "\n\n  @media(min-width: 480px) {\n    ", " {\n      margin-right: 20px;\n    }\n    ", ":last-child {\n      margin-right: 0;\n    }\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n\n  ",
    "\n\n  @media(min-width: 480px) {\n    ", " {\n      margin-right: 20px;\n    }\n    ", ":last-child {\n      margin-right: 0;\n    }\n  }\n"])), function (props) { return props.keepProps && "\n    " + exports.FieldStyled + " {\n      margin-right: 20px;\n      flex: 1 1 calc(50% - 20px);\n    }\n    " + exports.FieldStyled + ":last-child {\n      margin-right: 0;\n    }\n  "; }, exports.FieldStyled, exports.FieldStyled);
exports.Label = styled_components_1.default.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 2px;\n  min-height: 19px;\n  color: ", ";\n  font-size: 12px;\n\n  @media(min-width: 480px) {\n    font-size: 14px;\n  }\n"], ["\n  display: block;\n  margin-bottom: 2px;\n  min-height: 19px;\n  color: ", ";\n  font-size: 12px;\n\n  @media(min-width: 480px) {\n    font-size: 14px;\n  }\n"])), ui_1.COLORS.BLACK);
exports.BoxMessage = styled_components_1.default.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  font-size: 12px;\n  line-height: 15px;\n  margin-top: 4px;\n  ", "\n  height: 15px;\n"], ["\n  display: block;\n  font-size: 12px;\n  line-height: 15px;\n  margin-top: 4px;\n  ",
    "\n  height: 15px;\n"])), function (props) { return props.errorMessage && "\n    color: " + ui_1.COLORS.ERROR_RED + ";\n  "; });
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
