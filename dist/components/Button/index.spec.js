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
var Button_1 = require("./Button");
var propsButton = {
    className: 'c-button',
    onClick: function () { },
};
describe('Button Component', function () {
    describe('Button => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Button_1.Button, __assign({}, propsButton), "Test"));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Button Builder', function () {
        it('Button => render text', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Button_1.Button, null, "Test"));
            expect(wrapper.prop('children')).toBe('Test');
        });
        it('Button => render with prop disabled', function () {
            var props = {
                className: 'c-button',
                disabled: true
            };
            var wrapper = enzyme_1.shallow(React.createElement(Button_1.Button, __assign({}, props), "Test"));
            expect(wrapper.prop('disabled')).toBe(true);
        });
        it('Button => render with prop loading', function () {
            var props = {
                className: 'c-button',
                loading: true
            };
            var wrapper = enzyme_1.shallow(React.createElement(Button_1.Button, __assign({}, props), "Test"));
            expect(wrapper.prop('loading')).toBe(true);
        });
    });
});
