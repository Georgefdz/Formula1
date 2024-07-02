import React from 'react'

function DriversCard({data, data2}) {
 

    console.log(data2)
  return (
    <>
        {data.map((data) => (
        <div className='card-container'>
            <div className='titles'>Name: <span>{`${data.Driver.givenName}  ${data.Driver.familyName}`}</span></div>
            <div className='titles'>Nationality: <span>{data.Driver.nationality}</span></div>
            <div className='titles'>Team: <span>{data.Constructors[0].name}</span></div>
            <div className='titles'>Number: <span>{data.Driver.permanentNumber}</span></div>
            <div className='titles'>Position: <span>{data.position}</span></div>
            <div className='titles'>Points: <span>{data.points}</span></div>
        </div>
      ))}


    </>


  )
}

export default DriversCard