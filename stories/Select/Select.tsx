import * as React from 'react';
import { Select } from '../../src/components/Select';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';

const options = [
  {
    label: 'Soles',
    value: 0
  },
  {
    label: 'Dólares',
    value: 1
  }
]

const Wrapper = () => (
  <Select options={options} />
);

export default () => {
  return WithPropTypes({
    Component: Select,
    RenderComponent: Wrapper,
    showProp: false
  });
}
