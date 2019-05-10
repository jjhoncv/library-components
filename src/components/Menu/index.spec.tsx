import * as React from 'react';
import { shallow } from 'enzyme';
import { Menu } from './Menu';

<Menu>
  <Menu.Item>
    JOHN
  </Menu.Item>
</Menu>

describe('Menu Component', () => {
  describe('Menu => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Menu>
          <Menu.Item>
            JOHN
          </Menu.Item>
        </Menu>
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Menu Builder', () => {
    it('Menu => Render children', () => {
      const wrapper = shallow(
        <Menu>
          <Menu.Item>
            USER
          </Menu.Item>
        </Menu>
      );
      expect(wrapper.find(Menu.Item).prop('children')).toBe('USER');
    });

    it('Menu => Simulate click', () => {
      const onClickMock = jest.fn();
      const wrapper = shallow(
        <Menu>
          <Menu.Item onClick={onClickMock}>
            USER
          </Menu.Item>
        </Menu>
      );
      wrapper.find(Menu.Item).simulate('click');
      expect(onClickMock).toHaveBeenCalled();
    });
  });
})
