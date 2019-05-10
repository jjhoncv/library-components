import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import { SelectWrapper, SelectStyled, SelectIcon } from './styled';
import { Icon } from './../Icon';

interface OptionProps {
  value?: number;
  label?: string;
}

interface Props {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  width?: string;
  fullWidth?: boolean;
  selected?: string;
  options: OptionProps[]
}

export const Select: React.FC<Props> = ({
  placeholder,
  disabled,
  error,
  width,
  fullWidth,
  selected,
  options
}) => {

  const [ value, setValue ] = useState(selected);

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  return (
    <SelectWrapper
      disabled={disabled}
      fullWidth={fullWidth}
      width={width}>
      <SelectStyled
        error={error}
        value={value}
        onChange={handleChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            { item.label }
          </option>
        ))}
      </SelectStyled>
      <SelectIcon>
        <Icon name="chevron-down" color="#B6B6B6"/>
      </SelectIcon>
    </SelectWrapper>
  );
}

Select.propTypes = {
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  selected: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number,
    label: PropTypes.string,
  })).isRequired
}

Select.defaultProps = {
  width: '200px'
}
