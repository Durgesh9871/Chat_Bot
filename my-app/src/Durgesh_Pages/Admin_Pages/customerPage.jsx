import { Box , Text } from '@chakra-ui/react'
import React from 'react'
import {Sidebar} from "../Admin_Components/SliderAdmin"

const CustomerPage = () => {
  return (
    <Box>
       <Sidebar />
       
       {/*  Customer Page Started from here --------- */}
       <Box>
           <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae impedit harum porro iure temporibus possimus inventore! Illo eaque, sapiente quas dicta tempora, ducimus neque quia mollitia provident ex pariatur vitae?</Text>
       </Box>
    </Box>
  )
}

export  {CustomerPage}
