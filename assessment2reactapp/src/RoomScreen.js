import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Progress } from 'reactstrap';



// This will be the main screen that shows the rooms

export default function RoomScreen() {
  

  
    return (


/* FIRST ROOM */
    <div class="container">
    <div class="justify-content-center">
    <Card
  style={{width: '18rem'}}
>
  <img
    alt="Room"
    src="https://img.freepik.com/premium-vector/medical-background-simple-white-door-with-cross-icon-announcement-desk-blue-wall-background-doctors-room-realistic-illustration-landscape-healthcare-banner-with-copy-space_261737-5.jpg?w=2000"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"> Card subtitle </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
  </CardBody>
</Card>
        </div>


{/* SECOND ROOM */}

<div class="justify-content-center">
    <Card
  style={{width: '18rem'}}
>
  <img
    alt="Room"
    src="https://img.freepik.com/premium-vector/medical-background-simple-white-door-with-cross-icon-announcement-desk-blue-wall-background-doctors-room-realistic-illustration-landscape-healthcare-banner-with-copy-space_261737-5.jpg?w=2000"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"> Card subtitle </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
  </CardBody>
</Card>
        </div>


{/* THIRD ROOM */}

<div class="justify-content-center">
    <Card
  style={{width: '18rem'}}
>
  <img
    alt="Room"
    src="https://img.freepik.com/premium-vector/medical-background-simple-white-door-with-cross-icon-announcement-desk-blue-wall-background-doctors-room-realistic-illustration-landscape-healthcare-banner-with-copy-space_261737-5.jpg?w=2000"
  />
  <CardBody>
    <CardTitle tag="h5">
      Card title
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"> Card subtitle </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
  </CardBody>
</Card>
        </div>

        </div>
 

 
 )



}
