import { Box, Button, Heading, Img , Text , Image} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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

   const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1247 },
      items: 4,
      slidesToSlide: 4 // optional, default to 1.
    },
     laptop: {
      breakpoint: { max: 1246, min: 1025 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 723 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 723, min: 364 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 363, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  }
  const getData = [
    {  
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/track-pant/w/g/n/36-rjo0086-red-tape-original-imaghxbg9hu5vdqu.jpeg?q=70" 
    } ,
    {
    "mainImage":"https://rukminim1.flixcart.com/image/832/832/l0igvww0/shoe/j/x/z/7-brd-678-7-birde-blue-original-imagca7bcj6p99gw.jpeg?q=70"
    } ,
    { 
    
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/p/c/5/-original-imaghrbyty4ggzcb.jpeg?q=70"
    } ,
    {
    mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/c/k/k/gm1251-43-good-minar-black-original-imaft34ej4zx2z63-bb.jpeg?q=70"
    } ,
    {
      mainImage:"https://rukminim1.flixcart.com/image/832/832/xif0q/shoe/j/h/9/10-rso246-red-tape-grey-original-imagk5jyfezgkvqm.jpeg?q=70"
    } ,
     
    
    {
    mainImage:"https://rukminim1.flixcart.com/image/832/832/l0pm3680/sock/z/6/i/free-3-ad-203-adidas-original-imagcfzzeseawymf.jpeg?q=70"
    },
    {
    
    mainImage:"https://rukminim1.flixcart.com/image/832/832/kh2b4i80-0/sock/w/7/g/free-sm-htb-navy-sport-original-imafx5yzm8uj48yv.jpeg?q=70"
    } ,
    {
    mainImage:"https://rukminim1.flixcart.com/image/128/128/l3ahpjk0/track-pant/l/e/o/l-av104stripe-navy-l-grey-avolt-original-imagegfcgjvggzgf.jpeg?q=70"
    } ,
    {
    
    mainImage:"https://rukminim1.flixcart.com/image/832/832/km57hjk0/track-pant/g/z/9/l-trackpant9015-vitaan-original-imagf4dhrzfenqgt.jpeg?q=70"
    } ,
    {
    mainImage:"https://rukminim1.flixcart.com/image/832/832/kl9rssw0/track-pant/p/u/f/l-bml-202-beko-original-imagyfnvc9vgta6p.jpeg?q=70"
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

             <Box border="2px  red" height="auto" display="flex" justifyContent="space-evenly" flexDirection={{base:"column", sm: "row", md: "row", lg: "row",xl: "row",'2xl': "row"}} p="0px"  mb="40px" >

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


{/*  React carousel starts from here ----------------------------------- */}


      <Box>
        <Text textAlign="center" fontWeight="600" fontSize="25px" mb="30px"><u>Fashion Gallery</u></Text> 
          
        <Box ml={{base:"2px", sm: "20px", md: "20px", lg: "20px",xl: "20px",'2xl': "20px"}} >
     <Carousel responsive={responsive} > 
    
     {getData.length > 0 && getData.map((item , i)=>{
       return (
        <div className='image' key={i}>
       <Image className='img' src={item.mainImage} alt={item.categories} boxSize={{base:"300px", sm: "300px", md: "300px", lg: "300px",xl: "300px",'2xl': "300px"}}  shadow="2xl" cursor="pointer" />
       </div>
          )
     })}
    
 
   </Carousel>
     </Box>
      </Box>



         </Box>
     
    </Box>
  )
}

export  {MainHomePage}
