import React, { useState, useEffect } from "react";
import { Bar, Pie, } from "react-chartjs-2";
import {Chart, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, ArcElement, Title, Tooltip);

export default function Data() {
    // placeholder
    const [roomData, setRoomData] = useState([]);

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

    //set the highest usage chart data labels (***placeholder currently***)
    const usageLabels = ['a', 'b', 'c'];

    //set up data for the highest room usage pie graph data
    const usageData = {
      labels: usageLabels,
      datasets: [{
        label: 'Traffic',
        data: [1, 2, 3],
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
        labels: ["8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
        datasets: [{
            label: 'Occupancy',
            data: [1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            borderColor: 'rgba(53, 162, 235)',
            borderWidth: 1
        }],
    }

    // Data that is returned on page
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
                
                <button value="1">Room 1</button>
                <button value="2">Room 2</button>
                
                </div>
            </div>
            <div className="row">
                <Bar options={roomOptions} data={roomBarData} />
            </div>
        </div>
    );
}