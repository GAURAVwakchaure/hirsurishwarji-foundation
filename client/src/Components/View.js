import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function View() {

    const {id} = useParams()
    const [userData, setuserData] = useState()

    useEffect(() => {
      axios.get(`https://hirsurishwarji-foundation.herokuapp.com/${id}`)
          .then(response => {
              setuserData(response.data)
          })
  }, [])

  console.log(userData)
    // alert(id)

    
  return <div>

{/* 
{Object.keys(userData).map((key) => (
  <h1>{userData[key]}</h1>



))}
     */}



    

      

      <p>This is View Section</p>

      <p>`Show the data of user {id}`</p>

  </div>;
}
