# Icon

Importación del componente Icon.

```jsx
import { Icon } from 'library/components/Icon';
```

<!-- STORY -->

#### Uso

```jsx
const icons = [
  {
    name: 'settings',
    color: COLORS.BLACK,
  },
  {
    name: 'settings',
    color: COLORS.BLACK,
    size: '30px'
  },
  {
    name: 'settings',
    color: COLORS.BLACK,
    size: '40px'
  },
  {
    name: 'settings',
    color: COLORS.BLACK,
    size: '50px'
  },
  {
    name: 'settings',
    color: COLORS.BLACK,
    size: '60px'
  },
  {
    name: 'settings',
    color: COLORS.BLACK,
    size: '70px'
  }
]

<IconWrapper>
  {icons.map((icon, index) => (
    <Icon key={index} {...icon} />
  ))}
</IconWrapper>
```
