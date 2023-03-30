import React from 'react'
import { Box,Flex} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'

const Adminorders = () => {
  return (
    <Box>
    <Navbar/>
    <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
    <Box  w={"18%"}>
    <Adminsidebar/>
    </Box>
    <Box  w={"82%"}>
      {/* write code here */}
      orders on the website will be displayed here
    </Box>
  </Flex>
  </Box>
  )
}

export default Adminorders