import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';


function ReturnApp(props) {
  if (props.result == null){
    return(<div>Original</div>)
  } else {
    console.log(props)
    return(<div>{props.result.about_me}</div>)
  }
}


function App() {
  const [profileData, setProfileData] = useState(null)
  
  //This function uses Axios to get the response from the API (flask)
  //Apparently fetch does the same thing (look into it)
  function getData() {
    console.log("GetData", profileData)
    axios({
      method: "GET",
      url:"http://localhost:5000/profile",
    }).then((response) => {
      const res = response.data
      setProfileData(({
        profile_name: res.name,
        about_me:res.about
      }))
    }).catch((error) => {
      if (error.response) {
      }
    })
  }

  //Simple when you click the button it displays info from flask
  return (
    <div className="App">
      <button onClick = {getData}>Display Most Kill Game</button>
      <ReturnApp result = {profileData}/>
    </div>
  );
}

export default App;
