import { Box , Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React,{useEffect} from 'react'
import {Sidebar} from "../Admin_Components/SliderAdmin"
import {useDispatch , useSelector} from "react-redux"
import { getCustomerData } from '../../Redux/Customer_Reducer/action'

const CustomerPage = () => {
   
  const dispatch = useDispatch() 

  const {customerData ,isLoadind,isError} = useSelector((state) => {
    return {
      customerData: state.CustomerReducer.customerData ,
      isLoadind:state.CustomerReducer.isLoadind ,
      isError :state.CustomerReducer.isError ,
    }
})   
 
useEffect(()=>{
   dispatch(getCustomerData)
},[])

   

  return (
    <Box>
       <Sidebar />
       
       {/*  Customer Page Started from here --------- */}
       <Box background="#171923" height="100vh">

        {/*  Main box of customer  */}
         <Box width="81%" border="1px red" height="100vh" marginLeft="auto" >
         <Heading color="#fff" fontWeight="500">Customers</Heading>
             
             {/*  TABLE IS STARTED FROM HERE -------------------------- */}
             <TableContainer color="#fff">
  <Table variant='simple'>
    <TableCaption color="#fff" placement="top">Users Data </TableCaption>
    <Thead>
      <Tr>
        <Th>Photo</Th>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Email</Th>
        <Th>Phone</Th>
        <Th>Active User</Th>
      </Tr>
    </Thead>
    <Tbody>
        {/*  Loop starts from here ------------------- */}

      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td >30.48</Td>
      </Tr>
    
    </Tbody>
   
  </Table>
</TableContainer>
         </Box>

       </Box>
    </Box>
  )
}

export  {CustomerPage}
