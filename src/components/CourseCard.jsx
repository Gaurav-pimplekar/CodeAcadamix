import React from 'react'
import { Link } from 'react-router-dom'
import { FaCss3Alt } from "react-icons/fa";


function CourseCard({ icon, title,path }) {
  return (
    <div className='shadow max-w-72 p-5 rounded-xl border-1 border-gray-200'>
      <div className='flex justify-center'>
        {icon}
      </div>
      <p className='font-semibold text-2xl mb-3'>{title}</p>
      <Link to={path}>
        <p className='bg-red-500 w-fit py-2 px-4 rounded-lg text-white font-semibold'>Explore &gt;</p>
      </Link>
    </div>
  )
}

export default CourseCard
