import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventList from './EventList';

const Updates = () => {
  const [list, setList] = useState([]);

  var options = {
    method: 'GET',
    url: 'https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi',
    params: {q: 'get:new7:US', p: '1', t: 'ns', st: 'adv'},
    headers: {
      'x-rapidapi-key': 'd9e50a69bcmsh488be137274764dp134d8cjsnc93338e346b2',
      'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
    }
    
  };
  
  useEffect (() => {
    axios.request(options)
    .then( (response) => {
      console.log(response.data.ITEMS)
      setList(response.data.ITEMS);})
  
  }, [])

  return(
    <>
    {list.map((list) => {
      return(
        <>
        <EventList list={list}/>
        </>
      )
    })}

    </>
  )
}





export default Updates