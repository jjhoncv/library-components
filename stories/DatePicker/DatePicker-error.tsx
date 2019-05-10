import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { DatePicker } from '../../src/components/DatePicker';

const Wrapper = () => (
  <DatePicker error/>
);

export default () => {
  return WithPropTypes({
    Component: DatePicker,
    RenderComponent: Wrapper,
    showProp: false
  });
}
