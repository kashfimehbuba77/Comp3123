import logo from './logo.svg';
import './App.css';
import React, {Fragment} from 'react';
import College from './components/college/college';
import Student from './components/student/student';
import StudentObj from './components/student/studentObj';
import Employee from './components/employee/employee';

function App() {

const containerStyle = {
    textAlign: "center",  
    margin: "0 auto",
  };

  let name = "Kashfi Mehbuba"
  const myStyle = { fontSize: 20} 
  const studObj = { 
    fnm: "Daniel", 
    lnm: "Orlov", 
    city: 'Toronto'
  }

  let studentId = "101474002"
  const idStyle = {fontSize: 25}

  return (
    <div style={containerStyle}>
       <img src={logo} alt="picture" style={{ width: 600, height: 600 }}  
/>
      <h1 style={ { fontSize: 50} }>Welcome to Fullstack Development 1</h1>
      <h2 style={{fontSize: 30}}>React JS Programming Week09 Lab Exercise</h2>
      <h2 style={idStyle}>{studentId}</h2>
      <h2 style={myStyle}>{name}</h2>

      < College />
      <Employee />
      
      <Student fnm="Daniel" lnm="Orlov" />
      <StudentObj stud={ { fnm: "Alisha", lnm: "Humagain", city: 'Allah e jane'}}/>
      <StudentObj stud={ studObj }/>
    </div>
  );
}

export default App;
