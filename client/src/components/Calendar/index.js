import React from 'react';
import "./style.css";
import { render } from 'react-dom';
import InfiniteCalendar from 'react-infinite-calendar';
import 'react-infinite-calendar/styles.css'; // only needs to be imported once

// Render the Calendar
var today = new Date();
var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);

const Calendar = () => {
          return(
            <InfiniteCalendar
                width={400}
                height={230}
                selected={today}
                disabledDays={[0,6]}
                minDate={lastWeek}
                onSelect={true}
            />
            );
        
};

export default Calendar;