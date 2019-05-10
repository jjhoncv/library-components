"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var ui_1 = require("./../../ui");
exports.HeaderWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
exports.HeaderTitle = styled_components_1.default.span(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: block;\n  font-family: ", ";\n  font-size: 24px;\n  line-height: 30px;\n  padding-bottom: 7px;\n  border-bottom: 1px black dashed;\n  color: ", ";\n"], ["\n  display: block;\n  font-family: ", ";\n  font-size: 24px;\n  line-height: 30px;\n  padding-bottom: 7px;\n  border-bottom: 1px black dashed;\n  color: ", ";\n"])), ui_1.FONTS.MULI_BOLD, ui_1.COLORS.TEXT_GRAY);
exports.HeaderSubTitle = styled_components_1.default.span(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  font-family: ", ";\n  font-size: 18px;\n  line-height: 23px;\n  color: ", ";\n  padding-top: 9px;\n"], ["\n  display: block;\n  font-family: ", ";\n  font-size: 18px;\n  line-height: 23px;\n  color: ", ";\n  padding-top: 9px;\n"])), ui_1.FONTS.MULI_REGULAR, ui_1.COLORS.BLACK);
exports.HeaderTitleImage = styled_components_1.default(exports.HeaderTitle)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n\n  ", "\n"], ["\n  display: flex;\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var pos = _a.pos;
    return (pos === "start") && "\n    justify-content: flex-end;\n    flex-direction: row-reverse;\n    align-items: flex-end;\n  ";
}, function (_a) {
    var pos = _a.pos;
    return (pos === "end") && "\n    align-items: flex-end;\n    justify-content: space-between;\n  ";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
