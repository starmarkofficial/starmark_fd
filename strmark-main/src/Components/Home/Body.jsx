import React, { useEffect, useState } from 'react'
import axios from 'axios';
const baseUrl ="http://13.48.192.109"
import { useNavigate } from "react-router-dom";
function Body() {
  const navigate = useNavigate();
  const [Userdata, setUserdata] = useState([])
  const AboutPage= async ()=>{
    try {

    
      axios
      .get(`${baseUrl}/about`)
      .then((response) => {
        console.log(response.data);
        setUserdata(response.data);
      });

    } catch (error) {
      alert(error)
      navigate("/login")
    }
  }

  useEffect(() => {  
  AboutPage();
   }, [])
  
  return (
    <div className='h-[400px] bg-gray-300'>
  
    cfs 
    {Userdata.map((item) => (
        <div key={item._id} className="text-black">
          {item.Name}x
        </div>
      ))}

    </div>
  )
}

export default Body