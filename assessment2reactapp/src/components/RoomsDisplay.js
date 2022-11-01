import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Progress } from 'reactstrap';

// function to create Rooms displayed on main screen
const RoomsDisplay = (props) => {

  return (
    <>
      <Card style={{ width: '15rem', marginTop: '40px', marginLeft: '40px', marginRight: '40px'
    , marginBottom: '40px'}}>
        {/* ROOM IMAGE */}
        <img alt="Room" src="https://img.freepik.com/premium-vector/medical-background-simple-white-door-with-cross-icon-announcement-desk-blue-wall-background-doctors-room-realistic-illustration-landscape-healthcare-banner-with-copy-space_261737-5.jpg?w=2000" />
        <CardBody>
          <CardTitle tag="h5">
            {/* Doctor Name - this is used to display the Doctor/Nurses names on the card */}
            Doctor: {props.name}
          </CardTitle>
          {/* {/* Room Number - this is used to display the room number on the card  */}
          <CardSubtitle
            className="mb-2"
            tag="h6"> Room: {props.room}
          </CardSubtitle>
        </CardBody>
        {/* Room Occupancy - this is used to show room vacancy on the card*/}
        {props.roomVacancy}
      </Card>
    </>
  )
}

export default RoomsDisplay;