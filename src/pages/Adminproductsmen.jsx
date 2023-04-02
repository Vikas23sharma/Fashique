import React,{useEffect} from 'react'
import {useSearchParams, useLocation} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { Box,Flex,Button,Stack,Toast, useToast, Center} from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import { DeleteProductMen, getProducts } from '../Redux/AdminProduct/action'
import Productcard from '../components/Productcard'
import {Link} from 'react-router-dom'
import "../Style/Admindashboard.css"



const Adminproductsmen = () => {
  const [searchParams]=useSearchParams()
  const dispatch=useDispatch()
   const location = useLocation()
  const {products} = useSelector((store)=>store.AdminProduct)

  let obj = {
    params:{
      gender:searchParams.getAll("men")
    }
}

const toast=useToast()

const handleDelete=(id)=>{
  dispatch(DeleteProductMen(id))
  return toast({
    title: 'Product Deleted Successfully!!!',
    description: `Total Number Of Products : ${products.length-1} `,
    status: 'success',
    duration: 5000,
    isClosable: true,
    position:'top'
  })
}

  useEffect(()=>{
    dispatch(getProducts(obj))
  },[location.search,products])

  return (
    <Box>
     
    <Navbar/>
    <Flex className='dashboardcont' justifyContent={"space-evenly"} >
    <Box className='sidebarcont' >
    <Adminsidebar/>
    </Box>
    <Box className='adminmenproduct' w={"82%"} display={"grid"} padding={"1%"}>
      {/* write code here */}
      {/* <h1>sen</h1>
      Products of Men Category will be displayed here with edit and delete button */}
      {products.length>0 && products.map((el)=>{
        return <Box key={el.id} boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" paddingBottom={"10px"} >
          <Center>
          <Box>
          <Stack height={"525px"}>
          <Productcard  {...el} />
          </Stack>
           <Flex justifyContent={"space-between"} padding={"1%"} marginTop={"1%"} w="100%">
          <Button color={"green"} marginRight={"20px"}><Link to ={`/admin-edit/${el.id}`}>Edit</Link></Button>
          <Button onClick={()=>handleDelete(el.id)} color={"red"} >Delete</Button>
          </Flex>
          </Box>
          </Center>
         
          </Box>
      })}
    </Box>
  </Flex>
  </Box>
  )
}

export default Adminproductsmen
