import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import { TextAreaStyled } from './styled';

interface Props {
  text?: string;
  width?: string;
  fullWidth?: boolean;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  maxLength?: string;
  minLength?: string;
  getText?: Function;
}

export const TextArea: React.FC<Props> = ({
  text,
  getText,
  ...nextProps
}) => {

  const [ value, setValue ] = useState(text);

  const handleChange = (value) => {
    setValue(value);
    getText && getText(value);
  }

  return(
    <TextAreaStyled
      value={value}
      onChange={(e) => handleChange(e.target.value)}
      {...nextProps}
    />
  );
}

TextArea.propTypes = {
  text: PropTypes.string,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  maxLength: PropTypes.string,
  minLength: PropTypes.string,
  getText: PropTypes.func
}

TextArea.defaultProps = {
  width: '420px'
}
