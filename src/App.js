import React, {Component} from 'react'  ;
import logo from './logo.svg';
import './App.css';


function Wellcome(){
    return(
        <h3>Xin chào, đây là website của Mạnh Tuấn</h3>
    );
}

function Img(props){
    return(
        <img src={props.src} alt ={props.alt} width="500px"/>
    );
}

function TellMe(){
  return(
    <div>Siêu cấp vippro</div>
  );
}

function App() {
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
        <h2 className="display-4 text-warning">Nguyễn Mạnh Tuấn - React</h2>
        <p className="alert alert-warning">Wellcome to Summorner Rift's</p>
        <Wellcome/>
        <Img src="https://admin.academyhcm.edu.vn/fileman/Uploads/tb_ITIHCM_KhoaHoc/14/a2a2543d_1502_4fac_9336_8f9627510105.png" alt="Học React nha bồ tèo"/>
      </header>
    </div>
  );
}

export default App;
