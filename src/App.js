import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [res,setRes] = useState();

  function getAllStudents() {
    axios.get('/api/student/getAllStudents')
      .then(response => {
        console.log(response)
        console.log(response.data.response[0].name)
        setRes(response.data.response)
        response.data.response.map(i=>{
          return(
            <h2>{i.name}</h2>
          );
        })
      })
      .catch(errors => {
        console.log(errors)
      })
  }

  return (
    <div className="App">
      <h1 className="mern_title">Full Stack Mern Application</h1>
      <div className="container">
      <button class=" btn btn-primary" type="button" onClick={getAllStudents}>Get All Students</button>
      </div>
      {res?.map((i,index)=>{
        return <p>{index+1}.{i.name}</p>
      })}
    </div>
  );
}

export default App;
