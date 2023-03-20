import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import Pie from './Pie'
import Navbar from './Navbar'
import Demo from './Component'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Navbar/>
      <div className='grid grid-cols-2   gap-8 p-8 ' >
      
      <Demo />
      <App />
     
      

      </div>
      <Pie/>
 
  </React.StrictMode>,
)
