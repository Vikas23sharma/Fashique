import React from 'react'
import { Box,Flex} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import "../Style/Admindashboard.css"


const Admincustomers = () => {
  return (
    <Box>
    <Navbar/>
    <Flex className='dashboardcont' justifyContent={"space-evenly"} >
    <Box className='sidebarcont' >
    <Adminsidebar/>
    </Box>
    <Box className='adminpagedashboardbox' >
      {/* write code here */}
      signed up customers will be displayed here
    </Box>
  </Flex>
  </Box>
  )
}

export default Admincustomers
