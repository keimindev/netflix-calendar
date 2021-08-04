import React from 'react';
import './App.css';
import logo from './netflix-logo.png';
import Calendar  from './Calendar';



function App() {
  return (
    <>
    <div className="container">
    <div className="App">
      <div className="logo">
        <img src={logo}/>
      </div>
      <div clasName="calendar-box">
      <Calendar/>
      </div>
      <footer style={{
        marginTop: 50,
        textAlign: "center",
        color: "white"
      }}>&copy; {new Date().getFullYear()} Copyright MIN / Netflix-Calendar </footer>
    </div>
    </div>
    </> 
  );
}

export default App;
