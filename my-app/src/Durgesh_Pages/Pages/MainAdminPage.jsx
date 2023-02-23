import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {Sidebar} from "../Admin_Components/SliderAdmin"

const MainAdminPage = () => {
  return (
    <div>

  {/*  Main Admin Page Started from here ---------- */}
   <Box backgroundColor="" border="2px solid  red" height="100vh">

<Sidebar />

   </Box>

     
    </div>
  )
}

export  {MainAdminPage}
