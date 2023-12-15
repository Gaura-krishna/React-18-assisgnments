import React from 'react'
import { useLocation } from 'react-router-dom'

export default function User() {
    const loc=useLocation()
    const data=loc.state.data
  return (
    <div>
         <div className="col-md-8">
                    <div className="card-body text-start">
                        <h5 className="card-title"><b>{data.Username}</b></h5>
                        <p class="card-text"><b>Email:</b>{data.Email}</p>
                        <p class="card-text"><b>Phone:</b>{data.Phone}</p>
                        <p className='card-text'><b>Address</b> {data.add}</p> 
                        {/* {/* <a href={data.link}>{data.link}</a>
                                            */}
                    </div>
                </div>
    </div>
  )
}
