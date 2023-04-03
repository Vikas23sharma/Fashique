import React,{useEffect} from 'react'
import { Box,Flex,SimpleGrid,Stack} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'

import { useDispatch, useSelector } from 'react-redux'
import { getOrder, getUser } from '../Redux/AdminProduct/action'
//import { AdminUserCard } from '../components/AdminUserCard'
import { AdminOrderCard } from '../components/AdminOrderCard'
import { AdminUserCard } from '../components/AdminUserCard'
import { useSearchParams } from 'react-router-dom'

import "../Style/Admindashboard.css"



const Adminorders = () => {
   const [searchParams]=useSearchParams()
   const dispatch=useDispatch()
   // const location = useLocation()
   const {products} = useSelector((store)=>store.AdminProduct)
 
   let obj = {
     params:{
       category: searchParams.getAll("orders") ,
       
     }
   }
 
   useEffect(()=>{
     dispatch(getOrder(obj))
   },[])

  return (
    <Box>
    <Navbar/>
    <Flex className='dashboardcont' justifyContent={"space-evenly"} >
    <Box  className='sidebarcont'>
    <Adminsidebar/>
    </Box>

    
    

    <Box  className='adminpagedashboardbox'>

      {/* write code here */}
      {/* orders on the website will be displayed here */}
      
      <SimpleGrid className='usercontainer'>
      {products.length>0 && products.map((el)=>{
        return <Box className='adminordercardcontainer' key={el.id} boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" paddingBottom={"10px"} >
          <Stack height={"250px"} paddingLeft={"20%"} paddingTop={"3%"}>
          <AdminOrderCard {...el} />
          </Stack>
          
          </Box>
      })} 
        </SimpleGrid>  
    </Box>
  </Flex>
  </Box>
  )
}

export default Adminorders
