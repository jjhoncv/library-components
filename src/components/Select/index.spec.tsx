import * as React from 'react';
import { shallow } from 'enzyme';
import { Select } from './Select';
import { SelectStyled } from './styled';

const options = [
  {
    label: 'Soles',
    value: 0
  },
  {
    label: 'Dólares',
    value: 1
  }
];

describe('Select Component', () => {
  describe('Select => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Select options={options}/>
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Select Builder', () => {
    it('Select => Render prop disabled', () => {
      const wrapper = shallow(
        <Select options={options} disabled/>
      );
      expect(wrapper.prop('disabled')).toBe(true);
    });
    it('Select => Render prop error', () => {
      const wrapper = shallow(
        <Select options={options} error/>
      );
      expect(wrapper.find(SelectStyled).prop('error')).toBe(true);
    });

    it('Select => Render label of the first option', () => {
      const wrapper = shallow(
        <Select options={options}/>
      );
      expect(wrapper.find(SelectStyled).childAt(0).prop('children')).toBe('Soles');
    });

    it('Select => Render placeholder', () => {
      const wrapper = shallow(
        <Select options={options} placeholder="Seleccione monto"/>
      );
      expect(wrapper.find(SelectStyled).childAt(0).prop('children')).toBe('Seleccione monto');
    });
  });
});
