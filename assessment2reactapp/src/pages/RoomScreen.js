import React, { useState, useEffect } from "react";
import { Progress } from 'reactstrap';
import RoomsDisplay from "../components/RoomsDisplay";

// c43a46d8

const API_URL = 'http://www.omdbapi.com?apikey=c43a46d8';

// This will be the main screen that shows the rooms
export default function RoomScreen() {

  const [databaseInfo, setDatabaseInfo] = useState([]);
  const [movies, setMovies] = useState([]);

  const isOccupied = false; // dummy value for now

  // fetch URL should be changed to our DB URL
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
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

  // return (
  //   <div class="container">
  //     {/* first row of rooms */}
  //     <div class="row justify-content-start mt-2">
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={movie1.Title} room={movie1.Year} 
  //         roomVacancy={movie1.Year > '2007' ? Occupied() : Vacant()}/>
  //       </div>
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={movie2.Title} room={movie2.Year} 
  //         roomVacancy={movie2.Year > '2007' ? Occupied() : Vacant()}/>
  //       </div>
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={'Mike'} room={'30'} />
  //       </div>
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={'Mike'} room={'30'} />
  //       </div>
  //     </div>

  //     {/* second row of rooms */}
  //     <div class="row justify-content-start mt-2">
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={'Mike'} room={'30'} />
  //       </div>
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={'Mike'} room={'30'} />
  //       </div>
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={'Mike'} room={'30'} />
  //       </div>
  //       <div class="col justify-content-start mt-5">
  //         <RoomsDisplay name={'Mike'} room={'30'} />
  //       </div>
  //     </div>
  //   </div>
  // )

  return (
    <div className="container">
      {
        movies?.length > 0
          ? (
            <div className="container">
              <div className="d-flex row justify-content-around flex-wrap mt-5">
                {movies.map((movie) => (
                  <RoomsDisplay movie={movie} />
                ))}
              </div>
            </div>

          ) :
          (
            <div className="empty">

              <h2>No movies found</h2>

            </div>
          )
      }


    </div>




  );


}
