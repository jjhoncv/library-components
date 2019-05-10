# Field

Importación del componente Field.

```jsx
import { Field, FieldGroup } from 'library/components/Field';

import { Input } from 'library/components/Input';

import { Select } from 'library/components/Select';
```

<!-- STORY -->

#### Uso

```jsx
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
  <FieldGroup>
    <Field label="Documento" portionWidth={1/2} >
      <Select options={optionsDNI}/>
    </Field>
    <Field portionWidth={1/2}>
      <Input type="text" name="input-field5" />
    </Field>
  </FieldGroup>
  <FieldGroup>
    <Field label="Monto" portionWidth={1/2} >
      <Select options={optionsMonto}/>
    </Field>
    <Field portionWidth={1/2}>
      <Input type="text" name="input-field6" />
    </Field>
  </FieldGroup>

  <FieldGroup>
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
```
