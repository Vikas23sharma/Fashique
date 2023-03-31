import React from 'react'

import { Box,Flex,Button} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'

export const AdminEditProduct = () => {
  return (
    <Box>
     

  <Navbar/>
    <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
    <Box  w={"18%"}>
    <Adminsidebar/>
    </Box>


    <Box  w={"82%"} display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gap={"10px"}>
      {/* write code here */}
      {/* <h1>sen</h1>
      Products of Men Category will be displayed here with edit and delete button */}
      
    
    </Box>
  </Flex>
  </Box>
  
  )
}

