import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from './routes/Auth';
import Dashboard from './routes/Dashboard';
import Notfound from './routes/Notfound';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap"

function App() {
  return (
    <>
      <Routes>
        <Route path='/auth/*' element={<Auth />} />
        <Route path='/' element={<Navigate to="/auth/signin" />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        <Route path='/*' element={<Notfound/>} />
      </Routes>
    </>
  );
}

export default App;
