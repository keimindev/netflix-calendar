import React, {useState} from 'react'
import moment, {Moment as MomentTypes } from 'moment';

const Calendar = () => {
    const [date, setdate] = useState(() => moment());


    //function
    const handleDayClick = (current: moment.Moment) => {setdate(current); console.log(current)};
    const returnToday = () => setdate(moment());
    const changeMonth = (num: number) => (num ? setdate(date.clone().add(30,'day')) : setdate(date.clone().subtract(30, 'day')));
    

    //calendar generate logic
    const generate = () => {
     const today = date;

     const startWeek = today.clone().startOf('month').week()

     const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week()

     let calendarFrame = []

     for(let week = startWeek; week<=endWeek; week++){
         calendarFrame.push(
             <div className="row" key={week}>
                 {Array(7).fill(0).map( (n,i) => {
                  let current = today.clone().week(week).startOf('week').add( n + i, 'day');
                 
                  let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                  
                  let isGrayed = current.format('MM') !== today.format('MM') ? 'grayed' : '';

                  return(
                      <>
                      <div className={`box ${isSelected} ${isGrayed}`} key={i} onClick={ () => handleDayClick(current)}>
                          <p className="text">{current.format('D')}</p>
                      </div>
                      </>
                  )
                 })};

             </div>
         );
     }

     return calendarFrame;
    }


    return (
        <>
        <div className="calendar">
            <div className="header">
                <div className="title">{date.format('MMM YYYY')}</div>
                <div className="util-button">
                    <button onClick={() => changeMonth(0)}>prev</button>
                    <button onClick={returnToday}>Today</button>
                    <button onClick={() => changeMonth(1)}>next</button>
                </div>
            </div>
            <div>
                <div className="dateOfWeek">
                    <div>SUN</div>
                    <div>MON</div>
                    <div>TUE</div>
                    <div>WED</div>
                    <div>TUR</div>
                    <div>FRI</div>
                    <div>SAT</div>
                </div>
            </div>
            <div className="row">
                {['SUN', 'MON', 'TUE', 'WED', 'TUR', 'FRI', 'SAT'].map((ele) => {
                    <div className="box" key={ele}>
                        <p className="text">{ele}</p>
                    </div>
                })}
            </div>
            {generate()}
        </div>
        </>
    )
}

export default Calendar