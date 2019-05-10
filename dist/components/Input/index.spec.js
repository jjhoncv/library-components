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
var index_1 = require("./index");
var propsInput = {
    className: 'c-input',
    type: 'text',
    name: 'input',
    width: '290px',
    placeholder: 'Ingrese el texto aquí',
    value: ''
};
describe('Input Component', function () {
    describe('Input => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(index_1.Input, __assign({}, propsInput)));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Input Builder', function () {
        it('Input => render with name', function () {
            var props = {
                name: 'test'
            };
            var wrapper = enzyme_1.shallow(React.createElement(index_1.Input, __assign({}, props)));
            expect(wrapper.childAt(0).prop('name')).toEqual(props.name);
        });
        it('Input => render with value', function () {
            var props = {
                name: 'test-input',
                value: 'Ingresa texto...',
                onChange: function () { },
            };
            var wrapper = enzyme_1.shallow(React.createElement(index_1.Input, __assign({}, props)));
            expect(wrapper.childAt(0).prop('defaultValue')).toEqual(props.value);
        });
    });
});
