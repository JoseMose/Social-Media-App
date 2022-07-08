import React, {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import "./App.css"

function App() {
  const[getHousingMarket, setGetHousingMarket] = useState(0)
  const[getTime, setGetTime] = useState(0)
  useEffect(() => {
    fetch('/main').then(res => res.json()).then(data => {
      setGetHousingMarket(data.api.datatable.data);
    });
  }, []);
  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setGetTime(data.time.datetime);
    });
  }, []);
  return (
    <>
    <div className='header'>
      <h1 className='header1'>Today's Breaking News</h1>
      <h1 className='header2'>My Account</h1>
      <h1>Coming Soon...</h1>
      <h1 className='header3'>Log Out</h1>
    </div>
      <div>
        <div>{getTime}</div>
        <div>{getHousingMarket}</div>
      </div>
    </>
  );
}
export default App;