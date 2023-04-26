import React from 'react'
import {Link} from "react-router-dom"

const Main = () => {
  return (
    <>
      <div className='d-flex'>
        <div className='col-2 d-flex flex-column align-items-center border justify-content-center pt-4' style={{height:"100vh"}}>
          <div className='rounded-circle bg-primary mb-2' style={{height:"80px",width:"80px"}}>

          </div>
          <div className='mb-3 text-center'>
            @john
            <p>John Doe</p>
          </div>
          <div className='mt-4'>
            <ul type="none">
              <li className='mb-4'>
                <Link className='nav-link fs-3'>Dashboard</Link>
              </li>
              <li className='mb-4'>
                <Link className='nav-link fs-3'>Contact</Link>
              </li>
              <li className='mb-4'>
                <Link className='nav-link fs-3'>Events</Link>
              </li>
              <li className='mb-4'>
                <Link className='nav-link fs-3'>Budget</Link>
              </li>
              <li className='mb-4'>
                <Link className='nav-link fs-3'>Note</Link>
              </li>
              <li className='mb-4'>
                <Link className='nav-link fs-3'>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-10 px-4 pt-4">
          <div className='w-100 d-flex justify-content-between mt-2'>
            <div className='bg-primary p-3 text-white fs-2 rounded-4'>
              Dashboard
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <h2>Notification</h2>
              <div className='bg-primary rounded-circle fs-5 text-center text-white ms-2' style={{height:"30px", width:"30px"}}>3</div>
            </div>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-4 rounded-2 shadow-sm fs-5'>
            <p className='p-0 m-0'>Ebook is next on your scale of preference</p>
            <Link className='nav-link'>View details</Link>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-4 rounded-2 shadow-sm fs-5'>
            <p className='p-0 m-0'>You have GNS 102 tomorrow</p>
            <Link className='nav-link'>View details</Link>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-4 rounded-2 shadow-sm fs-5'>
            <p className='p-0 m-0'>You have class note to review</p>
            <Link className='nav-link'>View details</Link>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Main