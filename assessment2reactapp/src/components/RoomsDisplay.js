import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Progress } from 'reactstrap';

// function to create Rooms displayed on main screen
const RoomsDisplay = ({ movie }) => {

  // function to display Vacant room 
  const Vacant = () => {
    return <div>
      <Progress animated color="success" value={100}> VACANT </Progress>
    </div>
  }
  // function to display Occupied room
  const Occupied = () => {
    return <div>
      <Progress animated color="danger" value={100}> OCCUPIED </Progress>
    </div>
  }

  return (
    <>
      <Card style={{ width: '15rem', marginTop: '40px', marginLeft: '40px', marginRight: '40px'
    , marginBottom: '40px'}}>
        {/* ROOM IMAGE */}
        <img alt="Room" src="https://img.freepik.com/premium-vector/medical-background-simple-white-door-with-cross-icon-announcement-desk-blue-wall-background-doctors-room-realistic-illustration-landscape-healthcare-banner-with-copy-space_261737-5.jpg?w=2000" />
        <CardBody>
          <CardTitle tag="h5">
            {/* Doctor Name THIS WILL BE CHANGED TO DOCTOR'S LAST NAME*/}
            Doctor: {movie.Title}
          </CardTitle>
          {/* Room Number THIS WILL BE CHANGED TO THE ACTUAL ROOM NUMBER*/}
          <CardSubtitle
            className="mb-2"
            tag="h6"> Room: {movie.imdbID}
          </CardSubtitle>
        </CardBody>
        {/* Room Occupancy THIS WILL BE CHANGED TO REFLECT THE PRESSURE VALUE */}
        {movie.Year > '2007' ? Occupied() : Vacant()}

      </Card>

    </>
  )
}

export default RoomsDisplay;