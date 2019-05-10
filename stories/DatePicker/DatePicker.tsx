import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { DatePicker } from '../../src/components/DatePicker';

const Wrapper = () => (
  <DatePicker onChange={(date) => {console.log(date)}}/>
);

export default () => {
  return WithPropTypes({
    Component: DatePicker,
    RenderComponent: Wrapper,
    showProp: false
  });
}
