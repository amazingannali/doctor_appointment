import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AppointmentList from "./AppointmentList";
import AppointmentForm from "./AppointmentForm";
import { Modal } from "react-bootstrap";
import { MainBtn } from "../styles/shared";

// const Appointments = () => {

//   const updateAppointment = (id, appointment) => {
//     axios.put(`/api/appointments/${id}`, {appointment})
//      .then( res => {
//        let newUpdateAppointments = appointments.map( u => {
//          if (u.id === id) {
//            return res.data
//          }
//          return u
//        })
//        setAppointments(newUpdateAppointments)
//      })
//      .catch( err => console.log(err))
//   }

//   const deleteAppointment = (id) => {
//      axios.delete(`/api/appointments/${id}`)
//       .then( res => {
//         setAppointments(appointments.filter( u =>u.id !== id))
//       })
//       .catch( err => console.log(err))
//   }

//  return (
//  <>

//           <AppointmentList
//             appointments={appointments}
//           />

// </>
// )

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [appointmentedUsers, setAppointmentedUsers] = useState([]);
  const [adding, setAdd] = useState(false);

  const { doctorId } = useParams();
  const location = useLocation();
  const { doctorLast } = location.state;

  useEffect(() => {
    axios
      .get(`/api/doctors/${doctorId}/appointments`)
      .then((res) => {
        setAppointments(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(`/api/doctors/${doctorId}/appointmented`)
      .then((res) => {
        setAppointmentedUsers(res.date);
      })
      .catch((err) => console.log(err));
  }, []);

  const addAppointment = (appointment) => {
    axios
      .post(`/api/doctor/${doctorId}/appointments`, { appointment })
      .then((res) => {
        setAppointments([...appointments, res.data]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <MainBtn onClick={() => setAdd(true)}>+</MainBtn>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <AppointmentForm addAppointment={addAppointment} />
        </Modal.Body>
      </Modal>

      <h2>Doctor: {doctorLast}</h2>
      <AppointmentList
        appointments={appointments}
        appointmentedUsers={appointmentedUsers}
      />
    </>
  );
};

export default Appointments;
