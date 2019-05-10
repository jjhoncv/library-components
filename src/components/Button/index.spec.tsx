import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

let propsButton = {
  className:'c-button',
  onClick: ()=>{},
}

describe('Button Component', () => {
  describe('Button => render snapshot', () => {
    it('Render correctly', () => {
      const wrapper = shallow(
        <Button {...propsButton}>
          Test
        </Button>
      );
      expect(wrapper.html()).toMatchSnapshot();
    })
  });

  describe('Button Builder', () => {
    it('Button => render text', () => {
      const wrapper = shallow(<Button>Test</Button>);
      expect(wrapper.prop('children')).toBe('Test');
    })
    it('Button => render with prop disabled', () => {
      const props = {
        className: 'c-button',
        disabled: true
      }
      const wrapper = shallow(<Button {...props}>Test</Button>);
      expect(wrapper.prop('disabled')).toBe(true);
    })
    it('Button => render with prop loading', () => {
      const props = {
        className: 'c-button',
        loading: true
      }
      const wrapper = shallow(<Button {...props}>Test</Button>);
      expect(wrapper.prop('loading')).toBe(true);
    })
  });
});


