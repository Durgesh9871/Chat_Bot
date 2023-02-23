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

  const ImageDetails = [
    {
      image:"https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_flyline_V1?$jpg12$&scl=1" ,
      text:"BC Flyline Adaptive Ski Kit" ,
      para:"Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards."
    },
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/230131_hp_mrk3box_high-fives_V1?$jpg12$&scl=1" ,
    text:"High Fives Foundation",
    para:"Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards."
  },
    {image:"https://eddiebauer.scene7.com/is/image/EBContent/221227_hp_mrkt3box_TT_V1?$jpg12$&scl=1" ,
    text:"Abundance Abounds!",
    para:"Designing technical gear and apparel for all adventure seekers is a pledge we take seriously, and that’s why we worked with Eddie Bauer guide & professional sit-ski athlete Trevor Kennison to build a one-of-a-kind kit that would make the slopes more accessible for adaptive skiers. We’re proud to announce that this amazing gear won Product of the year at the 4th annual Outdoor Retailer Innovation Awards."

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
         
         <Box height="600vh" border="2px solid red">
            <Box id='mainImageNav'>
              <Button color="#4C4C4C" border="1px solid #4C4C4C" borderRadius="2px" p="0px 25px" position="absolute" bottom={{base:"3%", sm: "4%", md: "8%", lg: "8%",xl: "45px",'2xl': "45px"}} left={{base:"10%", sm: "8.4%", md: "5.5%", lg: "5.5%",xl: "85px",'2xl': "85px"}}>SHOP MEN</Button>
            </Box>
          
          {/*  After MAIN IMAGE HEADING ----------------- */}
            <Box width={{base:"99%", sm: "95%", md: "75%", lg: "55%",xl: "36%",'2xl': "36%"}} border="2px  red" m="45px auto 25px auto" textAlign="center" >
              <Heading color="#333333">Spring Adventures Are Calling!</Heading>
              <Text color="#97857e">Outfit yourself with tech-enhanced essentials built for superior
performance in unpredictable conditions.</Text>
            </Box>

            {/*After heading Main Images -------------------- */}
            <Box border="2px  red" height="auto" display="flex" justifyContent="space-evenly" flexDirection={{base:"column", sm: "row", md: "row", lg: "row",xl: "row",'2xl': "row"}} p="0px"   >

              {
                ImageBox.length > 0 && ImageBox.map((item,id)=>{
                  return (
                    <Box id="mainImageBoxThree" border="2px  red"  textAlign="center" key={id}>
                      <Img src={item.image} width="100%"></Img>
                      <Text fontWeight="600" color="#343333" fontSize="15px" mt="4px">{item.text}</Text>
                    </Box>
                  )
                })
              }

            </Box>

            {/*  Sale Box started from here ------------------- */} 

            <Box  border="2px   red" height="auto"  textAlign="center" m="4%" >
              <Img src='https://github.com/Durgesh9871/ReadmeImages/blob/main/Fashion_Gallery/Sale_fashion_Galeery.png?raw=true' m="auto"></Img>
              <Button id="mensButtonHover" color="white" mt="14px" border="1px solid #333333"  backgroundColor="#333333" borderRadius="1px" p="0px 27px" >SHOP MEN</Button>
            </Box>
             

             {/* After sale box images----------- */}

             <Box border="2px  red" height="auto" display="flex" justifyContent="space-evenly" flexDirection={{base:"column", sm: "row", md: "row", lg: "row",xl: "row",'2xl': "row"}} p="0px"   >

{
  ImageDetails.length > 0 && ImageDetails.map((item,id)=>{
    return (
      <Box id="mainImageBoxThree" border="2px  red"  textAlign="center" key={id}>
        <Img src={item.image} width="100%"></Img>
        <Text fontWeight="600" color="#343333" fontSize="15px" mt="4px">{item.text}</Text>
        <Text fontWeight="400" color="#b2b4b7" fontSize="14px" mt="4px">{item.para}</Text>

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
