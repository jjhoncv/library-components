import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Input } from '../../src/components/Input';

const Wrapper = () => (
  <Input
    className="c-input"
    type="number"
    name="input-number"
    value=""
    width="290px"
    placeholder="Ingrese un número"
  />
);

export default () => {
  return WithPropTypes({
    Component: Input,
    RenderComponent: Wrapper,
    showProp: false
  });
}
