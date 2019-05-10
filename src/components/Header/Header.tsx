import * as React from 'react';
import * as PropTypes from 'prop-types';

import {
  HeaderWrapper,
  HeaderTitle,
  HeaderSubTitle
} from './styled'

interface Props {
  title: string,
  subTitle?: string
}

export const Header: React.FC<Props> = ({
  title,
  subTitle
}) => {
  return (
    <HeaderWrapper>
      <HeaderTitle>{title}</HeaderTitle>
      {subTitle && (<HeaderSubTitle>{subTitle}</HeaderSubTitle>)}
    </HeaderWrapper>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}
