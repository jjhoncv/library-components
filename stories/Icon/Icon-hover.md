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
    name: 'eye',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'plus',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'settings',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'search',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'edit',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  },
  {
    name: 'calendar',
    color: COLORS.WHITE,
    size: '30px',
    colorHover: COLORS.BLACK
  }
]

<IconWrapper>
    {icons.map((icon, index) => (
      <IconBox>
        <Icon key={index} {...icon} />
      </IconBox>
    ))}
  </IconWrapper>
```
