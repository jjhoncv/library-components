import * as React from 'react';
import { shallow } from 'enzyme';
import { DatePicker } from './DatePicker';
import { DatePickerInput } from './styled';

describe('DatePicker Component', () => {
  describe('DatePicker => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <DatePicker />
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('DatePicker Builder', () => {
    it('DatePicker => Render prop disabled', () => {
      const wrapper = shallow(
        <DatePicker disabled/>
      );
      expect(wrapper.prop('disabled')).toBe(true);
    });
    it('DatePicker => Render prop error', () => {
      const wrapper = shallow(
        <DatePicker error/>
      );
      expect(wrapper.find(DatePickerInput).prop('error')).toBe(true);
    });
    it('DatePicker => Render value input', () => {
      const wrapper = shallow(
        <DatePicker date="13/03/1998"/>
      );
      expect(wrapper.find(DatePickerInput).prop('value')).toBe("13/03/1998");
    });
  });
});
