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
var react_1 = require("react");
var PropTypes = require("prop-types");
var styled_1 = require("./styled");
var Menu_1 = require("./../Menu");
var Icon_1 = require("./../Icon");
exports.SidebarItem = function (_a) {
    var icon = _a.icon, menu = _a.menu, tooltip = _a.tooltip, onClick = _a.onClick, renderComponent = _a.renderComponent;
    var _b = react_1.useState(false), show = _b[0], setShow = _b[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        document.addEventListener('mousedown', handleOutsideClick);
        return function () {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    });
    var handleOutsideClick = function (e) {
        var isOutside = !ref.current.contains(e.target);
        isOutside && setShow(false);
    };
    var handleClick = function (e) {
        menu && setShow(true);
        renderComponent && setShow(true);
        onClick && onClick(e);
    };
    return (React.createElement(styled_1.SidebarItemWrapper, { ref: ref, onClick: function (e) { return handleClick(e); } },
        React.createElement(styled_1.SidebarItemStyled, null,
            React.createElement(styled_1.SidebarIcon, null,
                React.createElement(Icon_1.Icon, __assign({}, icon))),
            tooltip && !show && (React.createElement(styled_1.SidebarTooltip, null, tooltip))),
        menu && show && (React.createElement(Menu_1.Menu, null, menu.map(function (item, index) {
            return React.createElement(Menu_1.Menu.Item, { key: index, icon: item.icon, onClick: item.onClick }, item.name);
        }))),
        renderComponent && show && (React.createElement(Menu_1.Menu, null, renderComponent()))));
};
exports.SidebarItem.propTypes = {
    icon: PropTypes.object,
    tooltip: PropTypes.string,
    onClick: PropTypes.func,
    menu: PropTypes.any,
    renderComponent: PropTypes.func
};
