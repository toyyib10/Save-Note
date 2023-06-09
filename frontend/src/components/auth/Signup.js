import React from 'react'
import { useFormik } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom"

const Signup = () => {

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber:"",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validationSchema: yup.object({
      firstName: yup.string().required("This field is required"),
      lastName: yup.string().required("This field is required"),
      phoneNumber: yup.string().required("This field is required"),
      email: yup
        .string()
        .required("This field is required")
        .email("This field must be an email"),
      password: yup
        .string()
        .required("This field is required")
        .min(6, "This field must be greater than 6")
        .max(15, "This field must be less than 15"),
    }),
  });

  return (
    <>
      <div className='h-100 d-flex'>
        <div className='col-7 p-3 d-flex flex-column align-items-center justify-content-center '>
          <h1 className='text-primary mb-5'>Create an account</h1>
          <form className='col-12 d-flex align-items-center justify-content-center flex-column' onSubmit={formik.handleSubmit}>
            <div className="form-floating mb-3 col-10">
              <input type="text" name='firstName' className="form-control" id="floatingInput" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
              <label for="floatingInput">First Name</label>
            </div>
            <div className="form-floating mb-3 col-10">
              <input type="text" className="form-control" name='lastName' id="floatingInput" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
              <label for="floatingInput">Last Name</label>
            </div>
            <div className="form-floating mb-3 col-10">
              <input type="text" className="form-control" name='phoneNumber' id="floatingInput" placeholder="Phone Number" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
              <label for="floatingInput">Phone Number</label>
            </div>
            <div className="form-floating mb-3 col-10">
              <input type="email" className="form-control" name='email' id="floatingInput" placeholder="Email Address" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
              <label for="floatingInput">Email Address</label>
            </div>
            <div className="form-floating mb-3 col-10">
              <input type="password" className="form-control" name='password' id="floatingInput" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} required/>
              <label for="floatingInput">Password</label>
            </div>
            <div className='mt-4'>
              <button className='btn border-primary shadow btn-white px-3 fs-4' type='submit'> Create an account</button>
            </div>
          </form>
          <p className='mt-3'>Already have account? <Link to="/auth/signin">Signin</Link></p>
        </div>
        <div className='col-5'>
          <img style={{height:"100vh"}} width="100%" src="https://images.pexels.com/photos/4065892/pexels-photo-4065892.jpeg" alt=''/>
        </div>
      </div>
    </>
  )
}

export default Signup