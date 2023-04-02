import React,{useEffect} from 'react'
import { Box,Flex} from '@chakra-ui/react'
import { Button,Stack} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../Redux/AdminProduct/action'
//import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import { AdminUserCard } from '../components/AdminUserCard'
import { Link } from "react-router-dom";

const Admincustomers = () => {
    // const [searchParams]=useSearchParams()
    const dispatch=useDispatch()
    // const location = useLocation()
    const {products} = useSelector((store)=>store.AdminProduct)
  
    let obj = {
      params:{
        category: "users" ,
        
      }
    }
  
    useEffect(()=>{
      dispatch(getUser(obj))
    },[])
  return (
    <Box>
    <Navbar/>
    <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
    <Box  w={"18%"}  >
    <Adminsidebar/>
    </Box>
    <Box  w={"82%"} display={"grid"} gridTemplateColumns={"repeat(3,1fr)"} gap={"10px"} padding={"1%"}>
      {/* write code here  sen*/}
      {/* signed up customers will be displayed here */}
      {products.length>0 && products.map((el)=>{
        return <Box key={el.id} boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" paddingBottom={"10px"} >
          <Stack height={"200px"} paddingLeft={"25%"}>
          <AdminUserCard {...el} />
          </Stack>
          <Flex justifyContent={"space-between"} padding={"1%"} marginTop={"1%"}>
            <Button color={"green"} marginRight={"20px"} marginLeft={"25%"}>Details</Button>
            {/* <Button color={"red"} >Delete</Button> */}
          </Flex>
          </Box>
      })}   
    </Box>
  </Flex>
  </Box>
  )
}

export default Admincustomers
