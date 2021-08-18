import React, {useState, useEffect} from 'react'
import axios from 'axios';
import moment, {Moment as MomentTypes } from 'moment';



const Calendar = () => {
    //calendar data
    const [date, setdate] = useState(() => moment());
    //netflix contents data
    const [list, setList] = useState([]);

    //function
    const handleDayClick = (current) => {setdate(current);};
    const returnToday = () => setdate(moment());
    const changeMonth = (num) => (num ? setdate(date.clone().add(30,'day')) : setdate(date.clone().subtract(30, 'day')));
    
        //getContents - call data 
        const Netflix = () => {
            var options = {
                method: 'GET',
                url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
                params: {q: 'get:new7:US', p: '1', t: 'ns', st: 'adv'},
                headers: {
                  'x-rapidapi-key': 'YOUR_KEY',
                  'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
                }
                
            };
              
            useEffect (() => {
                axios.request(options)
                .then( (response) => {
                  setList(response.data.ITEMS);})

              
            }, [])

            return(

                <>
                {list.map( (list) => {
                    let cur = moment().format().slice(0,10)
                    if( list.unogsdate === cur){
                     return(
                        <>
                        <div className="list">
                            <div><span className="type">[{list.type}]</span> <span className="content-title">{list.title}</span></div>
                        </div>
                        </>
                     )
                    }
                })}
                </>

              )
        
        }



    //calendar generate logic
    const generate = () => {
     const today = date;
     
     const startWeek = today.clone().startOf('month').week()

     const endWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week()

     let calendarFrame = []

    //넷플릭스 컨텐츠를 날짜에 맞게 넣기 위한 건데, for문 안에 넣으면 반복문이 되면서 날짜가 다 반복되어서 나와서 걸러내는 의미가 없음
    //하지만 이렇게 넣으면 한 컨텐츠 관련해서 같은 내용이 가득 들어감.  


     for(let week = startWeek; week<=endWeek; week++){
         calendarFrame.push(
             <div className="row" key={week}>
                 {Array(7).fill(0).map( (n,i) => {
                  let current = today.clone().week(week).startOf('week').add( n + i, 'day');
                 
                  //선택된 날짜
                  let isSelected = today.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                  
                  //다음달이나, 이전달 숫자는 회색으로 표현
                  let isGrayed = current.format('MM') !== today.format('MM') ? 'grayed' : '';
                  
                  let contents = current.format('YYYY-MM-DD') === '2021-08-04' ?  <Netflix list={list}/> : '';
                  console.log(contents)

                  

                    return(
                        <>
                          <div className={`box ${isSelected} ${isGrayed}`} key={i} onClick={ () => handleDayClick(current)}>
                              <p className="text">{current.format('D')}</p>
                              <div className="content-list">
                                  <div>{contents}</div>
                                  
                              </div>
                          </div>
                        </>
                      )
                  })}

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
                    <button onClick={() => changeMonth(0)}>
                      Prev
                    </button>
                    <button onClick={returnToday}>Today</button>
                    <button onClick={() => changeMonth(1)}>
                       Next
                    </button>
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
