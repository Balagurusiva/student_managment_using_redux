import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudent } from '../redux/actions'

const StudentList = () => {
    const dispatch = useDispatch()
    const studentList = useSelector(state => state.studentList)
    
    const handleDeleteStudent =(email)=>{
     dispatch(deleteStudent(email))
         
    }
    return (
        <div className='m-10 w-[100%] h-[600px]'>
            <table className=' table-auto p-4 border-2  w-[85%] '>
                <thead >
                    <tr className='border-b '>
                        <th className='p-1'>Name</th>
                        <th>Course</th>
                        <th>Placed</th>
                    </tr>
                </thead>
                <tbody>
                    {studentList.map((student) => (
                     
                        <tr className=' text-center w-[100%]'>
                            <td className='p-2'>{student.Name}</td>
                            <td>{student.Course}</td>
                            <td>{student.Placed}</td>
                            <td>
                                <Link
                                   className='table_btn edit_btn mr-2'
                                   to={`/edit/${student.EMail}`}
                                    >
                                        Edit</Link>
                                <button 
                                className='table_btn delete_btn'
                                onClick={()=>handleDeleteStudent(student.EMail)}
                                >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default StudentList