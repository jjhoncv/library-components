"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var Menu_1 = require("./Menu");
React.createElement(Menu_1.Menu, null,
    React.createElement(Menu_1.Menu.Item, null, "JOHN"));
describe('Menu Component', function () {
    describe('Menu => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Menu_1.Menu, null,
                React.createElement(Menu_1.Menu.Item, null, "JOHN")));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Menu Builder', function () {
        it('Menu => Render children', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Menu_1.Menu, null,
                React.createElement(Menu_1.Menu.Item, null, "USER")));
            expect(wrapper.find(Menu_1.Menu.Item).prop('children')).toBe('USER');
        });
        it('Menu => Simulate click', function () {
            var onClickMock = jest.fn();
            var wrapper = enzyme_1.shallow(React.createElement(Menu_1.Menu, null,
                React.createElement(Menu_1.Menu.Item, { onClick: onClickMock }, "USER")));
            wrapper.find(Menu_1.Menu.Item).simulate('click');
            expect(onClickMock).toHaveBeenCalled();
        });
    });
});
