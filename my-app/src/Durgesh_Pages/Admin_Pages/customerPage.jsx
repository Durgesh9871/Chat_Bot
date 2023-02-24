import { Box , Heading, Text } from '@chakra-ui/react'
import React from 'react'
import {Sidebar} from "../Admin_Components/SliderAdmin"

const CustomerPage = () => {
  return (
    <Box>
       <Sidebar />
       
       {/*  Customer Page Started from here --------- */}
       <Box background="#171923" height="100vh">

        {/*  Main box of customer  */}
         <Box width="81%" border="1px red" height="100vh" marginLeft="auto" >
         <Heading color="#fff">Customers</Heading>

         </Box>

       </Box>
    </Box>
  )
}

export  {CustomerPage}
