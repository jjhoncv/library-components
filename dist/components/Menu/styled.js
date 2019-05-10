"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ui_1 = require("./../../ui");
exports.Menu = styled_components_1.default.ul(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  background: ", ";\n  box-shadow: 0 1px 4px rgba(0,0,0,0.25);\n  border-radius: 2px;\n  font-size: 14px;\n  font-family: ", ";\n  color: ", ";\n"], ["\n  display: inline-block;\n  background: ", ";\n  box-shadow: 0 1px 4px rgba(0,0,0,0.25);\n  border-radius: 2px;\n  font-size: 14px;\n  font-family: ", ";\n  color: ", ";\n"])), ui_1.COLORS.WHITE, ui_1.FONTS.ROBOTO_REGULAR, ui_1.COLORS.TEXT_GRAY);
exports.ItemStyled = styled_components_1.default.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 8px 4px 8px;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  svg {\n    width: 15px;\n    height: 15px;\n    margin-left: 17px;\n\n    & path {\n      color: ", ";\n    }\n\n    & polygon {\n      color: ", ";\n    }\n  }\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:first-child {\n    font-family: ", ";\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  padding: 4px 8px 4px 8px;\n  box-sizing: border-box;\n  cursor: pointer;\n\n  svg {\n    width: 15px;\n    height: 15px;\n    margin-left: 17px;\n\n    & path {\n      color: ", ";\n    }\n\n    & polygon {\n      color: ", ";\n    }\n  }\n\n  &:hover {\n    background: ", ";\n  }\n\n  &:first-child {\n    font-family: ", ";\n  }\n"])), ui_1.COLORS.TEXT_GRAY, ui_1.COLORS.TEXT_GRAY, ui_1.COLORS.HOVER_GRAY, ui_1.FONTS.ROBOTO_BOLD);
var templateObject_1, templateObject_2;
