import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import StudentList from './StudentList'
import NoStudent from './NoStudent'

const Home = () => {
    const studentList = useSelector((state) => state.studentList)

 
  return (
    <div className="flex flex-col ">

                     <div className='ml-auto mr-2 text-blue-300 font-bold'>
                        <Link to='/create'>Add a student</Link>
                     </div>
                     
                     <div>
                         <StudentList/>
                     </div>
                      
                </div>
  )
}

export default Home