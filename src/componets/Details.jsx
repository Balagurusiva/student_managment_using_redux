import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editStudent } from '../redux/actions'
import {useParams} from 'react-router-dom'
import {Navigate} from 'react-router-dom'



const Details = () => {
   const param = useParams()
   const dispatch = useDispatch()
   const id = param.id
   console.log(id)
     
   const studentList = useSelector((state) => state.studentList)
   const selectedStudent = studentList.filter((student) => student.id == id)[0]
   console.log(selectedStudent)
   const [student, setStudent] = useState({...selectedStudent})
 

 
  
 

    return (
     

        <div className='flex justify-center flex-col items-center w-[100%] '>
            <p className='text-[30px]'>Student Detail</p>
            <div className=' p-4 student_form gap-5'>
                <div className='flex flex-col gap-3'>
                    <div className='input_area'>
                        <label >Name : </label>
                         <p>{student.Name}</p>
                    </div>

                    <div className="input_area">
                        <label >Course : </label> 
                         <p>{student.Course}</p>
                    </div>

                    <div className="input_area">
                        <label >Course Fees : </label>
                       <p>{student.Course_fees}</p>
                    </div>
                    <div className="input_area">
                        <label >Paid Fees : </label>
                         <p>{student.Paid_fees}</p>
                    </div>
                    <div className="input_area">
                        <label >Fresher : </label>
                         <p>{student.Fresher}</p>
                    </div>


                </div>
                <div className='flex flex-col gap-3'>
                    <div className='input_area'>
                        <label >Phone Number: </label>
                         <p>{student.Phone_number}</p>
                    </div>

                    <div className="input_area">
                        <label >EMail : </label>
                         <p>{student.EMail}</p>
                    </div>

                    <div className="input_area">
                        <label >Duriation: </label>
                         <p>{student.Duriation}</p>
                    </div>

                    <div className="input_area">
                        <label >Experice : </label>
                         <p>{student.Experience
}</p>
                    </div>

                    <div className="input_area">
                        <label >Placed : </label>
                         <p>{student.Placed}</p>
                    </div>
                </div>

            </div>

         
        </div>

     

    )
}

export default Details