"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var TextArea_1 = require("./TextArea");
describe('TextArea Component', function () {
    describe('TextArea => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TextArea_1.TextArea, null));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('TextArea Builder', function () {
        it('TextArea => Render prop disabled', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TextArea_1.TextArea, { disabled: true }));
            expect(wrapper.prop('disabled')).toBe(true);
        });
        it('TextArea => Render prop error', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TextArea_1.TextArea, { error: true }));
            expect(wrapper.prop('error')).toBe(true);
        });
        it('TextArea => Render value', function () {
            var wrapper = enzyme_1.shallow(React.createElement(TextArea_1.TextArea, { text: "Descripci\u00F3n" }));
            expect(wrapper.prop('value')).toBe("Descripción");
        });
        it('TextArea => Render prop getText onChange', function () {
            var mockFn = jest.fn();
            var wrapper = enzyme_1.shallow(React.createElement(TextArea_1.TextArea, { text: "Descripci\u00F3n", getText: mockFn }));
            wrapper.simulate('change', { target: { value: 'test' } });
            expect(mockFn.mock.calls[0][0]).toBe('test');
        });
    });
});
