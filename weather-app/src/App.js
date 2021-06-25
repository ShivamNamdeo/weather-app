import React,{useState,useEffect} from 'react'
import moment from "moment";

const App = () => {


  const [curr_data, set_curr_data] = useState({});
  const [fore_data, set_fore_data] = useState({});
  const [location, set_location] = useState("indore");
  const [temp_location, set_temp_location] = useState("indore");
  const api = "98243a52aafb5d914040c7a959be0e40";


  useEffect(() => {
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${api}`)
    .then(data=>data.json())
    .then(doc=>{
      doc.cod !=="404"? console.log(doc) : alert("City Not Found")
    })


    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${api}`)
    .then(data=>data.json())
    .then(doc=>{
      doc.cod !=="404"? console.log(doc) : alert("City Not Found")
    })

  }, [])

  return (
    <div>
      <h1>Weather App</h1>
    </div>
  )
}

export default App