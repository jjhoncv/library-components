import * as React from 'react';
import { useState, useEffect,useRef } from 'react';
import * as PropTypes from 'prop-types';
import { SidebarItemWrapper,
  SidebarItemStyled,
  SidebarIcon,
  SidebarTooltip }
from './styled';
import { Menu } from './../Menu';
import { Icon } from './../Icon';

export interface Props {
  icon?: any,
  tooltip?: string,
  onClick?: Function,
  menu?: any,
  renderComponent?: Function
}

export const SidebarItem: React.FC<Props> = ({
  icon,
  menu,
  tooltip,
  onClick,
  renderComponent
}) => {
  const [ show, setShow ] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  })

  const handleOutsideClick = (e) => {
    const isOutside = !ref.current.contains(e.target);
    isOutside && setShow(false);
  }

  const handleClick = (e) => {
    menu && setShow(true);
    renderComponent && setShow(true);
    onClick && onClick(e);
  }
  return (
  <SidebarItemWrapper
    ref={ref}
    onClick={(e) => handleClick(e)}
  >
    <SidebarItemStyled>
      <SidebarIcon>
        <Icon {...icon}/>
      </SidebarIcon>
      { tooltip && !show && (
        <SidebarTooltip>
          { tooltip }
        </SidebarTooltip>
      ) }
    </SidebarItemStyled>
    { menu && show && (
        <Menu>
          { menu.map((item, index) =>
            <Menu.Item key={index} icon={item.icon} onClick={item.onClick}>
              { item.name }
            </Menu.Item>
          ) }
        </Menu>)
    }
    { renderComponent && show && (
        <Menu>
          {renderComponent()}
        </Menu>)
    }
  </SidebarItemWrapper>
  );
};

SidebarItem.propTypes = {
  icon: PropTypes.object,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  menu: PropTypes.any,
  renderComponent: PropTypes.func
}
