import React, { useEffect, useRef, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import {Sidebar} from "../Admin_Components/SliderAdmin"
import { getCustomerData } from '../../Redux/Customer_Reducer/action'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import Chart from "react-apexcharts"

const MainAdminPage = () => {
  let activeCount = 0 


  const dispatch = useDispatch() 

  const {customerData ,isLoadind,isError} = useSelector((state) => {
    return {
      customerData: state.CustomerReducer.customerData ,
      isLoadind:state.CustomerReducer.isLoadind ,
      isError :state.CustomerReducer.isError ,
    }
},shallowEqual )   
 
if(customerData.length > 0 ){
  for(var i=0 ; i<customerData.length ; i++){
        if(customerData[i].active == "true"){
          activeCount++
        }
  }
}



useEffect(()=>{
   dispatch(getCustomerData)
},[])

  return (
    <>

  {/*  Main Admin Page Started from here ---------- */}
   <Box backgroundColor="#171923" border="2px   red" height="100%">
   <Sidebar />
     
   <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px  red" height="auto" marginLeft="auto" p="50px 50px" display="flex"  >
         {/* Cart- 100      
          users - [ududu ] */}
          {/* orderOverall - [ product-123 , id-jdbhdh  , price 2]  */}
      
     <Chart type="pie" width="450px"  height="400px"  series={[customerData.length-activeCount , activeCount]}  options ={{
      title:{text:"Active User Data"} ,
    

      noData:{text:"Empty"} ,

      labels:["Not Active User" , "Active User"]
     }}>

     </Chart>

    {/*  SECond chart ------- */}
     
    <Chart type="bar" width="450px"  height="400px" options={{ 
       xaxis:{
              categories:["Active-user" , "Not-Active" ]
            }}}

            series={[{
                name: 'series-1',
                data: [ customerData.length-activeCount ],
            },{
                name: 'series-2',
                data: [activeCount ,]
            }
          ]}

              
    >   </Chart>


   </Box>

   </Box>

     
    </>
  )
}

export  {MainAdminPage}
