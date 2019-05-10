import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Field } from '../../src/components/Field';
import { Input } from '../../src/components/Input';

const Wrapper = () => (
  <div>
    <Field label="Nombre" portionWidth={1/3} errorMessage="Campo Requerido">
      <Input type="text" name="input-field1" error/>
    </Field>
    <Field label="Apellido" portionWidth={1/3} errorMessage="Campo Requerido">
      <Input type="text" name="input-field2" error/>
    </Field>
    <Field label="Email" portionWidth={1/3} errorMessage="Campo Requerido">
      <Input type="email" name="input-field3" error/>
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
