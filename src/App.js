import React from 'react'
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Registro from './components/Registro/Registro';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route path="*" element={<Navigate to="/Login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </>

  )
}

export default App;
