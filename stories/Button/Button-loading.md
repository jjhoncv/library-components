# Button

Importación del componente Button.

```jsx
import { Button } from 'library/components/Button';
```

<!-- STORY -->

#### Uso

```jsx
<Button
  onClick={()=> {console.log("Le diste click")}}
  loading
>
  Default
</Button>
<Button
  primary
  onClick={()=> {console.log("Le diste click")}}
  loading
>
  Primary
</Button>
```
