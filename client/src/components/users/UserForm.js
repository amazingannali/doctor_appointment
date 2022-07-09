import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const UserForm = ({ addUser }) => {
 const [ user, setUser ] = useState ({ first: '', last: '', image: '', phone: '', note: '' })

 const handleSubmit = (e) => {
   e.preventDefault()
   addUser(user)
   setUser({first: '', last: '', image: '', phone: '', note: ''})
 }
  return (
    <>
      <h1>Creat User</h1>
      <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" >
              <Form.Label>First Name:</Form.Label>
              <Form.Control 
                name='first'
                value={user.first}
                onChange={(e) => setUser({...user, first: e.target.value})}
                placeholder="first name"
                required
              /> 
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Last Name:</Form.Label>
              <Form.Control 
                name='last'
                value={user.last}
                onChange={(e) => setUser({...user, last: e.target.value})}
                placeholder="Last name"
                required
              /> 
            </Form.Group>

            <Form.Group className="mb-3">
          <Form.Label>Profile Image</Form.Label>
          <Form.Control 
            name='image'
            value={user.image}
            onChange={(e) => setUser({ ...user, image: e.target.value })}
            required
            />
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Phone:</Form.Label>
              <Form.Control 
                name='Phone'
                value={user.phone}
                onChange={(e) => setUser({...user, phone: e.target.value})}
                placeholder="Phone"
                required
              /> 
            </Form.Group>
            
            <Form.Group className="mb-3" >
              <Form.Label>Note:</Form.Label>
              <Form.Control 
                name='Note'
                value={user.note}
                onChange={(e) => setUser({...user, note: e.target.value})}
                placeholder="Note"
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

export default UserForm;