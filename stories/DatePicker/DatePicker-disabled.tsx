import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { DatePicker } from '../../src/components/DatePicker';

const Wrapper = () => (
  <DatePicker disabled/>
);

export default () => {
  return WithPropTypes({
    Component: DatePicker,
    RenderComponent: Wrapper,
    showProp: false
  });
}
