import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const DoctorForm = ({ addDoctor }) => {
 const [ doctor, setDoctor ] = useState ({ first: '', last: '', title: '', special: '' })

 const handleSubmit = (e) => {
   e.preventDefault()
   addDoctor(doctor)
   setDoctor({first: '', last: '', title: '', special: ''})
 }
  return (
    <>
      <h1>Creat Doctor</h1>
      <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" >
              <Form.Label>First Name:</Form.Label>
              <Form.Control 
                name='first'
                value={doctor.first}
                onChange={(e) => setDoctor({...doctor, first: e.target.value})}
                placeholder="first name"
                required
              /> 
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Last Name:</Form.Label>
              <Form.Control 
                name='last'
                value={doctor.last}
                onChange={(e) => setDoctor({...doctor, last: e.target.value})}
                placeholder="Last name"
                required
              /> 
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Title:</Form.Label>
              <Form.Control 
                name='title'
                value={doctor.title}
                onChange={(e) => setDoctor({...doctor, title: e.target.value})}
                placeholder="Title"
                required
              /> 
            </Form.Group>
            
            <Form.Group className="mb-3" >
              <Form.Label>Specialty:</Form.Label>
              <Form.Control 
                name='special'
                value={doctor.special}
                onChange={(e) => setDoctor({...doctor, special: e.target.value})}
                placeholder="Specialty"
                required
                as="textarea"
                rows={3}
              /> 
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
        </Form>
    </>
  )
}

export default DoctorForm;