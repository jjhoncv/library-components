import * as React from 'react';
import { WithPropTypes } from '../../.storybook/Containers/WithPropTypes';
import { HeaderImage } from './../../src/components/Header';

const Wrapper = () => (
  <HeaderImage
    title="CallCenter [Empresa]"
    subTitle="Generación de CIP"
    image={["https://via.placeholder.com/50", "end"]}
  />
);

export default () => {
  return WithPropTypes({
    Component: HeaderImage,
    RenderComponent: Wrapper,
    showProp: false
  });
}
