import React ,{useEffect} from 'react'
import { Box,Flex,Button,Stack} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import { getProductsshoe } from '../Redux/AdminProduct/action'
import Productcard from '../components/Productcard'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

export const AdminProductShoe = () => {
    // const [searchParams]=useSearchParams()
    const dispatch=useDispatch()
    // const location = useLocation()
    const {products} = useSelector((store)=>store.AdminProduct)
  
    let obj = {
      params:{
        category: "shoes" ,
        
      }
    }
  
    useEffect(()=>{
      dispatch(getProductsshoe(obj))
    },[])
    return (
    <Box>
       
    <Navbar/>
    <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
    <Box  w={"18%"}>
    <Adminsidebar/>
    </Box>
    <Box  w={"82%"} display={"grid"} gridTemplateColumns={"repeat(4,1fr)"} gap={"10px"} padding={"1%"}>
      {/* write code here */}
      {/* Products of Men Category will be displayed here with edit and delete button  */}
       {products.length>0 && products.map((el)=>{
        return <Box key={el.id} >
          <Stack height={"500px"}>
          <Productcard  {...el} />
          </Stack>
            
          <Flex justifyContent={"space-between"} padding={"1%"} marginTop={"1%"}>
            <Button color={"green"} marginRight={"20px"}><Link to ={`/admin-edit/${el.id}`}>Edit</Link></Button>
            <Button color={"red"} >Delete</Button>
          </Flex>
          </Box>
      })} 
    </Box>
  </Flex>
  </Box>
    )
}
