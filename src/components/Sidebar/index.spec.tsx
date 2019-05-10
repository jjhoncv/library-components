import * as React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from './Sidebar';

const propsSidebar = [
  {
    icon: {
      name: 'plus'
    },
    tooltip: 'tooltip',
    onClick: () => console.log('Create Cip'),
    menu: [
      {
        name: 'JOHN',
      },
      {
        name: 'Mi Perfil',
        icon: 'edit',
        onClick: () => console.log('Mi Perfil')
      },
      {
        name: 'Salir',
        onClick: () => console.log('Salir')
      }
    ],
  },
]

describe('SidebarComponent', () => {
  describe('Sidebar => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Sidebar items={propsSidebar}/>
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Sidebar Builder', () => {
    it('Sidebar => Render tooltip', () => {
      const wrapper = shallow(
        <Sidebar items={propsSidebar}/>
      )
      expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).prop('tooltip')).toBe('tooltip');
    });
    it('Sidebar => Render menu name', () => {
      const wrapper = shallow(
        <Sidebar items={propsSidebar}/>
      )
      expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).prop('menu')[0].name).toBe('JOHN');
    });
    it('Sidebar => Render children component', () => {
      const Component = () => (
        <div>
          test
        </div>
      );
      const items = [
        {
          icon: {
            name: 'plus'
          },
          tooltip: 'tooltip',
          renderComponent: Component,
        },
      ]
      const wrapper = shallow(
        <Sidebar items={items}/>
      )
      expect(wrapper.childAt(1).childAt(0).childAt(1).childAt(0).prop('renderComponent')().props.children).toBe('test');
    });
  });
})
