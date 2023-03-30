import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Admindashboard from '../components/Admindashboard'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'

const Admin = () => {
  return (
    <Box>
      <Navbar/>
      <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
      <Box  w={"18%"}>
      <Adminsidebar/>
      </Box>
      <Box  w={"82%"}>
        <Admindashboard/>
        
      </Box>
    </Flex>
    </Box>
  )
}

export default Admin