import * as React from 'react';
import { shallow } from 'enzyme';
import { Field } from './Field';
import { Input } from './../Input';
import { BoxMessage } from './styled';

let propsField = {
  className: 'c-field',
  label: 'Nombre'
}

describe('Field Component', () => {
  describe('Field => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Field {...propsField}>
          <Input name='input'/>
        </Field>
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Field Builder', () => {
    it('Field => validate label', () => {
      const wrapper = shallow(
        <Field {...propsField}>
          <Input name='input'/>
        </Field>
      );
      expect(wrapper.childAt(0).prop('children')).toBe('Nombre');
    })
    it('Field => render with prop portionWidth', () => {
      const props = {
        className: 'c-field',
        label: 'Nombre',
        portionWidth: 1/4
      }
      const wrapper = shallow(
        <Field {...props}>
          <Input name='input'/>
        </Field>);
      expect(wrapper.prop('portionWidth')).toEqual(1/4);
    })
    it('Field => validate errorMessage', () => {
      const props = {
        className: 'c-field',
        label: 'Nombre',
        portionWidth: 1/4,
        errorMessage: 'Campo Requerido'
      }
      const wrapper = shallow(
        <Field {...props}>
          <Input name='input'/>
        </Field>);
      expect(wrapper.find(BoxMessage).prop('errorMessage')).toBe('Campo Requerido');
    })
  });
});


