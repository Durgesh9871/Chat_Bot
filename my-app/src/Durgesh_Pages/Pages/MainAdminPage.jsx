import React, { useEffect } from 'react'
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
   <Box backgroundColor="" border="2px   red" height="100vh">
   <Sidebar />
     
   <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px red" height="auto" marginLeft="auto" color="#fff" >
         {/* Cart- 100      
          users - [ududu ] */}
          {/* orderOverall - [ product-123 , id-jdbhdh  , price 2]  */}
      
     <Chart type="pie" width="450px" height="400px" series={[32,56,54,44 ,70]} options ={{
      title:{text:"Active User Data"},

      noData:{text:"Empty"} ,
      
      labels:['mayh' ,'june' ,"july" ,'aut' ,"sep"]
     }}>

     </Chart>

   </Box>

   </Box>

     
    </>
  )
}

export  {MainAdminPage}
