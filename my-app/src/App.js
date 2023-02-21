import React from 'react';
import { ChakraProvider, Box, Text, Link, VStack, Code, Grid, theme, } from '@chakra-ui/react';
import { MainHomePage } from './Durgesh_Pages/MainHomePage';
import { AllRoutes } from './Routes/Routes';



function App() {
  return (
     <div className='App'>
          <AllRoutes />
     </div>
     
     
  );
}

export default App;
