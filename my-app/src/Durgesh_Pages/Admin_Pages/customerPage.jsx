import { Box , Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr , Image} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import {Sidebar} from "../Admin_Components/SliderAdmin"
import {shallowEqual, useDispatch , useSelector} from "react-redux"
import { getCustomerData } from '../../Redux/Customer_Reducer/action'

const CustomerPage = () => {
   
  const dispatch = useDispatch() 

  const {customerData ,isLoadind,isError} = useSelector((state) => {
    return {
      customerData: state.CustomerReducer.customerData ,
      isLoadind:state.CustomerReducer.isLoadind ,
      isError :state.CustomerReducer.isError ,
    }
},shallowEqual)   
 
useEffect(()=>{
   dispatch(getCustomerData)
},[])

const userImage ={
  female:"https://cdn-icons-png.flaticon.com/128/6997/6997662.png" , 
  male:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOnyqrxK4zSTIzWLbCQSBMxYgT2B4U0jv6JMJ-Aezj-kkKqSl7GShdy8jPY0HowqY6KibmsWomG6k&usqp=CAU&ec=48600112" ,
}
// console.log(customerData)

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

      {customerData.length > 0 && customerData.map((item,i)=>{
        return (
          <Tr key={i}>
          <Td>      
            <Image src={userImage.female} width="35px" borderRadius="100%" border="2px solid white" />
        </Td>
            <Td>{item.firstNamee}</Td>
          <Td >{item.lastName}</Td>
          <Td>{item.email}</Td>
          <Td>{item.mobile}</Td>
          <Td >{item.active}</Td>
        </Tr>
        )
      })}
    
    </Tbody>
   
  </Table>
</TableContainer>
         </Box>

       </Box>
    </Box>
  )
}

export  {CustomerPage}
