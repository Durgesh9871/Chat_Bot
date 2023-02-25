import { Box, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react'
import React from 'react'
import { Sidebar } from '../Admin_Components/SliderAdmin'


const initialState = {

}

const reducer = (state , action)=>{
     switch(action.type){
        default:
            return state 
     }
}


const AddProduct = () => {





  return (
    <Box>
        <Sidebar />
        <Box background="#171923" height="100%">

          {/* ADD PRODUCT FORM STARTED FROM HERE --------------------- */}
          <Box width={{ base: "100%", sm: "100%", md: "100%", lg: "100%", xl: "81%", '2xl': "81%" }} border="1px   red" height="auto" marginLeft="auto"  p="2%" >
          <Heading color="#fff" fontWeight="500">Add Products</Heading>

           {/*  Form Starts from here ------ */}
              <Box width="40%" border="1px  white" margin="auto" shadow="2xl" padding="30px">
        <form>
           <FormControl isRequired  color="#fff" mt="10px">
         <FormLabel>Title</FormLabel>
         <Input placeholder='Title of Product' />
          </FormControl>
           
          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Category</FormLabel>
         <Input placeholder='Category of Product' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Brand</FormLabel>
         <Input placeholder='Brand of Product' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Description</FormLabel>
         <Input placeholder='Description about the Product' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Color</FormLabel>
         <Input placeholder='Color of Product' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Actual Price</FormLabel>
         <Input placeholder='Real Price of Product ' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Price</FormLabel>
         <Input placeholder='Price after Discount' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Image</FormLabel>
         <Input placeholder='Main Image of Product ' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Side Image</FormLabel>
         <Input placeholder='Side Image of Product' />
          </FormControl>

          <FormControl isRequired color="#fff" mt="20px" >
         <FormLabel>Back Image</FormLabel>
         <Input placeholder='Back Image of Product ' />
          </FormControl>

          </form>

          </Box>

      </Box>
        </Box>

    </Box>
  )
}

export  {AddProduct}
