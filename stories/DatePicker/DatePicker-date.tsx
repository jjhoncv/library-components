import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { DatePicker } from '../../src/components/DatePicker';

const Wrapper = () => (
  <DatePicker date="13/03/1998"/>
);

export default () => {
  return WithPropTypes({
    Component: DatePicker,
    RenderComponent: Wrapper,
    showProp: false
  });
}
