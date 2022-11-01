import React, { useState, useEffect } from "react";
import { Bar, Pie, } from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, ArcElement, Title, Tooltip);

export default function Data() {
    // initialise values to be updated from requests to database
    const [pressurevalue, setPressureValue] = useState([]);
    const [lockid, setLockID] = useState([]);
    const [timestamp, setTimestamp] = useState([]);
    const [serialid, setSerialID] = useState([]);
    const [room, setRoom] = useState([]);

    /* //retrieve room number from database
    useEffect(() => {
      fetch("http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=10") //http://44.211.4.25/lock
      .then(res => res.json())
      .then(serialid => setSerialID(serialid))
    }, []);

    //retrieve timestamp for received value from database
    useEffect(() => {
      fetch("http://www.randomnumberapi.com/api/v1.0/random?min=10&max=1000&count=1")
      .then(res => res.json())
      .then(timestamp => setTimestamp(timestamp))
    }, []);

    //retrieve lock id for an entered room
    useEffect(() => {
      fetch("http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1")
      .then(res => res.json())
      .then(lockid => setLockID(lockid))
    }, []);

    //retrieve and set pressure values from nodered for graph display
    useEffect(() => {
      fetch("http://www.randomnumberapi.com/api/v1.0/random?min=0&max=3&count=10")
      .then(res => res.json())
      .then(pressurevalue => setPressureValue(pressurevalue))
    }, []); */
   
    //set the options for highest usage pie chart
    const usageOptions = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Rooms With Highest Usage',
            font: {
              size: 25
            }
          },
        },
      };

    //set the highest usage chart data labels 
    const usageLabels = [1, 2, 3, 4, 5, 6, 7];

    //set up data for the highest room usage pie graph data
    const usageData = {
      labels: usageLabels,
      datasets: [{
        label: 'Traffic',
        data: [1, 2, 3, 4, 5, 6, 7],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        borderColor: 'rgba(53, 162, 235)',
        borderWidth: 1
      }],
    };

    //set room options for bar graph
    const roomOptions = {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Occupancy in Room',
            font: {
              size: 25
            }
          },
        },
    }

    //set data settings for individual room, most of this is placeholder
    const roomBarData = {
        labels: [9.00, 10.00, 11.00, 12.00, 13.00, 14.00, 15.00],
        datasets: [{
            label: 'Occupancy',
            data: [0, 2, 1, 0, 0, 2, 1],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235)',
            borderWidth: 1
        }],
    }

    //Data/Components that are returned on page
    return(
        <div className="container">
            <div className="row">
                <h1>Room Usage Data</h1>
            </div>
            
            <div className="row">
                <div className="col-8">
                    <Pie options={usageOptions} data={usageData} />
                </div>            
                <div className="col-4">
                  <select onChange={(e) => setRoom(e.target.value)}>
                  <option>Select Room</option>
                  {/* {serialid.map((serialid) => (
                    <option value={serialid}>{serialid}</option>
                  ))} */}
                  <option>Room 1</option>
                  <option>Room 2</option>
                  <option>Room 3</option>
                  </select>
                </div>
            </div>
            <div className="row">
                <Bar options={roomOptions} data={roomBarData} />
            </div>
        </div>
    );
}