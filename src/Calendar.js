import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';


const localizer = momentLocalizer(moment)

const MyCalendar = props => (
  <div className="calendar">
    <Calendar
      localizer={localizer}
      events={[{
        'title': 'DTS ENDS',
        'start': new Date(2021, 7, 6, 0, 0, 0),
        'end': new Date(2021, 7, 13, 0, 0, 0)
      }]}
      defaultView = "month"
      view={"month"}
      views={"month"}
      style={{ height: 500 }}
      />
  </div>
)



export default MyCalendar;