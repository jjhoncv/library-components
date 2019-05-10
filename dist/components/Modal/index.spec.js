"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var Modal_1 = require("./Modal");
describe('Render component', function () {
    describe('Modal => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Modal_1.Modal, { openModal: true },
                React.createElement("div", null, "test")));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Modal Builder', function () {
        it('Modal => render children', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Modal_1.Modal, { openModal: true },
                React.createElement("div", null, "test")));
            expect(wrapper.find('div').length).toBe(1);
        });
    });
});
