import React, { useEffect, useState } from 'react'
import Carddata from './Carddata'

export default function Home() {
  let [data, setdata] = useState([])
  let [search, setSearch] = useState("")
  let [searchval, setSearchval] = useState("")

  function userdata() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setdata(data)
      })

  }

  useEffect(() => {
    userdata()
  }, [])

  let FilterData = data.filter(val => {
    return val.username.toLowerCase().includes(searchval.toLowerCase())
  })

  return (
    <div>
     
      <div className="input-group m-3 w-50 ">
        <input type="text" class="form-control" placeholder="Recipient's username"  onChange={(e)=> setSearch(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
          <span className="input-group-text btn border border-start-0" onClick={()=>{ setSearchval(search)}} id="basic-addon2">search</span>
      </div>
      <div className='d-flex justify-content-around flex-wrap'>
      {
        FilterData.map((val) => {
          return (
            <div >
             <Carddata id={val.id} Username={val.username} Email={val.email} Phone={val.phone} link={val.website} add={val.address.city} />

            </div>


          )
        })
      }
      </div>
    </div>
  )
}


