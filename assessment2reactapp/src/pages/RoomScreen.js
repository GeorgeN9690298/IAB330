import React, {useState} from "react";
import { Progress } from 'reactstrap';
import RoomsDisplay from "../components/RoomsDisplay";

// This will be the main screen that shows the rooms
export default function RoomScreen() {

  const [databaseInfo, setDatabaseInfo] = useState([]);

  // Retrieve database information 
  useEffect(() => {
        fetch("http://52.72.184.144:3001/all")
        .then(res => res.json())
        .then(databaseInfo => setDatabaseInfo(databaseInfo))
      }, []);

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
    <div class="container">
      {/* first row of rooms */}
      <div class="row justify-content-start mt-2">
        <div class="col justify-content-start mt-5">
          <RoomsDisplay name={'Smith'} room={'2'}
            roomVacancy={Occupied()}
          />
        </div>
        <div class="col justify-content-start mt-5">
          <RoomsDisplay name={''} room={'4'}
            roomVacancy={Vacant()}
          />
        </div>
        <div class="col justify-content-start mt-5">
          <RoomsDisplay name={'Brown'} room={'10'}
            roomVacancy={Occupied()}
          />
        </div>
      </div>

      {/* second row of rooms */}
      <div class="row justify-content-start mt-2">
        <div class="col justify-content-start mt-5">
          <RoomsDisplay name={'Johnson'} room={'11'}
            roomVacancy={Occupied()}
          />
        </div>
        <div class="col justify-content-start mt-5">
          <RoomsDisplay name={'Lee'} room={'7'}
            roomVacancy={Occupied()}
          />
        </div>
        <div class="col justify-content-start mt-5">
          <RoomsDisplay name={''} room={'9'}
            roomVacancy={Vacant()}
          />
        </div>
      </div>
    </div>
  )
}