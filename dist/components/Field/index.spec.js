"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var Field_1 = require("./Field");
var Input_1 = require("./../Input");
var styled_1 = require("./styled");
var propsField = {
    className: 'c-field',
    label: 'Nombre'
};
describe('Field Component', function () {
    describe('Field => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Field_1.Field, __assign({}, propsField),
                React.createElement(Input_1.Input, { name: 'input' })));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Field Builder', function () {
        it('Field => validate label', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Field_1.Field, __assign({}, propsField),
                React.createElement(Input_1.Input, { name: 'input' })));
            expect(wrapper.childAt(0).prop('children')).toBe('Nombre');
        });
        it('Field => render with prop portionWidth', function () {
            var props = {
                className: 'c-field',
                label: 'Nombre',
                portionWidth: 1 / 4
            };
            var wrapper = enzyme_1.shallow(React.createElement(Field_1.Field, __assign({}, props),
                React.createElement(Input_1.Input, { name: 'input' })));
            expect(wrapper.prop('portionWidth')).toEqual(1 / 4);
        });
        it('Field => validate errorMessage', function () {
            var props = {
                className: 'c-field',
                label: 'Nombre',
                portionWidth: 1 / 4,
                errorMessage: 'Campo Requerido'
            };
            var wrapper = enzyme_1.shallow(React.createElement(Field_1.Field, __assign({}, props),
                React.createElement(Input_1.Input, { name: 'input' })));
            expect(wrapper.find(styled_1.BoxMessage).prop('errorMessage')).toBe('Campo Requerido');
        });
    });
});
