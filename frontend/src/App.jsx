import React from 'react';
import "./App.css"
import TodaysTopNews from "./TodaysTopNews";
import Login from './Login';
import Time from './Time';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <div className='header'>
        <h1 className='header1'><Time /></h1>
        <h1 className='header2'>My Account</h1>
        <h1>Coming Soon...</h1>
        <h1 className='header3'>Log Out</h1>
      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login"><Login/></Route>
          </Routes>
        </BrowserRouter>
        <TodaysTopNews/>
      </div>

    </>
  );
}
export default App;