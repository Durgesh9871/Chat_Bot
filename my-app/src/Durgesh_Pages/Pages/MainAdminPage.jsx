import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {Sidebar} from "../Admin_Components/SliderAdmin"

const MainAdminPage = () => {
  return (
    <div>

  {/*  Main Admin Page Started from here ---------- */}
   <Box backgroundColor="#171923" border="2px   red" height="100vh">
   <Sidebar />
     
   <Box width="81%" border="1px red" height="auto" marginLeft="auto" >
    jsj
   </Box>

   </Box>

     
    </div>
  )
}

export  {MainAdminPage}
