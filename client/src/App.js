import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import RegisterForm from './components/RegisterForm';
import LinkButton from './components/LinkButton';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App container">
      <header className="App-header">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" href="#">Connexion</a>
        </li>
      </ul>
      </header>
      <RegisterForm/>
      <LinkButton/>
    </div>
  );
}

export default App;
