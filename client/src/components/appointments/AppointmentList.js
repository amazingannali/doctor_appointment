import { ListGroup, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const AppointmentList = ({appointments, appointmented}) => (
  <>
  <h1>All Appointments</h1>
  <ListGroup variant="flush">
    { appointments.map( a => 
      <ListGroup.Item>
        {a.adate} {a.atime} 
        <Link to={`/appointments/${a.id}`}>
          <Button>Show</Button>
        </Link>
      </ListGroup.Item>
    )}
  </ListGroup>
</>
)

export default AppointmentList;