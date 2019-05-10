# Input

Importación del componente Input.

```js
import { Input } from 'library/components/Input';
```

<!-- STORY -->

#### Uso

```jsx
<Input
  className="c-input"
  type="text"
  name="input-default"
  width="290px"
  onChange={e=> console.log(e.target)}
  placeholder="Escriba aquí..."
  dataTest="cy-input"
  error
/>
```
