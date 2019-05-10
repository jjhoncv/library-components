import * as React from 'react';
import { shallow } from 'enzyme';
import { Input } from './index';

let propsInput = {
  className:'c-input',
  type:'text',
  name:'input',
  width:'290px',
  placeholder:'Ingrese el texto aquí',
  value:''
}

describe('Input Component', () => {
  describe('Input => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Input {...propsInput} />
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Input Builder', () => {
    it('Input => render with name', () => {
      const props = {
        name: 'test'
      }
      const wrapper = shallow(
        <Input {...props} />
      )
      expect(wrapper.childAt(0).prop('name')).toEqual(props.name);
    })
    it('Input => render with value', () => {
      const props = {
        name: 'test-input',
        value: 'Ingresa texto...',
        onChange: () => {},
      }
      const wrapper = shallow(
        <Input {...props} />
      );
      expect(wrapper.childAt(0).prop('defaultValue')).toEqual(props.value);
    });
  });

});


