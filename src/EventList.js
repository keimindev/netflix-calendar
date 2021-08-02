import React from 'react'

const EventList = ({ list }) => {
    return (
        <>
        <div className="list">
           <div>{list.type}</div>
           <div>{list.title}</div>
           <div>{list.unogsdate}</div>
        </div>
        </>
    )
}


export default EventList
