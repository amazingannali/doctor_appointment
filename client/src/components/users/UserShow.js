import axios from "axios";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";

const UserShow = () => {

  const {id} = useParams()
  const  [user, setUser] = useState ({ first: '', last: '', image: '', phone: '', note: ''})
  const { first, last, image, phone, note} = user
  
  useEffect( () => {
    axios.get(`/api/users/${id}`)
    .then( res => {
      setUser(res.data)})
    .catch( err => console.log(err))
  },[])


  return(
    <>
    <h1>{first}{last}</h1>
    <img
       src={image}
       alt='profile'
       width='300px'
       />
    <h2>{phone} </h2>
    <p>note: {note} </p>
    <button>Edit</button>
    <button>Delete</button>
    </>
  )
}

export default UserShow;