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

    //retrieve room number from database
    useEffect(() => {
      fetch("http://44.211.4.25/5432")
      .then(res => res.json())
      .then(serialid => setSerialID(serialid))
    }, []);

    //retrieve timestamp for received value from database
    useEffect(() => {
      fetch("http://44.211.4.25/5432")
      .then(res => res.json())
      .then(timestamp => setTimestamp(timestamp))
    }, []);

    //retrieve lock id for an entered room
    useEffect(() => {
      fetch("http://44.211.4.25/5432")
      .then(res => res.json())
      .then(lockid => setLockID(lockid))
    }, []);

    //retrieve and set pressure values from nodered for graph display
    useEffect(() => {
      fetch("http://44.211.4.25/5432")
      .then(res => res.json())
      .then(pressurevalue => setPressureValue(pressurevalue))
    }, []);
   
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
    const usageLabels = [{timestamp}];

    //set up data for the highest room usage pie graph data
    const usageData = {
      labels: usageLabels,
      datasets: [{
        label: 'Traffic',
        data: [{lockid}],
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
        labels: [{timestamp}],
        datasets: [{
            label: 'Occupancy',
            data: [{pressurevalue}],
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
                  {serialid.map((serialid) => (
                    <option value={serialid}>{serialid}</option>
                  ))}
                  </select>
                </div>
            </div>
            <div className="row">
                <Bar options={roomOptions} data={roomBarData} />
            </div>
        </div>
    );
}