import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";

const MyCalendar = (props) => {
  const deafultValue = utils().getToday()
  deafultValue.day = deafultValue.day + 1;
  
  var d = new Date();
  var year = d.getFullYear();
  
  const maximumDate = {
    year: year,
    month: 12,
    day: 31
  }

  var saturdays = [];
  var sundays = [];

  for(var month = d.getMonth(); month < 12; month++){
    for (var i = 0; i <= new Date(year, month, 0).getDate(); i++) 
    {    
        var date = new Date(year, month, i);

        if (date.getDay() === 6)
        {
          saturdays.push({
            day: i,
            month: month+1,
            year: year
          });
        } 
        else if (date.getDay() === 0)
        {
            sundays.push({
              day: i,
              month: month+1,
              year: year
            });    
        }
    };
  }

  var disabledDays = [
    utils().getToday(),
    {
      day: 15,
      month: 3,
      year: year
    },
    {
      day: 25,
      month: 3,
      year: year
    },
    {
      day: 30,
      month: 4,
      year: year
    },
    {
      day: 3,
      month: 5,
      year: year
    },
    {
      day: 21,
      month: 6,
      year: year
    },
    {
      day: 28,
      month: 10,
      year: year
    },
  ];

  disabledDays = disabledDays.concat(saturdays)
  disabledDays = disabledDays.concat(sundays)
  
  const handleDisabledSelect = disabledDay => {
    console.log('Tried selecting a disabled day', disabledDay);
  };
  
  const [selectedDay, setSelectedDay] = useState(deafultValue);
  
  const hChange = (s) =>{
    props.pChange(s)
    setSelectedDay(s)
  }
  return (
    <Calendar
      value={selectedDay}
      onChange={hChange}
      minimumDate={utils().getToday()}
      disabledDays={disabledDays} 
      maximumDate={maximumDate}
      colorPrimary="#447b9f"
      onDisabledDayError={handleDisabledSelect}
    />
  );
};

export default MyCalendar;