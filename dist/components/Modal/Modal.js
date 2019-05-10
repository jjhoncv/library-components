"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var PropTypes = require("prop-types");
var react_1 = require("react");
var styled_1 = require("./styled");
var Icon_1 = require("./../Icon");
exports.Modal = function (_a) {
    var openModal = _a.openModal, children = _a.children, closeModal = _a.closeModal;
    var _b = react_1.useState(openModal), open = _b[0], setOpen = _b[1];
    var ref = react_1.useRef(null);
    react_1.useEffect(function () {
        setOpen(openModal);
    }, [openModal]);
    var handleClick = function (e) {
        if (e.currentTarget === e.target || ref.current.contains(e.target)) {
            setOpen(false);
            closeModal();
        }
    };
    return (React.createElement(React.Fragment, null, open && (React.createElement(styled_1.ModalOverlay, { onClick: function (e) { return handleClick(e); } },
        React.createElement(styled_1.ModalStyled, null,
            React.createElement(styled_1.ModalIcon, { ref: ref, onClick: function (e) { return handleClick(e); } },
                React.createElement(Icon_1.Icon, { name: "x" })),
            children)))));
};
exports.Modal.propTypes = {
    children: PropTypes.node,
    openModal: PropTypes.bool,
    closeModal: PropTypes.func
};
