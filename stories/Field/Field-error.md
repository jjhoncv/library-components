# Field

Importación del componente Field.

```jsx
import { Field } from 'library/components/Field';
```

<!-- STORY -->

#### Uso

```jsx
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
```
