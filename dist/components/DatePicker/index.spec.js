"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var DatePicker_1 = require("./DatePicker");
var styled_1 = require("./styled");
describe('DatePicker Component', function () {
    describe('DatePicker => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(DatePicker_1.DatePicker, null));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('DatePicker Builder', function () {
        it('DatePicker => Render prop disabled', function () {
            var wrapper = enzyme_1.shallow(React.createElement(DatePicker_1.DatePicker, { disabled: true }));
            expect(wrapper.prop('disabled')).toBe(true);
        });
        it('DatePicker => Render prop error', function () {
            var wrapper = enzyme_1.shallow(React.createElement(DatePicker_1.DatePicker, { error: true }));
            expect(wrapper.find(styled_1.DatePickerInput).prop('error')).toBe(true);
        });
        it('DatePicker => Render value input', function () {
            var wrapper = enzyme_1.shallow(React.createElement(DatePicker_1.DatePicker, { date: "13/03/1998" }));
            expect(wrapper.find(styled_1.DatePickerInput).prop('value')).toBe("13/03/1998");
        });
    });
});
