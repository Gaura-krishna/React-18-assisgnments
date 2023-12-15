import React from 'react'
import {Link} from 'react-router-dom'
import './card.css'

export default function Carddata(props) {

    let {id, Username, Email, Phone, link, add } = props
    let imageavatar = `https://avatars.dicebear.com/v2/avataaars/${id}.svg?options[mood][]=happy`
    console.log(props)

    return (

        <div className="card m-3 align-center">
            <div className="row g-0 d-flex w-100">
                <div className="col-md-4" style={{width:"220px"}}>
                    <img src={imageavatar} className="img-fluid rounded-start" alt=" broken" />
                </div>
                <div className="col-md-4">
                    <div className="card-body text-start">
                        <h5 className="card-title"><b>{Username}</b></h5>
                        <p class="card-text"><b>Email:</b>{Email}</p>
                        <p class="card-text"><b>Phone:</b>{Phone}</p>
                        <p className='card-text'><b>Address</b> {add}</p>
                        {/* <a href={link}>{link}</a> */}
                        <Link to={`/user/${id}`} state={{data:props}}>VIEW DETAILS</Link>
                    </div>
                   
                </div>
            </div>
        </div>
    
  )
}
