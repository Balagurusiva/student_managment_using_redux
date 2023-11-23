import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { Provider } from 'react-redux'
import StudentStore from './redux/store'
 


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
     
            <Provider store={StudentStore}>
                <App />
            </Provider>
     
    </React.StrictMode>,
)
