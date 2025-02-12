import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='flex justify-between items-center shadow w-full px-10 py-2'>
      <div className='flex justify-center items-center cursor-pointer' onClick={()=> navigate("/")}>
          <div className='bg-red-500 h-16 w-16 flex justify-center items-center rounded-full text-3xl font-bold text-white'>
            &lt;/&gt;
          </div>
          <p className='font-bold text-2xl'>CODE<span className='text-red-500'>ACADAMIX</span></p>
      </div>


      <ul className='flex gap-3'>
        <li className='cursor-pointer'>Courses</li>
        <li><Link>About</Link></li>
        <li><Link>Contact</Link></li>
        <li><Link>Login</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
