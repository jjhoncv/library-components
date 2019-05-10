# Sidebar

Importación del componente Sidebar.

```js
import { Sidebar } from 'library/components/Sidebar';
```

<!-- STORY -->

#### Uso

```jsx
const Component = () => (
  <div>
    test
  </div>
);

const items = [
  {
    icon: {
      name: 'plus'
    },
    tooltip: 'tooltip',
    onClick: () => console.log('Create Cip'),
    menu: [
      {
        name: 'JOHN',
      },
      {
        name: 'Mi Perfil',
        icon: 'edit',
        onClick: () => console.log('Mi Perfil')
      },
      {
        name: 'Salir',
        onClick: () => console.log('Salir')
      }
    ],
  },
  {
    icon: {
      name: 'search'
    },
    tooltip: 'search',
    onClick: () => console.log('Buscar'),
    renderComponent: Component,
  },
  {
    icon: {
      name: 'settings'
    },
    menu: [
      {
        name: 'JOHN',
      },
      {
        name: 'Mi Perfil',
        icon: 'edit',
        onClick: () => console.log('Mi Perfil')
      },
      {
        name: 'Salir',
        onClick: () => console.log('Salir')
      }
    ]
  }
]
<Sidebar items={ items }/>
```
