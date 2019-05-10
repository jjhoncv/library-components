import * as React from 'react';
import * as PropTypes from 'prop-types';
import {
  InputWrapper,
  InputText,
  IconWrapper
}
  from './styled';
import * as Icons from 'react-feather';

interface IconProps {
  name?: string;
  onClick?: Function;
}

interface Props {
  className?: string;
  type?: string;
  name: string;
  placeholder?: string;
  maxLength?: string;
  value?: string;
  width?: string;
  fullwidth?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: Function;
  icon?: IconProps;
  dataTest?: string;
  error?: boolean;
}

export const Input: React.FunctionComponent<Props> = ({
  className,
  type,
  name,
  placeholder,
  value,
  width,
  maxLength,
  fullwidth,
  disabled,
  backgroundColor,
  onChange,
  icon,
  dataTest,
  error
}) => {

  const Icon = () => {
    const nameIconCapitalize = (icon.name.charAt(0).toUpperCase() + icon.name.slice(1)).toString();
    const IconName = Icons[nameIconCapitalize];
    return <IconName />
  }

  const handleChange = (e) => {
    const target = e.target;
    if (type === 'number') {
      target.value = formatValueChangeState(target.value);
    }
    if (onChange) {
      onChange(e);
    }
  }

  const formatValueChangeState = (val) => {
    return val.replace(/([^0-9]+|^\.)/, '');
  }

  return (
    <InputWrapper>
      <InputText
        className={className}
        type={type === "number" ? "text" : type}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        width={width}
        maxLength={maxLength}
        disabled={disabled}
        backgroundColor={backgroundColor}
        onChange={handleChange}
        data-test={dataTest}
        data-error={error}
        fullwidth={fullwidth}
      />
      {icon ?
        <IconWrapper onClick={icon.onClick}>
          <Icon />
        </IconWrapper> : null
      }
    </InputWrapper>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  maxLength: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
  fullwidth: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  icon: PropTypes.shape({
    name: PropTypes.string,
    onClick: PropTypes.func
  }),
  dataTest: PropTypes.string,
  error: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  width: '200px',
  disabled: false,
  backgroundColor: '#FFFFFF'
}
