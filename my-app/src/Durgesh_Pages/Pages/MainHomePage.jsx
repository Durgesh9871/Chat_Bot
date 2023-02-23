import { Box, Button, Img } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Mainhomepage.css"

const MainHomePage = () => {
  return (
    <Box>
      {/* NavBar  ------- */}
      <Box border="2px solid red" width="100%" height="10vh" display="flex" justifyContent="space-evenly" >
     <Link to="/"> <Box>Home Page</Box> </Link>
     <Link to="/adminPage"> <Box>Admin Page</Box> </Link>
      </Box> 

      {/*  Main Code started from here ---------------------- */}
         
         <Box >
            <Box id='mainImageNav'>
              <Button color="#4C4C4C" border="1px solid #4C4C4C" borderRadius="4px" p="0px 25px" position="absolute" bottom={{base:"3%", sm: "4%", md: "8%", lg: "8%",xl: "45px",'2xl': "45px"}} left={{base:"10%", sm: "8.4%", md: "5.5%", lg: "5.5%",xl: "85px",'2xl': "85px"}}>SHOP MEN</Button>
            </Box>
          
          {/*  After MAIN IMAGE HEADING ----------------- */}
            <Box>
              <Heading>Spring Adventures Are Calling!</Heading>
              <Text>Outfit yourself with tech-enhanced essentials built for superior
performance in unpredictable conditions.</Text>
            </Box>

         </Box>
     
    </Box>
  )
}

export  {MainHomePage}
