import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addStudent } from '../redux/actions'
import { Navigate } from 'react-router-dom';

const CreateStudent = () => {
    const dispatch = useDispatch()
    const studentList = useSelector(state => state.studentList)
    const [nav, setNav]= useState(false)

    const [student, setStudent] = useState({
        Name: '',
        Course: '',
        Phone_number: '',
        EMail: '',
        Course_fees: '',
        Paid_fees: '',
        Duriation: '',
        Fresher: '',
        Experience: '',
        Placed: ''
    })


    const handleAddStudent = () => {
        if (student.Name.trim(' ').length !== 0) {
            dispatch(addStudent({...student,id:Date.now()}))
            setStudent({
                Name: '',
                Course: '',
                Phone_number: '',
                EMail: '',
                Course_fees: '',
                Paid_fees: '',
                Duriation: '',
                Fresher: '',
                Experience: '',
                Placed: ''
            })
             alert("student added successfully")
             setNav(true)
        }
         
    }

    return (

        <div className='flex justify-center flex-col items-center w-[100%] '>
            <p className='text-[30px]'>Student Creation</p>
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
                onClick={handleAddStudent}
            >submit</button> 
            {
                nav?<Navigate to='/ ' /> : <></>
            }
             
            

        </div>

    )
}

export default CreateStudent