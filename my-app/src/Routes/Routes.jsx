
import React from 'react'
import {Routes , Route} from "react-router-dom"
import { MainAdminPage } from '../Durgesh_Pages/Pages/MainAdminPage'
import { MainHomePage } from '../Durgesh_Pages/Pages/MainHomePage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHomePage />}></Route>
      <Route path="/adminPage" element={<MainAdminPage />}></Route>
    </Routes>
  )
}


export  {AllRoutes}
