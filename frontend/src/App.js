import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from './routes/Auth';
import Dashboard from './routes/Dashboard';
import Notfound from './routes/Notfound';

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
