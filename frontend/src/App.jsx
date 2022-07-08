import React, {useEffect, useState} from 'react';
import "./App.css"

function App() {
  const[getHousingMarket, setGetHousingMarket] = useState([])
  const[getTime, setGetTime] = useState(0)
  useEffect(() => {
    fetch('/main').then(res => res.json()).then(data => {
      console.log(data)
      setGetHousingMarket(data.api.results);
    })
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
        <div>{getHousingMarket.constructor}</div>
      </div>
    </>
  );
}
export default App;