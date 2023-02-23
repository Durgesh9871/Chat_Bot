import { Box, Button, Heading, Img , Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Mainhomepage.css"

const MainHomePage = () => {


  const ImageBox = [
    {
      image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_bottoms_V2?$a8$" ,
      text:"This men"
    },
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_bottoms_V2?$a8$" ,
    text:"This men"},
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_bottoms_V2?$a8$" ,
    text:"This men"}
  ]

  return (
    <Box>
      {/* NavBar  ------- */}
      <Box border="2px solid red" width="100%" height="10vh" display="flex" justifyContent="space-evenly" >
     <Link to="/"> <Box>Home Page</Box> </Link>
     <Link to="/adminPage"> <Box>Admin Page</Box> </Link>
      </Box> 

      {/*  Main Code started from here ---------------------- */}
         
         <Box height="200vh" border="2px solid red">
            <Box id='mainImageNav'>
              <Button color="#4C4C4C" border="1px solid #4C4C4C" borderRadius="4px" p="0px 25px" position="absolute" bottom={{base:"3%", sm: "4%", md: "8%", lg: "8%",xl: "45px",'2xl': "45px"}} left={{base:"10%", sm: "8.4%", md: "5.5%", lg: "5.5%",xl: "85px",'2xl': "85px"}}>SHOP MEN</Button>
            </Box>
          
          {/*  After MAIN IMAGE HEADING ----------------- */}
            <Box width={{base:"99%", sm: "95%", md: "75%", lg: "55%",xl: "36%",'2xl': "36%"}} border="2px  red" m="45px auto 25px auto" textAlign="center" >
              <Heading color="#333333">Spring Adventures Are Calling!</Heading>
              <Text color="#97857e">Outfit yourself with tech-enhanced essentials built for superior
performance in unpredictable conditions.</Text>
            </Box>

            {/*After heading Main Images -------------------- */}
            <Box border="2px solid red" height="400px" display="flex" justifyContent="space-between"  >

              {
                ImageBox.length > 0 && ImageBox.map((item)=>{
                  return (
                    <Box border="2px solid red" width="30%">
                      <Img src={item.image} width="100%"></Img>
                    </Box>
                  )
                })
              }

            </Box>

         </Box>
     
    </Box>
  )
}

export  {MainHomePage}
