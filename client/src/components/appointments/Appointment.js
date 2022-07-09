import { ListGroup } from "react-bootstrap";

const Appointment = ({ user_id, doctor_id, AppointmentedUsers }) => {
  const displayFullName = (id) => {
    let fullName = "";
    AppointmentedUsers.map((a) => {
      if (a.id === id) {
        fullName = a.first + " " + a.last;
      }
    });
    return fullName;
  };
  return (
    <>
      <ListGroup.Item>
        {displayFullName(user_id)}
        <button> edit </button>
        <button> edit </button>
      </ListGroup.Item>
    </>
  );
};

export default Appointment;
