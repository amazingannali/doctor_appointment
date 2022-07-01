import axios from "axios";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";

const UserShow = () => {

  const {id} = useParams()
  const  [user, setUser] = useState ({ first: '', last: '', phone: '', note: ''})
  const { first, last, phone, note} = user
  
  useEffect( () => {
    axios.get(`/api/users/${id}`)
    .then( res => {
      setUser(res.data)})
    .catch( err => console.log(err))
  },[])


  return(
    <>
    <h1>{first}{last}</h1>
    <h2>{phone} </h2>
    <p>note: {note} </p>
    </>
  )
}

export default UserShow;