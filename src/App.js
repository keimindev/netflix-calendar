import React from 'react';
import './App.css';
import logo from './netflix-logo.png';
import Updates from './Event';


function App() {
  return (
    <>
    <div className="App">
      <div className="logo">
        <img src={logo}/>
      </div>
      <Updates/>
      <footer style={{
        marginTop: 50,
        textAlign: "center",
        color: "white"
      }}>&copy; {new Date().getFullYear()} Copyright MIN / Netflix-Calendar </footer>
    </div>
    </> 
  );
}

export default App;
