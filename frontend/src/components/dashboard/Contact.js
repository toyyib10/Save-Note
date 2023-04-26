import React from 'react'
import {Link} from "react-router-dom"

const Contact = () => {
  return (
    <>
      <div className='d-flex'>
        <div className='col-2 d-flex flex-column align-items-center border justify-content-center pt-4' style={{height:"100vh"}}>
          <div className='rounded-circle bg-primary mb-2' style={{height:"70px",width:"70px"}}>
          </div>
          <div className='mb-3 text-center'>
            @john
            <p>John Doe</p>
          </div>
          <div className='mt-3'>
            <ul type="none">
              <li className='mb-3'>
                <Link className='nav-link fs-3' to="/dashboard">Dashboard</Link>
              </li>
              <li className='mb-3'>
                <Link className='nav-link fs-3' to="/dashboard/contacts">Contact</Link>
              </li>
              <li className='mb-3'>
                <Link className='nav-link fs-3'>Events</Link>
              </li>
              <li className='mb-3'>
                <Link className='nav-link fs-3'>Budget</Link>
              </li>
              <li className='mb-3'>
                <Link className='nav-link fs-3'>Note</Link>
              </li>
              <li className='mb-3'>
                <Link className='nav-link fs-3'>Settings</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-10 px-4 pt-4">
          <div className='w-100 d-flex justify-content-between mt-2'>
            <div className='bg-primary p-3 text-white fs-2 rounded-4'>
              Contact
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <h2>Saved contacts</h2>
              <div className='bg-primary rounded-circle fs-5 d-flex justify-content-center align-items-center text-white ms-2' style={{height:"50px", width:"50px"}}>5</div>
            </div>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-3 rounded-2 shadow-sm fs-5'>
            <p>Umar</p>
            <p>Ayo</p>
            <p>ayoumar@gmail.com</p>
            <p>08010004567</p>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{ height: "40px", width: "40px" }}>Edit</button>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{height:"40px",width:"40px"}}>Del</button>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-3 rounded-2 shadow-sm fs-5'>
            <p>Dele</p>
            <p>Mahmumdu</p>
            <p>mahmumdu2@gml.com</p>
            <p>08010004877</p>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{ height: "40px", width: "40px" }}>Edit</button>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{height:"40px",width:"40px"}}>Del</button>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-3 rounded-2 shadow-sm fs-5'>
            <p>Babagia</p>
            <p>Solomon</p>
            <p>solomonb@gmail.com</p>
            <p>08033004567</p>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{ height: "40px", width: "40px" }}>Edit</button>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{height:"40px",width:"40px"}}>Del</button>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-3 rounded-2 shadow-sm fs-5'>
            <p>yekeen</p>
            <p>toyyib</p>
            <p>toyiyir@gmail.com</p>
            <p>08010003467</p>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{ height: "40px", width: "40px" }}>Edit</button>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{height:"40px",width:"40px"}}>Del</button>
          </div>
          <div className='w-100 mt-4 bg-light d-flex justify-content-between align-items-center p-3 rounded-2 shadow-sm fs-5'>
            <p>Umar</p>
            <p>Ayo</p>
            <p>ayoumar@gmail.com</p>
            <p>09100004567</p>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{ height: "40px", width: "40px" }}>Edit</button>
            <button className='btn btn-primary rounded-circle d-flex align-items-center justify-content-center shadow-sm' style={{height:"40px",width:"40px"}}>Del</button>
          </div>
        </div>
      </div>
      <button className='btn btn-primary rounded-circle add p-0'>
        <svg style={{height:"100%", width:"100%"}} className="m-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="white" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-3h3.025q.425 0 .7-.288Q17 12.425 17 12t-.288-.713Q16.425 11 16 11h-3V7.975q0-.425-.287-.7Q12.425 7 12 7t-.712.287Q11 7.575 11 8v3H7.975q-.425 0-.7.287Q7 11.575 7 12t.287.712Q7.575 13 8 13h3v3.025q0 .425.288.7q.287.275.712.275Zm0 5q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
      </button>
    </>
  )
}

export default Contact