import React, { useEffect, useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import RoomScreen from './RoomScreen';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  // useEffect(() => {
  //   setAppState({ loading: true });
  //   const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
  //   fetch(apiUrl)
  //     .then((res) => res.json())
  //     .then((repos) => {
  //       setAppState({ loading: false, repos: repos });
  //     });
  // }, [setAppState]);
  
  return (
    <RoomScreen />
  );
}
export default App;
