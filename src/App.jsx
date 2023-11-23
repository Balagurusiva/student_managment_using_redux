import React from 'react'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateStudent from './componets/CreateStudent'
import { Link } from 'react-router-dom'
import Home from './componets/Home'
import EditStudent from './componets/EditStudent'
import Details from './componets/Details'


const App = () => {
    const studentList = useSelector((state) => state.studentList)

    return (
        <div className='mx-[30px]'>
            <Router>

                <div className=' header flex items-center   justify-between  text-3xl border-b pb-[10px] my-[30px]'>
                    <Link to='/' className='text-red-600 font-bold'>Credo systemz</Link>
                </div>
                

                <Routes>
                    <Route path='/create' element={<CreateStudent />} />
                    <Route path='/edit/:email' element={<EditStudent />} />
                    <Route path = '/detail/:id' element ={<Details />} />
                    <Route path='/' element = {<Home />} />
                    
                </Routes>
            </Router>
        </div>

    )
}


export default App