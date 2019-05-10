import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { TextArea } from '../../src/components/TextArea';

const Wrapper = () => (
  <TextArea text="Descripcion" disabled/>
);

export default () => {
  return WithPropTypes({
    Component: TextArea,
    RenderComponent: Wrapper,
    showProp: false
  });
}
