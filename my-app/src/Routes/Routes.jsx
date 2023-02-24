
import React from 'react'
import {Routes , Route} from "react-router-dom"
import { CustomerPage } from '../Durgesh_Pages/Admin_Pages/customerPage'
import { DeletePage } from '../Durgesh_Pages/Admin_Pages/DeletePage'
import { MainAdminPage } from '../Durgesh_Pages/Pages/MainAdminPage'
import { MainHomePage } from '../Durgesh_Pages/Pages/MainHomePage'


const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainHomePage />}></Route>
      <Route path="/adminPage" element={<MainAdminPage />}></Route>
      <Route path="/customerPageAdmin" element={<CustomerPage />}></Route>
      <Route path="/deltePageAdmin" element={<DeletePage />}></Route>

    </Routes>
  )
}


export  {AllRoutes}
