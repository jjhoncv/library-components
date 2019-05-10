import * as React from 'react';
import { shallow } from 'enzyme';
import { TimePicker } from './TimePicker';
import { TimePickerInput } from './styled';

describe('TimePicker Component', () => {
  describe('TimePicker => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <TimePicker />
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('TimePicker Builder', () => {
    it('TimePicker => Render prop disabled', () => {
      const wrapper = shallow(
        <TimePicker disabled/>
      );
      expect(wrapper.prop('disabled')).toBe(true);
    });
    it('TimePicker => Render prop error', () => {
      const wrapper = shallow(
        <TimePicker error/>
      );
      expect(wrapper.find(TimePickerInput).prop('error')).toBe(true);
    });
    it('TimePicker => Render value input', () => {
      const wrapper = shallow(
        <TimePicker time="12:30"/>
      );
      expect(wrapper.find(TimePickerInput).prop('value')).toBe("12:30");
    });
  });
});
