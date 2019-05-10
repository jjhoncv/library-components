import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Field } from '../../src/components/Field';
import { Input } from '../../src/components/Input';

const Wrapper = () => (
  <div>
    <Field label="Nombre" portionWidth={1/2}>
      <Input type="text" name="input-field1" fullwidth />
    </Field>
    <Field label="Apellido" portionWidth={1/2}>
      <Input type="text" name="input-field2" fullwidth />
    </Field>
  </div>
);

export default () => {
  return WithPropTypes({
    Component: Field,
    RenderComponent: Wrapper,
    showProp: false
  });
}
