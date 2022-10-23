import React, { useState, useEffect } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Progress } from 'reactstrap';

// c43a46d8

const API_URL = 'http://www.omdbapi.com?apikey=c43a46d8';

const movie1 = {
  "Title": "Superman Returns",
  "Year": "2006",
  "imdbID": "tt0348150",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
};

const movie2 = {
  "Title": "Superman",
  "Year": "2008",
  "imdbID": "tt0348155",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNzY2ZDQ2MTctYzlhOC00MWJhLTgxMmItMDgzNDQwMDdhOWI2XkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
};

// This will be the main screen that shows the rooms
export default function RoomScreen() {

  const [databaseInfo, setDatabaseInfo] = useState([]);
  const isOccupied = false; // dummy value for now

  const searchMovies = async(title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Superman');
  }, [])
  
  


  
  
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
          {props.roomVacancy}
        </Card>
      </>
    )
  }


  

  return (
    <div class="container">
      {/* first row of rooms */}
      <div class="row justify-content-start mt-2">
        <div class="col justify-content-start mt-5">
          <Rooms name={movie1.Title} room={movie1.Year} 
          roomVacancy={movie1.Year > '2007' ? Occupied() : Vacant()}/>
        </div>
        <div class="col justify-content-start mt-5">
          <Rooms name={movie2.Title} room={movie2.Year} 
          roomVacancy={movie2.Year > '2007' ? Occupied() : Vacant()}/>
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
