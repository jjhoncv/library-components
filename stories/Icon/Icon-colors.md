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
    color: COLORS.AQUA_BLUE
  },
  {
    name: 'settings',
    color: COLORS.YELLOW
  },
  {
    name: 'settings',
    color: COLORS.TEXT_GRAY
  },
  {
    name: 'settings',
    color: COLORS.ERROR_RED
  },
  {
    name: 'settings',
    color: COLORS.BLACK
  },
  {
    name: 'settings',
    color: COLORS.LIGHT_GRAY
  }
]

<IconWrapper>
  {icons.map((icon, index) => (
    <Icon key={index} {...icon} />
  ))}
</IconWrapper>
```
