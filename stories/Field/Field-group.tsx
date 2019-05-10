import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Input } from '../../src/components/Input';
import { Select } from '../../src/components/Select';
import { DatePicker } from '../../src/components/DatePicker';
import { TimePicker } from '../../src/components/TimePicker';
import { TextArea } from '../../src/components/TextArea';
import { Field, FieldGroup } from '../../src/components/Field';

const optionsDNI = [
  {
    label: 'DNI',
    value: 0
  },
  {
    label: 'CE',
    value: 1
  }
]
const optionsMonto = [
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
  <div>
    <FieldGroup>
      <Field label="Nombre" portionWidth={1/2} >
        <Input type="text" name="input-field1" />
      </Field>
      <Field label="Apellidos" portionWidth={1/2}>
        <Input type="text" name="input-field2" />
      </Field>
    </FieldGroup>
    <FieldGroup>
      <Field label="Email" portionWidth={1/2} >
        <Input type="text" name="input-field3" />
      </Field>
      <Field label="Celular" portionWidth={1/2}>
        <Input type="text" name="input-field4" />
      </Field>
    </FieldGroup>
    <FieldGroup keepProps>
      <Field label="Documento" portionWidth={1/2} >
        <Select options={optionsDNI}/>
      </Field>
      <Field portionWidth={1/2}>
        <Input type="text" name="input-field5" />
      </Field>
    </FieldGroup >
    <FieldGroup keepProps>
      <Field label="Monto" portionWidth={1/2} >
        <Select options={optionsMonto}/>
      </Field>
      <Field portionWidth={1/2}>
        <Input type="text" name="input-field6" />
      </Field>
    </FieldGroup>

    <FieldGroup keepProps>
      <Field label="Fecha de expiración" portionWidth={1/2}>
        <DatePicker />
      </Field>
      <Field portionWidth={1/2}>
        <TimePicker />
      </Field>
    </FieldGroup>
    <FieldGroup>
      <Field label="Número de pedido" portionWidth={1}>
      <Input type="text" name="input-field7" />
      </Field>
    </FieldGroup>
    <FieldGroup>
      <Field label="Detalle" portionWidth={1/2}>
        <TextArea placeholder="Ingrese descripción" />
      </Field>
      <Field portionWidth={1/2}>
      </Field>
    </FieldGroup>
  </div>
);

export default () => {
  return WithPropTypes({
    Component: Field,
    RenderComponent: Wrapper,
    showProp: false
  });
}
