import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState, useEffect, useRef } from 'react';
import { DatePickerCalendar } from './DatePickerCalendar';
import { Icon } from './../Icon';
import {
  DatePickerWrapper,
  DatePickerBox,
  DatePickerInput,
  DatePickerIcon,
} from './styled';

interface Props {
  date?: string;
  width?: string;
  fullWidth?: boolean;
  error?: boolean;
  onChange?: Function;
  isDisabledPreviousDate?: boolean;
  disabled?: boolean;
}

const useDate = (date) => {
  const [ dateFormat, setDateFormat ] = useState(null);
  let dateTime;

  if(date === '') {
    dateTime = new Date().getTime();
  } else {
    const dateSeparated = date.split("/");
    const year = parseInt(dateSeparated[2]);
    const month = parseInt(dateSeparated[1]) - 1;
    const day = parseInt(dateSeparated[0]);

    dateTime = new Date(year, month, day).getTime();
  }

  useEffect(() => {
    setDateFormat(dateTime);
  }, [date]);

  return dateFormat;
}

export const DatePicker:React.FC<Props> = ({
  date = '',
  width,
  fullWidth,
  error,
  isDisabledPreviousDate,
  disabled,
  onChange
}) => {
  const [ value, setValue ] = useState(date);

  const [ open, setOpen ] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
  })

  const handleOutsideClick = (e) => {
    const isOutside = !ref.current.contains(e.target);
    isOutside && setOpen(false);
  }

  const dateFormat = useDate(value);

  const handleChange = (date) => {
    setValue(date);
    onChange && onChange(date);
  }

  return (
    <DatePickerWrapper
      ref={ref}
      width={width}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      <DatePickerBox>
        <DatePickerInput
          placeholder="dd/mm/aaaa"
          value={value}
          onClick={() => setOpen(true)}
          onChange={(e) => {setValue(e.target.value); setOpen(false);}}
          error={error}
        />
        <DatePickerIcon error={error}>
          <Icon name="calendar" color="#B6B6B6"/>
        </DatePickerIcon>
      </DatePickerBox>
      { open &&
        (<DatePickerCalendar
          date={dateFormat}
          onChange={handleChange}
          onClick={() => setOpen(false)}
          isDisabledPreviousDate={isDisabledPreviousDate}
        />)
      }
    </DatePickerWrapper>
  );
}

DatePicker.propTypes = {
  date: PropTypes.string,
  width: PropTypes.string,
  fullWidth: PropTypes.bool,
  error: PropTypes.bool,
  isDisabledPreviousDate: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
}

DatePicker.defaultProps = {
  width: '200px'
}
