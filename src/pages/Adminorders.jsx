import React from 'react'
import { Box,Flex} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import "../Style/Admindashboard.css"


const Adminorders = () => {
  return (
    <Box>
    <Navbar/>
    <Flex className='dashboardcont' justifyContent={"space-evenly"} >
    <Box  className='sidebarcont'>
    <Adminsidebar/>
    </Box>
    <Box  className='adminpagedashboardbox'>
      {/* write code here */}
      orders on the website will be displayed here
    </Box>
  </Flex>
  </Box>
  )
}

export default Adminorders
