import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Render component', () => {
  describe('Modal => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Modal openModal={true}><div>test</div></Modal>
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Modal Builder', () => {
    it('Modal => render children', () => {
      const wrapper = shallow(
        <Modal openModal={true}>
          <div>test</div>
        </Modal>);
      expect(wrapper.find('div').length).toBe(1);
    })
  })
})

