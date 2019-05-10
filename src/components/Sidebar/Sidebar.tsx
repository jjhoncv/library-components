import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  SidebarHeader,
  SidebarToggle,
  SidebarTitle,
  SidebarWrapper,
  SidebarStyled,
  SidebarIsotipo,
  SidebarMenu,
  SidebarOverlay
} from './styled';
import { SidebarItem, Props as SidebarItemProps } from './SidebarItem';
import { Icon } from './../Icon';

interface Props {
  items: SidebarItemProps[];
  fixed?: boolean;
  width?: string;
}

export const Sidebar: React.FC<Props> = ({
  items,
  fixed,
  width
}) => {

  const [ show, setShow ] = useState(false);

  const handleClick = () => {
    setShow(false);
  }

  useEffect(() => {
    let contentBody = document.getElementsByTagName('body')[0];
    show ? (contentBody.style.overflow = 'hidden') : (contentBody.style.overflow = '');
  }, [show])

  return (
    <>
      <SidebarHeader>
        <SidebarToggle onClick={() => setShow(true)} show={show}>
          <Icon name="menu" />
        </SidebarToggle>
        <SidebarTitle>Pago Efectivo</SidebarTitle>
      </SidebarHeader>
      <SidebarWrapper
        width={width}
        show={show}
      >
        <SidebarStyled
          fixed={fixed}
          width={width}
        >
          <SidebarIsotipo>
            <svg width="51" height="52" viewBox="0 0 51 52" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.9603 8.54126C20.1888 4.27934 13.2593 1.89008 9.30877 1.89008C8.20782 1.89008 7.30114 2.0838 6.71828 2.47125C3.28588 4.60221 1.14873 17.7754 1.99064 31.7881C2.63826 42.9595 4.84018 48.9004 6.71828 49.8044C10.0859 51.4188 22.0022 46.8986 33.7889 39.4725C43.7623 33.2088 48.1661 28.3657 48.1661 26.2993C48.2309 22.5539 39.3585 14.805 27.9603 8.54126Z" fill="#FFCC00"/>
              <path d="M28.8671 6.92693C24.7223 4.66682 10.9279 -2.43639 5.68216 0.856914C0.50118 4.15022 -0.470254 21.2625 0.177369 31.9173C0.50118 37.0833 1.6669 49.417 5.94121 51.4834C6.6536 51.8063 7.56027 52 8.59647 52C14.6194 52 25.8232 46.7695 34.8252 41.0869C39.4233 38.181 50.1091 31.0133 50.1091 26.3639C50.1091 21.0042 39.0995 12.5449 28.8671 6.92693ZM33.8538 39.4725C22.0023 46.8986 10.1508 51.4188 6.71836 49.8045C4.84025 48.9004 2.63834 42.9596 1.99071 31.7881C1.1488 17.7755 3.28596 4.60224 6.6536 2.4067C7.23646 2.01926 8.14313 1.82553 9.24409 1.82553C13.2593 1.82553 20.1242 4.27937 27.8956 8.47672C39.2938 14.7405 48.1662 22.4894 48.1662 26.2347C48.231 28.3657 43.7624 33.2734 33.8538 39.4725Z" fill="white"/>
              <path d="M31.2632 16.5486C29.3851 15.3862 26.7946 14.8051 23.3622 14.8051C20.1241 14.8051 17.3393 14.9988 14.9431 15.3217C14.4898 15.3862 14.1012 15.5154 13.9069 15.6445C13.6479 15.8382 13.4536 16.032 13.3888 16.4194L12.7412 19.6481H22.0022L22.4555 16.6777L28.4784 24.0392L20.0593 31.207L20.5774 27.8491H10.9926L8.14307 41.7972V41.8618V41.991C8.14307 42.1847 8.20783 42.3138 8.33735 42.443C8.46688 42.5721 8.5964 42.6367 8.79069 42.6367H13.065C13.2593 42.6367 13.5183 42.5721 13.7126 42.443C13.9069 42.3138 14.0364 42.1201 14.0364 41.9264L15.9793 33.5963C16.1088 33.5963 16.3679 33.5963 16.6917 33.5963C17.0155 33.5963 17.3393 33.5963 17.6631 33.6608C17.9869 33.6608 18.3755 33.6608 18.7641 33.7254C19.1527 33.7254 19.4765 33.7254 19.7355 33.7254C22.067 33.7254 24.2041 33.338 26.0822 33.0151C31.8461 31.8527 33.9832 26.041 33.9832 21.65C34.048 19.3899 33.1413 17.7109 31.2632 16.5486Z" fill="black"/>
            </svg>
          </SidebarIsotipo>
          <SidebarMenu>
            { items.map((data, index) =>
              <SidebarItem key={index}
                icon={data.icon}
                menu={data.menu}
                tooltip={data.tooltip}
                onClick={data.onClick}
                renderComponent={data.renderComponent}
              />
            ) }
          </SidebarMenu>
        </SidebarStyled>
      </SidebarWrapper>
      <SidebarOverlay show={show} onClick={handleClick}/>
    </>
  );
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    icon: PropTypes.object,
    tooltip: PropTypes.string,
    onClick: PropTypes.func,
    items: PropTypes.any
  })),
  fixed: PropTypes.bool,
  width: PropTypes.string
}
