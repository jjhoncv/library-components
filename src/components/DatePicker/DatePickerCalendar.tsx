import * as React from 'react';
import * as PropTypes from 'prop-types';
import { useState } from 'react';
import {
  DatePickerCalendarWrapper,
  DatePickerMonth,
  DatePickerPrev,
  DatePickerNext,
  DatePickerTitle,
  DatePickerWeekDays,
  DatePickerWeekDay,
  DatePickerDates,
  DatePickerWeek,
  DatePickerWeekDate
} from './styled';

interface Props {
  date?: number;
  onClick?: Function;
  onChange?: Function;
  isDisabledPreviousDate?: boolean;
}

export const DatePickerCalendar: React.FC<Props> = ({
  date,
  onClick,
  onChange,
  isDisabledPreviousDate
}) => {
  const [ month, setMonth ] = useState(new Date(date).getMonth());
  const [ year, setYear ] = useState(new Date(date).getFullYear());

  const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const monthsName = months[month];
  const weekdays = ['Dom', 'Lun', 'Mar', 'Mie', 'Juv', 'Vie', 'Sab'];
  const totalDays = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  const onNext = () => {
    if(month < 11) {
      setMonth(month + 1);
    } else {
      setMonth(0);
      setYear(year + 1);
    }
  }

  const onPrev = () => {
    if(month > 0) {
      setMonth(month - 1);
    } else {
      setMonth(11);
      setYear(year - 1);
    }
  }

  const DatePickerDaysWeek = ({weekdays}) => (
    <DatePickerWeekDays>
      { weekdays.map((weekday, index) => (
        <DatePickerWeekDay key={index}>{weekday}</DatePickerWeekDay>
      )) }
    </DatePickerWeekDays>
  );

  const DatePickerDaysCalendar = ({setDay, onClick}) => {
    let items = [];
    let rows = [];
    let contador = 1;

    for(let count=0; count<42; count++) {
      if(firstDay <= count && count <= totalDays + firstDay - 1) {
        items.push(contador++);
      } else {
        items.push("")
      }
    }

    for(let i=0; i<items.length; i+=7) {
      let sliceIt = items.slice(i, i+7);
      rows.push(sliceIt);
    }

    const handleClick = (e) => {
      let value = e.target.innerText;
      setDay(value);

      if(onClick) {
        onClick(e);
      }
    }

    return (
      <DatePickerDates>
        {rows.map((row, index) => {
          return (
          <DatePickerWeek key={index}>
            {
              row.map((data, i) => {
                const isEmpty = row[i] == "";
                const isLessCurrentDate = new Date(year, month, row[i] + 1).getTime() < new Date().getTime();
                const isSelected = new Date(year, month, row[i]).getTime() == new Date(date).getTime();

                return (
                  isEmpty || (isDisabledPreviousDate && isLessCurrentDate) ? (
                    <DatePickerWeekDate key={i} disabled>{data}</DatePickerWeekDate>) :
                  (isSelected ?
                    (<DatePickerWeekDate key={i} selected onClick={(e) => handleClick(e)}>{data}</DatePickerWeekDate>) :
                    (<DatePickerWeekDate key={i} onClick={(e) => handleClick(e)}>{data}</DatePickerWeekDate>)
                  )
                );
              })
            }
          </DatePickerWeek>
        )})}
      </DatePickerDates>
    );
  }

  const getDay = (day) => {
    onChange(`${formatDate(day)}/${formatDate(month + 1)}/${year}`);
  }

  const formatDate = (date) => {
    return date.toString().length == 1 ? '0' + date : date;
  }

  return (
    <DatePickerCalendarWrapper>
      <DatePickerMonth>
        <DatePickerPrev
          onClick={onPrev}
        >
          ‹
        </DatePickerPrev>
        <DatePickerTitle>{monthsName} {year}</DatePickerTitle>
        <DatePickerNext
          onClick={onNext}>
          ›
        </DatePickerNext>
      </DatePickerMonth>
      <DatePickerDaysWeek weekdays={weekdays}/>
      <DatePickerDaysCalendar setDay={getDay} onClick={onClick}/>
    </DatePickerCalendarWrapper>
  );
}

DatePickerCalendar.propTypes = {
  date: PropTypes.number,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  isDisabledPreviousDate: PropTypes.bool
}
