import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Input } from '../../src/components/Input';

const Wrapper = () => (
  <Input
    className="c-input"
    type="password"
    name="input-password"
    width="290px"
    placeholder="Contraseña"
  />
);

export default () => {
  return WithPropTypes({
    Component: Input,
    RenderComponent: Wrapper,
    showProp: false
  });
}
