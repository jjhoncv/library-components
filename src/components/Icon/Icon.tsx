import * as React from 'react';
import * as PropTypes from 'prop-types';
import * as Icons from 'react-feather';
import { IconStyled } from './styled';

interface Props {
  name: string,
  color?: string,
  colorHover?: string,
  size?: string,
}

export const Icon: React.FC<Props> = ({
  name,
  ...nextProps
}) => {
  let nameIcon;

  const capitalizeFirstLetter = (word) => {
    return (word.charAt(0).toUpperCase() + word.slice(1)).toString()
  }

  if(name.includes('-')) {
    nameIcon = name.split('-').reduce((result, word) => {
      return capitalizeFirstLetter(result) + capitalizeFirstLetter(word);
    });
  } else {
    nameIcon = capitalizeFirstLetter(name);
  }

  const IconName = Icons[nameIcon];

  return (
    <IconStyled {...nextProps}>
      <IconName />
    </IconStyled>
  );
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  size: PropTypes.string,
}
