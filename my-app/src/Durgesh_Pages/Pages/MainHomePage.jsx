import { Box, Button, Heading, Img , Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Mainhomepage.css"

const MainHomePage = () => {


  const ImageBox = [
    {
      image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_bottoms_V2?$a8$" ,
      text:"The most versatile pants & shorts"
    },
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_tops_V2?$a8$" ,
    text:"The season's best shirts & tees"},
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230222_hp_rain_V2?$a8$" ,
    text:"Don't let the weather keep you inside"
  }
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
            <Box border="2px  red" height="auto" display="flex" justifyContent="space-evenly" p="0px"  >

              {
                ImageBox.length > 0 && ImageBox.map((item)=>{
                  return (
                    <Box border="2px  red" width="30%" textAlign="center">
                      <Img src={item.image} width="100%"></Img>
                      <Text fontWeight="600" color="#343333" fontSize="19px" mt="4px">{item.text}</Text>
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
