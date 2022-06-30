import axios from "axios";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";

const DoctorShow = () => {

  const {id} = useParams()
  const  [doctor, setDoctor] = useState ({ first: '', last: '', title: '', special: ''})
  const { first, last, title, special} = doctor
  
  useEffect( () => {
    axios.get(`/api/doctors/${id}`)
    .then( res => {
      setDoctor(res.data)})
    .catch( err => console.log(err))
  },[])


  return(
    <>
    <h1>{first}{last}</h1>
    <h2>{title} </h2>
    <p>Specialty: {special} </p>
    </>
  )
}

export default DoctorShow;