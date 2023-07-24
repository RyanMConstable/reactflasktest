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
  
  //Testing getdata function
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

  return (
    <div className="App">
      <button onClick = {getData}>Test button</button>
      <ReturnApp result = {profileData}/>
    </div>
  );
}

export default App;
