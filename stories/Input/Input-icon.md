# Input

Importación del componente Input.

Lista de iconos usados:
https://feathericons.com/

```js
import { Input } from 'library/components/Input';
```

<!-- STORY -->

#### Uso

```jsx
const IconProps = {
  name: 'eye',
  onClick: () => {console.log('Le diste click')}
}

<Input
  className="c-input"
  type="password"
  name="input-password"
  width="290px"
  placeholder="Contraseña"
  icon={IconProps}
/>
```
