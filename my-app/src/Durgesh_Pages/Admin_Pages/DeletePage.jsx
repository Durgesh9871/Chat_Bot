import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { getDataProduct } from '../../Redux/Laptop_reducer/action'
import { Sidebar } from '../Admin_Components/SliderAdmin'
import {Search} from "../ComponentsSearchbar/Search"





const DeletePage = () => {


  return (
    <Box>
       <Sidebar />
       <Box background="#171923" height="auto">

       {/*  Delete Page Started from here ---------------------- */}
       <Box width="81%" border="1px red" height="auto" marginLeft="auto" >
            

       <Box >
             <Search />
      </Box>
        

       </Box>
       {/* Delete box end --------- */}

      </Box>
    </Box>
  )
}

export  {DeletePage}
