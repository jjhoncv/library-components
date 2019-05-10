# Modal

Importación del componente Modal.

```js
import { Modal } from 'library/components/Modal';
import { Button } from 'library/components/Button';
```

<!-- STORY -->

#### Uso

```jsx
const Wrapper = () => {

  const [ open, setOpen ] = React.useState(false);

  return(
    <>
      <Button onClick={() => setOpen(true)} primary>Open Modal</Button>
      <Modal
        openModal={open}
        closeModal={() => setOpen(false)}
      >
        <div>
          <h1>Brief</h1>
          <h2>Nueva Plataforma Call Center</h2>
          <h4>library</h4>
        </div>
      </Modal>
    </>
  );
};

<Wrapper />
```
