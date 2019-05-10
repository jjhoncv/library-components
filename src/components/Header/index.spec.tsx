import * as React from 'react';
import { shallow } from 'enzyme';
import { Header, HeaderImage } from './';

describe('Header Component', () => {
  describe('Header => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Header title="Call Center" />
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Header Image => render snapshot', () => {
    it('Render Image correctly', () => {
      const wrapper = shallow(
        <HeaderImage title="Call Center" image={['https://via.placeholder.com/50', 'end']}/>
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Header Builder', () => {
    it('Header => Render prop title', () => {
      const wrapper = shallow(
        <Header title="Call Center" />
      );
      expect(wrapper.childAt(0).prop('children')).toBe('Call Center');
    });
    it('Header => Render prop subTitle', () => {
      const wrapper = shallow(
        <Header title="Call Center" subTitle="Generación de CIP" />
      );
      expect(wrapper.childAt(1).prop('children')).toBe('Generación de CIP');
    });
  });

  describe('Header Image Builder', () => {
    it('Header Image => Render prop image', () => {
      const wrapper = shallow(
        <HeaderImage title="Call Center" image={['https://via.placeholder.com/50', 'end']} />
      );
      expect(wrapper.childAt(0).prop('pos')).toBe('end');
    });
  })
});
