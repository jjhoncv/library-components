"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var Select_1 = require("./Select");
var styled_1 = require("./styled");
var options = [
    {
        label: 'Soles',
        value: 0
    },
    {
        label: 'Dólares',
        value: 1
    }
];
describe('Select Component', function () {
    describe('Select => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Select_1.Select, { options: options }));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Select Builder', function () {
        it('Select => Render prop disabled', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Select_1.Select, { options: options, disabled: true }));
            expect(wrapper.prop('disabled')).toBe(true);
        });
        it('Select => Render prop error', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Select_1.Select, { options: options, error: true }));
            expect(wrapper.find(styled_1.SelectStyled).prop('error')).toBe(true);
        });
        it('Select => Render label of the first option', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Select_1.Select, { options: options }));
            expect(wrapper.find(styled_1.SelectStyled).childAt(0).prop('children')).toBe('Soles');
        });
        it('Select => Render placeholder', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Select_1.Select, { options: options, placeholder: "Seleccione monto" }));
            expect(wrapper.find(styled_1.SelectStyled).childAt(0).prop('children')).toBe('Seleccione monto');
        });
    });
});
