import * as React from 'react';
import { shallow } from 'enzyme';
import { TextArea } from './TextArea';

describe('TextArea Component', () => {
  describe('TextArea => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <TextArea />
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('TextArea Builder', () => {
    it('TextArea => Render prop disabled', () => {
      const wrapper = shallow(
        <TextArea disabled/>
      );
      expect(wrapper.prop('disabled')).toBe(true);
    });
    it('TextArea => Render prop error', () => {
      const wrapper = shallow(
        <TextArea error/>
      );
      expect(wrapper.prop('error')).toBe(true);
    });
    it('TextArea => Render value', () => {
      const wrapper = shallow(
        <TextArea text="Descripción"/>
      );
      expect(wrapper.prop('value')).toBe("Descripción");
    });
    it('TextArea => Render prop getText onChange', () => {
      const mockFn = jest.fn();
      const wrapper = shallow(
        <TextArea text="Descripción" getText={mockFn}/>
      );
      wrapper.simulate('change', {target: {value: 'test'}});
      expect(mockFn.mock.calls[0][0]).toBe('test');
    });
  });
});
