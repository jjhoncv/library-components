"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var _1 = require("./");
describe('Header Component', function () {
    describe('Header => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(_1.Header, { title: "Call Center" }));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Header Image => render snapshot', function () {
        it('Render Image correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(_1.HeaderImage, { title: "Call Center", image: ['https://via.placeholder.com/50', 'end'] }));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Header Builder', function () {
        it('Header => Render prop title', function () {
            var wrapper = enzyme_1.shallow(React.createElement(_1.Header, { title: "Call Center" }));
            expect(wrapper.childAt(0).prop('children')).toBe('Call Center');
        });
        it('Header => Render prop subTitle', function () {
            var wrapper = enzyme_1.shallow(React.createElement(_1.Header, { title: "Call Center", subTitle: "Generaci\u00F3n de CIP" }));
            expect(wrapper.childAt(1).prop('children')).toBe('Generación de CIP');
        });
    });
    describe('Header Image Builder', function () {
        it('Header Image => Render prop image', function () {
            var wrapper = enzyme_1.shallow(React.createElement(_1.HeaderImage, { title: "Call Center", image: ['https://via.placeholder.com/50', 'end'] }));
            expect(wrapper.childAt(0).prop('pos')).toBe('end');
        });
    });
});
