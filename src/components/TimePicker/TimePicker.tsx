import * as React from 'react';
import * as PropTypes from 'prop-types';

import { useState, useEffect, useRef } from 'react';

import { Icon } from './../Icon';

import {
  TimePickerWrapper,
  TimePickerStyled,
  TimePickerInput,
  TimePickerIcon,
  TimePickerList,
  TimePickerItem
} from './styled';

interface Props {
  time?: string;
  width?: string;
  fullWidth?: boolean;
  error?: boolean;
  disabled?: boolean;
  getTimeSelected?: Function;
}

export const TimePicker: React.FC<Props> = ({
  time = '',
  width,
  fullWidth,
  error,
  disabled,
  getTimeSelected
}) => {

  const [ show, setShow ] = useState(false);
  const [ value, setValue ] = useState(time);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  })

  const handleOutsideClick = (e) => {
    const isOutside = !ref.current.contains(e.target);
    isOutside && setShow(false);
  }

  const TimePickerLisItem = ({setTime}) => {
    let items = [];
    for(let i=0; i<24; i++) {
      items.push(`${i}:00`);
      items.push(`${i}:30`);
    }

    const handleClick = (e) => {
      let time = e.target.innerText;
      setTime(time);
    }

    const formatTime = (time) => {
      return time.length == 4 ? `0${time}`: time;
    }

    return(
      <>
        {items.map((data, index) => (
          <TimePickerItem
            key={index}
            onClick={handleClick}
          >
            {formatTime(data)}
          </TimePickerItem>
        ))}
      </>
    );
  }

  const getTime = (time) => {
    setValue(time);
    setShow(false);

    getTimeSelected && getTimeSelected(time);
  }

  return (
    <TimePickerWrapper
      ref={ref}
      width={width}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <TimePickerStyled onClick={() => setShow(!show)}>
        <TimePickerInput
          type="text"
          placeholder="00:00"
          readOnly
          value={value}
          error={error}
        />
        <TimePickerIcon>
          <Icon name="chevron-down" color="#B6B6B6"/>
        </TimePickerIcon>
      </TimePickerStyled>
      { show && (
        <TimePickerList>
          <TimePickerLisItem setTime={getTime}/>
        </TimePickerList>
      )}
    </TimePickerWrapper>
  );
}

TimePicker.propTypes = {
  time: PropTypes.string,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  getTimeSelected: PropTypes.func
}

TimePicker.defaultProps = {
  width: '200px'
}
