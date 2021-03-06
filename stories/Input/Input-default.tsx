import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Input } from '../../src/components/Input';

const Wrapper = () => (
  <Input
    className="c-input"
    type="text"
    name="input-default"
    maxLength="20"
    width="290px"
    onChange={e=> console.log(e.target)}
    placeholder="Escriba aquí..."
    dataTest="cy-input"
  />
);

export default () => {
  return WithPropTypes({
    Component: Input,
    RenderComponent: Wrapper,
    showProp: false
  });
}
