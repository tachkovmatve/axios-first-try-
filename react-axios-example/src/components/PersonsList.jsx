import React from 'react'
import axios from "axios"
import { useState } from 'react'


const PersonsList = () => {
    const [data, setData] = useState([]);
    function getData(){
        axios.get("https://reqres.in/api/users?page=2")
        .then(res => setData(res.data.data))
        .catch(err => err("fetch failed"))
    }
    getData()
  return (
    <div>
        {
            data.map((d, index)=>{
                return <p key={index}>{d.avatar}</p>
            })
        }
    </div>
  )
}

export default PersonsList