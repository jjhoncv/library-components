import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { Header } from '../../src/components/Header';

const Wrapper = () => (
  <Header
    title="CallCenter [Empresa]"
    subTitle="Generación de CIP"
  />
);

export default () => {
  return WithPropTypes({
    Component: Header,
    RenderComponent: Wrapper,
    showProp: false
  });
}
