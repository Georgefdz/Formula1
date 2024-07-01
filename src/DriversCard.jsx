import React from 'react'

function DriversCard({data}) {
  return (
        <div className='card-container'>
            <div className='titles'>Name: <span>{data.full_name}</span></div>
            <div className='titles'>Country: <span>{data.country_code}</span></div>
            <div className='titles'>Team: <span>{data.team_name}</span></div>
            <div className='titles'>Number: <span>{data.driver_number}</span></div>
            <div className='image-container titles'>
                <img src={data.headshot_url} alt="" />
            </div>
            
        </div>
  )
}

export default DriversCard