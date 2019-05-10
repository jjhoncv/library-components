import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ButtonStyled, ButtonLoading } from './styled';

interface Props {
  className?: string;
  primary?: boolean;
  disabled?: boolean;
  onClick?: Function;
  children?: any;
  loading?: boolean;
  fullWidth?: boolean;
  dataTest?: string;
}

export const Button: React.FunctionComponent<Props> = ({
  children,
  loading,
  ...nextProps
}) => {
  return (
    <ButtonStyled
      loading={loading}
      {...nextProps}
    >
      { loading ? <ButtonLoading {...nextProps} /> : children }
    </ButtonStyled>
  );
} ;

Button.propTypes = {
  className: PropTypes.string,
  primary: PropTypes.bool,
  children: PropTypes.any,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  dataTest: PropTypes.string,
  fullWidth: PropTypes.bool
}
