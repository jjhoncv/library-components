import * as React from 'react';
import * as PropTypes from 'prop-types';

import {
  HeaderWrapper,
  HeaderTitleImage,
  HeaderSubTitle
} from './styled'

interface Props {
  title: string,
  subTitle?: string,
  image: string[],
}

export const HeaderImage: React.FC<Props> = ({
  title,
  image,
  subTitle
}) => {
  const { src, pos } = { src: image[0], pos: image[1] || 'end' }
  return (
    <HeaderWrapper>
      <HeaderTitleImage pos={pos}>{title}  {src && <img src={src} />}</HeaderTitleImage>
      {subTitle && (<HeaderSubTitle>{subTitle}</HeaderSubTitle>)}
    </HeaderWrapper>
  );
}

HeaderImage.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  image: PropTypes.array.isRequired
}
