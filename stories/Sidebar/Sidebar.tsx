import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Sidebar } from '../../src/components/Sidebar';

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
    onClick: () => console.log('Create Cip'),
    menu: [
      {
        name: 'JOHN',
      },
      {
        name: 'Confluence - orbisunt',
        icon: 'edit',
        onClick: () => console.log('Mi Perfil')
      },
      {
        name: 'Salir',
        onClick: () => console.log('Salir')
      }
    ],
  },
  {
    icon: {
      name: 'search'
    },
    tooltip: 'search',
    onClick: () => console.log('Buscar'),
    renderComponent: Component,
  },
  {
    icon: {
      name: 'settings'
    },
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
    ]
  }
]

const Wrapper = () => (
  <Sidebar items={ items } />
);

export default () => {
  return WithPropTypes({
    Component: Sidebar,
    RenderComponent: Wrapper,
    showProp: false
  });
}
