import { Box, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector , useDispatch} from 'react-redux'
import { getDataProduct } from '../../Redux/Laptop_reducer/action'
import { Sidebar } from '../Admin_Components/SliderAdmin'
import { DisplayProductMainData } from '../Components/DisplayProductMainData'

const DeletePage = () => {


    const {isLaptopError ,isLaptopLoading,productArrayLaptop} = useSelector((state) => {
        return {
          isLaptopLoading: state.LaptopReducer.isLaptopLoading ,
          productArrayLaptop:state.LaptopReducer.productArrayLaptop ,
          isLaptopError :state.LaptopReducer.isLaptopError ,
        }
    })   
    const dispatch = useDispatch()
    useEffect(()=>{
         dispatch(getDataProduct)
    },[])

  return (
    <Box>
       <Sidebar />
       <Box background="#171923" height="100vh">

       {/*  Delete Page Started from here ---------------------- */}
       <Box width="81%" border="1px red" height="auto" marginLeft="auto" >
            

       <SimpleGrid columns={{base:1, sm: 1, md: 2, lg: 3,xl: 3,'2xl': 3,}} spacingY={10}  >

            {productArrayLaptop.length > 0 && productArrayLaptop.map((item)=>{
              return (
            <DisplayProductMainData key= {item.id} uniqueId={item.id}  id={item.id} src={item.Images} name={item.title} model={item.brand}    price={item.price}    review={item.rating}  realPrice={item.realPrice} isLaptopLoading={isLaptopLoading} mainImage={item.mainImage} />
            
              )
            })}

            
        
          </SimpleGrid>
        

       </Box>
       {/* Delete box end --------- */}

      </Box>
    </Box>
  )
}

export  {DeletePage}
