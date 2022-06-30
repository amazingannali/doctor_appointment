import { useState, useEffect } from 'react';
import axios from 'axios';
import DoctorList from './DoctorList';
import DoctorForm from './DoctorForm';
import { Button, Modal } from 'react-bootstrap';
import { MainBtn } from '../styles/shared';

const Doctors = () => {

  const [ doctors, setDoctors] = useState ([])
  const [ adding, setAdd ] = useState(false)
  
  useEffect( () => {
    axios.get('/api/doctorses')
     .then( res => {
       setDoctors(res.data)
     })
     .catch( err => console.log(err))
  }, [])

  const addDoctor = (doctor) => {
    axios.post('/api/docotrs', { doctor })
     .then(res => {
       setDoctors([...doctors, res.data])
     })
     .catch( err => console.log(err))
  }

  const updateDoctor = (id, doctor) => {
    axios.put(`/api/doctors/${id}`, {doctor})
     .then( res => {
       let newUpdateDoctors = doctors.map( d => {
         if (d.id === id) {
           return res.data
         }
         return d
       })
       setDoctors(newUpdateDoctors)
     })
     .catch( err => console.log(err))
  }

  const deleteDoctor = (id) => {
     axios.delete(`/api/doctors/${id}`)
      .then( res => {
        setDoctors(doctors.filter( d =>d.id !== id))
      })
      .catch( err => console.log(err))
  }

return (
<>
          <MainBtn onClick={() => setAdd(true)}>
            +
          </MainBtn>

          <Modal show={adding} onHide={() => setAdd(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <DoctorForm 
               addDoctor={addDoctor}
               />
            </Modal.Body>
          </Modal>
  
          <DoctorList 
            doctors={doctors}
          />

</>
)


}

export default Doctors;