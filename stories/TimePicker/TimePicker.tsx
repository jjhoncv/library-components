import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { TimePicker } from '../../src/components/TimePicker';

const Wrapper = () => (
  <TimePicker getTimeSelected={(time) => console.log(time, 'time')}/>
);

export default () => {
  return WithPropTypes({
    Component: TimePicker,
    RenderComponent: Wrapper,
    showProp: false
  });
}
