# Icon

Importación del componente Icon.

Lista de iconos usados: https://feathericons.com/

```jsx
import { Icon } from 'library/components/Icon';
```

<!-- STORY -->

#### Uso

```jsx
const icons = [
  {
    name: 'eye',
    color: 'black',
    size: '40px'
  },
  {
    name: 'plus',
    color: 'black',
    size: '40px'
  },
  {
    name: 'settings',
    color: 'black',
    size: '40px'
  },
  {
    name: 'search',
    color: 'black',
    size: '40px'
  },
  {
    name: 'edit',
    color: 'black',
    size: '40px'
  },
  {
    name: 'calendar',
    color: 'black',
    size: '40px'
  },
]

<IconWrapper>
  {icons.map((icon, index) => (
    <IconName>
      <Icon key={index} {...icon} />
      <div>{icon.name}</div>
    </IconName>
  ))}
</IconWrapper>
```
