import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editStudent } from '../redux/actions'
import {useParams} from 'react-router-dom'
import {Navigate} from 'react-router-dom'



const EditStudent = () => {
   const param = useParams()
   const dispatch = useDispatch()
   const email = param.email 
   
   const studentList = useSelector((state) => state.studentList)
   const selectedStudent = studentList.filter((student) => student.EMail === email)[0]
   const [student, setStudent] = useState({...selectedStudent})
   const [nav, setNav]= useState(false)

   const handleEditStudent =() =>{
           if(student.Name.trim() !== ''){
            console.log(student.Course)
            dispatch(editStudent(email, student))
            setNav(true)
           }
   }
  
 

    return (
     

        <div className='flex justify-center flex-col items-center w-[100%] '>
            <p className='text-[30px]'>Edit Student Details</p>
            <div className=' p-4 student_form gap-5'>
                <div className='flex flex-col gap-3'>
                    <div className='input_area'>
                        <label >Name : </label>
                        <input type="text" value={student.Name} onChange={(e) => { setStudent((prev) => ({ ...prev, Name: e.target.value })) }} />
                    </div>

                    <div className="input_area">
                        <label >Course : </label> 
                        <input type="text" value={student.Course} onChange={(e) => { setStudent((prev) => ({ ...prev, Course: e.target.value })) }} />
                    </div>

                    <div className="input_area">
                        <label >Course Fees : </label>
                        <input type="text" value={student.Course_fees} onChange={(e) => { setStudent((prev) => ({ ...prev, Course_fees: e.target.value })) }} />
                    </div>
                    <div className="input_area">
                        <label >Paid Fees : </label>
                        <input type="text" value={student.Paid_fees} onChange={(e) => { setStudent((prev) => ({ ...prev, Paid_fees: e.target.value })) }} />
                    </div>
                    <div className="input_area">
                        <label >Fresher : </label>
                        <input type="text" value={student.Fresher} onChange={(e) => { setStudent((prev) => ({ ...prev, Fresher: e.target.value })) }} />
                    </div>


                </div>
                <div className='flex flex-col gap-3'>
                    <div className='input_area'>
                        <label >Phone Number: </label>
                        <input type="text" value={student.Phone_number} onChange={(e) => { setStudent((prev) => ({ ...prev, Phone_number: e.target.value })) }} />
                    </div>

                    <div className="input_area">
                        <label >EMail : </label>
                        <input type="text" value={student.EMail} onChange={(e) => { setStudent((prev) => ({ ...prev, EMail: e.target.value })) }} />
                    </div>

                    <div className="input_area">
                        <label >Duriation: </label>
                        <input type="text" value={student.Duriation} onChange={(e) => { setStudent((prev) => ({ ...prev, Duriation: e.target.value })) }} />
                    </div>

                    <div className="input_area">
                        <label >Experice : </label>
                        <input type="text" value={student.Experience} onChange={(e) => { setStudent((prev) => ({ ...prev, Experience: e.target.value })) }} />
                    </div>

                    <div className="input_area">
                        <label >Placed : </label>
                        <input type="text" value={student.Placed} onChange={(e) => { setStudent((prev) => ({ ...prev, Placed: e.target.value })) }} />
                    </div>
                </div>

            </div>

            <button
            className='form_submit'
            onClick={handleEditStudent}
            >submit</button>
                {nav? <Navigate to='/' /> : <></>}
        </div>

     

    )
}

export default EditStudent