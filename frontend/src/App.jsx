import React from 'react';
import "./App.css"
import TodaysTopNews from "./TodaysTopNews";
import Login from './Login';
import Time from './Time';

function App() {
  return (
    <>
      <div className='header'>
        <h1><Login /></h1>
        <h1 className='header2'>My Account</h1>
        <h1>Coming Soon...</h1>
        <h1 className='header3'>Log Out</h1>
      </div>
      <div>
        <div><Time /></div>
        <div><TodaysTopNews/></div>
      </div>

    </>
  );
}
export default App;