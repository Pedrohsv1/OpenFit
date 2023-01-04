import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from './App'
import initMyFirebase from './firebase-config'
import { Home } from './Home'
import LogoutPage from './logout'
import ProfilePage from './profile'

import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-icons/font/bootstrap-icons.css"

initMyFirebase();

import("bootstrap/dist/js/bootstrap")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Profile" element={<ProfilePage/>}/>
        <Route path="/logout" element={<LogoutPage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
