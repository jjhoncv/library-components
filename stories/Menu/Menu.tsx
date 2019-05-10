import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Menu } from '../../src/components/Menu';

const Wrapper = () => (
  <Menu>
    <Menu.Item>
      JOHN
    </Menu.Item>
    <Menu.Item icon="edit" onClick={()=> console.log('Perfil')}>
      Perfil
    </Menu.Item>
    <Menu.Item onClick={()=> console.log('Salir')}>
      Salir
    </Menu.Item>
  </Menu>
);

export default () => {
  return WithPropTypes({
    Component: Menu.Item,
    RenderComponent: Wrapper,
    showProp: false
  });
}
