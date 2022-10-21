import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Progress } from 'reactstrap';



// This will be the main screen that shows the rooms

export default function RoomScreen() {


  // function to create Rooms display

  const Rooms = (props) => {

    return (
      <>
        <Card style={{ width: '15rem' }}>
          {/* ROOM IMAGE */}
          <img alt="Room" src="https://img.freepik.com/premium-vector/medical-background-simple-white-door-with-cross-icon-announcement-desk-blue-wall-background-doctors-room-realistic-illustration-landscape-healthcare-banner-with-copy-space_261737-5.jpg?w=2000" />
          <CardBody>
            <CardTitle tag="h5">
              {/* Doctor Name */}
              Doctor: {props.name}
            </CardTitle>
            {/* Room Number */}
            <CardSubtitle
              className="mb-2"
              tag="h6"> Room: {props.room} </CardSubtitle>
          </CardBody>
          {isOccupied ? Occupied() : Vacant()}
        </Card>
      </>
    )
  }

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
  const isOccupied = true;
  return (

    <div class="container">

      {/* first row of rooms */}
      <div class="row justify-content-start mt-2">

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

      </div>

      {/* second row of rooms */}

      <div class="row justify-content-start mt-2">

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

        <div class="col justify-content-start mt-5">
          <Rooms name={'Mike'} room={'30'} />
        </div>

      </div>

    </div>



  )



}
