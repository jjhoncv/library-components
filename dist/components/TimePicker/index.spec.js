"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var TimePicker_1 = require("./TimePicker");
var styled_1 = require("./styled");
describe('TimePicker Component', function () {
    describe('TimePicker => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TimePicker_1.TimePicker, null));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('TimePicker Builder', function () {
        it('TimePicker => Render prop disabled', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TimePicker_1.TimePicker, { disabled: true }));
            expect(wrapper.prop('disabled')).toBe(true);
        });
        it('TimePicker => Render prop error', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TimePicker_1.TimePicker, { error: true }));
            expect(wrapper.find(styled_1.TimePickerInput).prop('error')).toBe(true);
        });
        it('TimePicker => Render value input', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TimePicker_1.TimePicker, { time: "12:30" }));
            expect(wrapper.find(styled_1.TimePickerInput).prop('value')).toBe("12:30");
        });
    });
});
