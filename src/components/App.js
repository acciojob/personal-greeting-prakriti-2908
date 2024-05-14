
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [para,setPara] = useState('');

  const about = (event) => {
    setPara(event.target.value);
  }
  return (
    <div>
      {/* <p>Enter your name:</p> */}
      <input type="text" value={para} onChange={about}></input>
      <p>Hello {para}!</p>
    </div>
  )
}

export default App
