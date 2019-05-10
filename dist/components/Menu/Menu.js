"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var styled_1 = require("./styled");
exports.Menu = styled_1.Menu;
var Icons = require("react-feather");
var Item = function (_a) {
    var children = _a.children, icon = _a.icon, onClick = _a.onClick;
    var Icon = function (_a) {
        var icon = _a.icon;
        var nameIconCapitalize = (icon.charAt(0).toUpperCase() + icon.slice(1)).toString();
        var IconName = Icons[nameIconCapitalize];
        return React.createElement(IconName, null);
    };
    return (React.createElement(styled_1.ItemStyled, { onClick: onClick },
        children,
        icon &&
            React.createElement(Icon, { icon: icon })));
};
Item.propTypes = {
    children: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
};
styled_1.Menu.Item = Item;
