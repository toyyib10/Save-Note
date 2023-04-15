import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Signup from "../components/auth/Signup";
import Signin from "../components/auth/Signin";
import Verify from "../components/auth/Verify";
import Notfound from './Notfound';

const Auth = () => {
  return (
    <>
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/verify' element={<Verify />} />
        <Route path='/' element={<Navigate to="/auth/signin" />} />
        <Route path='/*' element={<Notfound />} />
      </Routes>
    </>
  )
}

export default Auth