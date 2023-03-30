import React from 'react'
import { Box,Flex} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'

const Adminproductsmen = () => {
  return (
    <Box>
    <Navbar/>
    <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
    <Box  w={"18%"}>
    <Adminsidebar/>
    </Box>
    <Box  w={"82%"}>
      {/* write code here */}
      Products of Men Category will be displayed here with edit and delete button
    </Box>
  </Flex>
  </Box>
  )
}

export default Adminproductsmen
