import * as React from 'react';
import * as PropTypes from 'prop-types';
import { FieldStyled, Label, BoxMessage } from './styled';

interface Props {
  className?: string;
  label?: string;
  portionWidth?: number;
  children: React.ReactNode;
  errorMessage?: string;
}

export const Field: React.FunctionComponent<Props> = ({
  className,
  label,
  portionWidth,
  children,
  errorMessage,
}) => {

  return (
    <FieldStyled className={className} portionWidth={portionWidth}>
      <Label>{label}</Label>
      {children}
      <BoxMessage errorMessage={errorMessage}>
        { errorMessage }
      </BoxMessage>
    </FieldStyled>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  portionWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
  errorMessage: PropTypes.string,
}
