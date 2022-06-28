import axios from 'axios';
import React, {useEffect, useState} from 'react';
import "./App.css"

function App() {
  const[getMessage, setGetMessage] = useState(({}))
    useEffect(()=>{
    axios.get('/main').then(response => {
        setGetMessage(response)
    })
    }, [])
  return (
      <div>
        <h3>{getMessage.data}</h3>
      </div>
  );
}
export default App;