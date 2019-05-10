import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Menu, ItemStyled } from './styled';
import * as Icons from 'react-feather';

interface Props {
  children?: string;
  icon?: string;
  onClick?: Function;
}

const Item: React.FC<Props> = ({
  children,
  icon,
  onClick
}) => {
  const Icon = ({ icon }) => {
    const nameIconCapitalize = (icon.charAt(0).toUpperCase() + icon.slice(1)).toString();
    const IconName = Icons[nameIconCapitalize];
    return <IconName />
  }

  return (
    <ItemStyled onClick={onClick}>
      { children }
      { icon &&
        <Icon icon={icon} /> }
    </ItemStyled>
  );
};

Item.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
}

Menu.Item = Item;

export { Menu };
