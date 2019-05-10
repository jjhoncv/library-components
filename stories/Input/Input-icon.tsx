import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Input } from '../../src/components/Input';

const IconProps = {
  name: 'eye',
  onClick: () => {console.log('Le diste click')}
}

const Wrapper = () => (
  <Input
    className="c-input"
    type="password"
    name="input-password"
    width="290px"
    placeholder="Contraseña"
    icon={IconProps}
  />
);

export default () => {
  return WithPropTypes({
    Component: Input,
    RenderComponent: Wrapper,
    showProp: false
  });
}
