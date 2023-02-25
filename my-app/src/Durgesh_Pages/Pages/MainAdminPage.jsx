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
     
   <Box width="81%" border="1px red" height="auto" marginLeft="auto" color="#fff" >
         {/* Cart- 100      
          users - [ududu ] */}
          {/* orderOverall - [ product-123 , id-jdbhdh  , price 2]  */}

   </Box>

   </Box>

     
    </div>
  )
}

export  {MainAdminPage}
