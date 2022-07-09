import axios from "axios";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const DoctorShow = () => {

  const {id} = useParams()
  const  [doctor, setDoctor] = useState ({ first: '', last: '', title: '', special: '', imag: ''})
  const { first, last, imag, title, special} = doctor
  
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
    <img
       src={imag}
       alt="profile"
       width='300px'
       />
    <p>Specialty: {special} </p>
    <button>Edit</button>
    <Link 
    to={`/${id}/appointments`}
    state = {
      {doctorLast: last}
    }
    >
      <button>Appointments</button>
    </Link>
    
    <button>Delete</button>
    </>
  )
}

export default DoctorShow;