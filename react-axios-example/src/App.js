
import axios from 'axios';
import './App.css';
import {useState, useEffect} from "react"
import PersonsList from './components/PersonsList';



function App() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get("https://reqres.in/api/users?page=2")
    .then(res => setData(res.data.data))
    .catch(err => console.log(err))
  }, [])
  return (
    <div className="App">
      <h1>axios library "trying to fetch using useEffect"</h1>
      {
         data.map((d,index )=>{
           return <p key={index}>{d.email}</p>
        })
      }
      <br /><br /><br />
      <h1>axios library "trying to fetch using simple function(no differense)"</h1>
      <PersonsList/>
    </div>
  );
}

export default App;
