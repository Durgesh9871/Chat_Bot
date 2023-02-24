import { Box , Text } from '@chakra-ui/react'
import React from 'react'
import {Sidebar} from "../Admin_Components/SliderAdmin"

const CustomerPage = () => {
  return (
    <Box>
       <Sidebar />
       
       {/*  Customer Page Started from here --------- */}
       <Box background="#171923" height="100vh">
         <Box width="81%" border="1px red" height="100vh" marginLeft="auto" >
    <Text color="#fff">njdbhjd</Text>
         </Box>

       </Box>
    </Box>
  )
}

export  {CustomerPage}
