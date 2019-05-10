# Menu

Importación del componente Menu.

```js
import { Menu } from 'library/components/Menu';
```

<!-- STORY -->

#### Uso

```jsx
<Menu>
  <Menu.Item>
    JOHN
  </Menu.Item>
  <Menu.Item icon="edit" onClick={()=> console.log('Perfil')}>
    Perfil
  </Menu.Item>
  <Menu.Item onClick={()=> console.log('Salir')}>
    Salir
  </Menu.Item>
</Menu>
```
