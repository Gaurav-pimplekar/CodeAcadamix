import React from 'react'
import Navbar from '../components/Navbar'
import CourseCard from '../components/CourseCard'
import { FaCss3Alt } from 'react-icons/fa'

function Home() {
  return (
    <div>
      
      <div className='m-10'>
        <p className='text-3xl font-bold my-3'>Our Programs</p>
        <div className='flex flex-wrap gap-7'>
          <CourseCard icon={<FaCss3Alt size={150} color='blue' />} title="Learn CSS With CodeAcadamix" path="/csscourse" />
          <CourseCard icon={<FaCss3Alt size={150} color='blue' />} title="Learn JavaScript With CodeAcadamix" path="/jscourse" />
          <CourseCard icon={<FaCss3Alt size={150} color='blue' />} title="Learn DOM With CodeAcadamix" path="/domcourse" />
          <CourseCard icon={<FaCss3Alt size={150} color='blue' />} title="Learn HTML With CodeAcadamix" path="/htmlcourse" />
          {/* <CourseCard icon={<FaCss3Alt size={150} color='blue' />} title="Learn React JS With CodeAcadamix" path="/reactjscourse" />
          <CourseCard icon={<FaCss3Alt size={150} color='blue' />} title="Learn Node JS With CodeAcadamix" path="/nodejscourse" /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
