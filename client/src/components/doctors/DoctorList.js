import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';

const DoctorList = ({doctors}) => (
<>
  <h1> All Doctors</h1>
  <Container>
    <Row md={3} xs={12}>
      { doctors.map ( d => 
       <Col>
        <Card style={{ width: '10rem' }}>
         <Card.Body>
          <Card.Title>{d.first}{d.last}</Card.Title>
          <Card.Link>
            <Link to={`/doctors/${d.id}`}>
              Show
            </Link>
          </Card.Link>
         </Card.Body>
        </Card>
       </Col>
      )}
    </Row>
  </Container>
</>
)


export default DoctorList;