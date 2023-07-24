import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

function App() {
  const [profileData, setProfileData] = useState(null)
  
  //Testing getdata function
  function getData() {
    axios({
      method: "GET",
      url:"http://localhost:5000/profile",
    }).then((response) => {
      const res = response.data
      console.log(res)
      setProfileData(({
        profile_name: res.name,
        about_me:res.about
      }))
    }).catch((error) => {
      if (error.response) {
        console.log("ERROR")
      }
    })
  }

  console.log("Here")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick = {getData}>Test button</button>
    </div>
  );
}

export default App;
