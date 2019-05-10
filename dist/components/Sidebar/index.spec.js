"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var enzyme_1 = require("enzyme");
var Sidebar_1 = require("./Sidebar");
var propsSidebar = [
    {
        icon: {
            name: 'plus'
        },
        tooltip: 'tooltip',
        onClick: function () { return console.log('Create Cip'); },
        menu: [
            {
                name: 'JOHN',
            },
            {
                name: 'Mi Perfil',
                icon: 'edit',
                onClick: function () { return console.log('Mi Perfil'); }
            },
            {
                name: 'Salir',
                onClick: function () { return console.log('Salir'); }
            }
        ],
    },
];
describe('SidebarComponent', function () {
    describe('Sidebar => render snapshot', function () {
        it('Render correctly', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Sidebar_1.Sidebar, { items: propsSidebar }));
            expect(wrapper.html()).toMatchSnapshot();
        });
    });
    describe('Sidebar Builder', function () {
        it('Sidebar => Render tooltip', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Sidebar_1.Sidebar, { items: propsSidebar }));
            expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).prop('tooltip')).toBe('tooltip');
        });
        it('Sidebar => Render menu name', function () {
            var wrapper = enzyme_1.shallow(React.createElement(Sidebar_1.Sidebar, { items: propsSidebar }));
            expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).prop('menu')[0].name).toBe('JOHN');
        });
        it('Sidebar => Render children component', function () {
            var Component = function () { return (React.createElement("div", null, "test")); };
            var items = [
                {
                    icon: {
                        name: 'plus'
                    },
                    tooltip: 'tooltip',
                    renderComponent: Component,
                },
            ];
            var wrapper = enzyme_1.shallow(React.createElement(Sidebar_1.Sidebar, { items: items }));
            expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).prop('renderComponent')().props.children).toBe('test');
        });
    });
});
