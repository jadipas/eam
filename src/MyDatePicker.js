import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar, utils } from "react-modern-calendar-datepicker";

const MyDatePicker = (props) => {
  
  var d = new Date();
  var year = d.getFullYear();
  
  const maximumDate = {
    year: year,
    month: 12,
    day: 31
  }

  const handleDisabledSelect = disabledDay => {
    console.log('Tried selecting a disabled day', disabledDay);
  };
  
  const [selectedDay, setSelectedDay] = useState({
      from: null,
      to: null
  });
  
  const hChange = (s) =>{
    props.pChange(s)
    setSelectedDay(s)
  }

  return (
    <Calendar
      value={selectedDay}
      onChange={hChange}
      minimumDate={utils().getToday()}
      maximumDate={maximumDate}
      colorPrimary="#447b9f"
      colorPrimaryLight="#dbe5e7"
      onDisabledDayError={handleDisabledSelect}
    />
  );
};

export default MyDatePicker;