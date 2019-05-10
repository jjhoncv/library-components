import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Input } from '../../src/components/Input';

const Wrapper = () => (
  <Input
    className="c-input"
    type="text"
    name="input-disabled"
    value=""
    width="290px"
    disabled
  />
);

export default () => {
  return WithPropTypes({
    Component: Input,
    RenderComponent: Wrapper,
    showProp: false
  });
}
