import React from 'react'
import formik from  "formik"
import * as yup from "yup"
import { Link } from "react-router-dom"

const Signup = () => {
  return (
    <>
      <div className='h-100'>
        <div className='col-7 p-3 d-flex align-items-center justify-content-center flex-column'>
          <h1 className='text-primary mb-5'>Create an account</h1>
          <form className='col-12 d-flex align-items-center justify-content-center flex-column'>
            <div className="form-floating mb-4 col-10">
              <input type="text" name='firstName' className="form-control" id="floatingInput" placeholder="First Name" />
              <label for="floatingInput">First Name</label>
            </div>
            <div className="form-floating mb-4 col-10">
              <input type="text" className="form-control" name='lastName' id="floatingInput" placeholder="Last Name" />
              <label for="floatingInput">Last Name</label>
            </div>
            <div className="form-floating mb-4 col-10">
              <input type="email" className="form-control" name='email' id="floatingInput" placeholder="Email Address" />
              <label for="floatingInput">Email Address</label>
            </div>
            <div className="form-floating mb-4 col-10">
              <input type="password" className="form-control" name='password' id="floatingInput" placeholder="Password" />
              <label for="floatingInput">Password</label>
            </div>
            <div className='mt-5'>
              <button className='btn border-primary btn-white px-3 fs-4'> Create an account</button>
            </div>
          </form>
          <p className='mt-3'>Already have account? <Link to="/auth/signin">Signin</Link></p>
        </div>
        <div className='col-5'>

        </div>
      </div>
    </>
  )
}

export default Signup