import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const MainAdminPage = () => {
  return (
    <div>
       <Box border="2px solid red" width="100%" height="10vh" display="flex" justifyContent="space-evenly" >
     <Link to="/"> <Box>Home Page</Box> </Link>
     <Link to="/adminPage"> <Box>Admin Page</Box> </Link>
      </Box>
      hello world 
    </div>
  )
}

export  {MainAdminPage}
