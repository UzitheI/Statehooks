import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Profile from './components/Profile.jsx'
import Spinach from './components/Spinach.jsx'
import Popeye from './components/Popeye.jsx'
import DefaultProfile from './components/DefaultProfile.jsx'

const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
  },
  {
    path:"Profile",
    element:<Profile/>,
    children:[
      {index:true, element:<DefaultProfile/>},
      {path:"Spinach",element:<Spinach/>},
      {path:"Popeye",element:<Popeye/>}
    ],
  },

]
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
