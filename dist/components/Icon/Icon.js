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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var Icons = require("react-feather");
var styled_1 = require("./styled");
exports.Icon = function (_a) {
    var name = _a.name, nextProps = __rest(_a, ["name"]);
    var nameIcon;
    var capitalizeFirstLetter = function (word) {
        return (word.charAt(0).toUpperCase() + word.slice(1)).toString();
    };
    if (name.includes('-')) {
        nameIcon = name.split('-').reduce(function (result, word) {
            return capitalizeFirstLetter(result) + capitalizeFirstLetter(word);
        });
    }
    else {
        nameIcon = capitalizeFirstLetter(name);
    }
    var IconName = Icons[nameIcon];
    return (React.createElement(styled_1.IconStyled, __assign({}, nextProps),
        React.createElement(IconName, null)));
};
exports.Icon.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    colorHover: PropTypes.string,
    size: PropTypes.string,
};
