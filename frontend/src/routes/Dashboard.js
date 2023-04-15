import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from "../components/dashboard/Main";
import Settings from "../components/dashboard/Settings";
import Note from "../components/dashboard/Note";
import Budget from "../components/dashboard/Budget";
import Contact from "../components/dashboard/Contact";
import Event from "../components/dashboard/Event";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/note' element={<Note />} />
        <Route path='/event' element={<Event />} />
        <Route path='/budget' element={<Budget />} />
      </Routes>
    </>
  )
}

export default Dashboard