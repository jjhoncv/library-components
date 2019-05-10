import * as React from 'react';
import { Modal } from '../../src/components/Modal';
import { Button } from '../../src/components/Button';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';

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

export default () => {
  return WithPropTypes({
    Component: Modal,
    RenderComponent: Wrapper,
    showProp: false
  });
}
