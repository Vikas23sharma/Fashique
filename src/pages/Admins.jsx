import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Admindashboard from '../components/Admindashboard'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import "../Style/Admindashboard.css"


const Admin = () => {
  return (
    <Box>
      <Navbar/>
      <Flex className='dashboardcont'  justifyContent={"space-evenly"} >
      <Box className='sidebarcont' >
      <Adminsidebar/>
      </Box>
      <Box className='adminpagedashboardbox' >
        <Admindashboard/>
        
      </Box>
    </Flex>
    </Box>
  )
}

export default Admin