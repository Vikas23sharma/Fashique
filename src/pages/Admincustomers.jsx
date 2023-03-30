import React from 'react'
import { Box,Flex} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'

const Admincustomers = () => {
  return (
    <Box>
    <Navbar/>
    <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
    <Box  w={"18%"}>
    <Adminsidebar/>
    </Box>
    <Box  w={"82%"}>
      {/* write code here */}
      signed up customers will be displayed here
    </Box>
  </Flex>
  </Box>
  )
}

export default Admincustomers
