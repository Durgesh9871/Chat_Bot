import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {Sidebar} from "../Admin_Components/SliderAdmin"
import { getCustomerData } from '../../Redux/Customer_Reducer/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Chart from "react-apexcharts"

const MainAdminPage = () => {

  const dispatch = useDispatch() 

  const {customerData ,isLoadind,isError} = useSelector((state) => {
    return {
      customerData: state.CustomerReducer.customerData ,
      isLoadind:state.CustomerReducer.isLoadind ,
      isError :state.CustomerReducer.isError ,
    }
},shallowEqual )   
 
useEffect(()=>{
   dispatch(getCustomerData)
},[])

  return (
    <>

  {/*  Main Admin Page Started from here ---------- */}
   <Box backgroundColor="#171923" border="2px   red" height="100vh">
   <Sidebar />
     
   <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px red" height="auto" marginLeft="auto" color="#fff" >
         {/* Cart- 100      
          users - [ududu ] */}
          {/* orderOverall - [ product-123 , id-jdbhdh  , price 2]  */}
      


   </Box>

   </Box>

     
    </>
  )
}

export  {MainAdminPage}
