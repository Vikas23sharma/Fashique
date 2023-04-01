// import React,{useState,useEffect} from 'react'
// import { Box, Button, Flex,Heading,Input } from '@chakra-ui/react'
// import Adminsidebar from '../components/Adminsidebar'
// import { Navbar } from './Navbar'
// import {
//     FormControl,
//     FormLabel,
//     FormErrorMessage,
//     FormHelperText,
// } from '@chakra-ui/react'
// import { useParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { editProduct } from '../Redux/AdminProduct/action'



// const AdminEditProduct = () => {
//   const {id}=useParams()
//    const [data,setData]=useState("")
//    const [success,setSuccess]=useState(false)

//    const product=useSelector((store)=>store.AdminProduct.products)
//    const dispatch=useDispatch()
   
//     const handleChange=(e)=>{
//         const {name,value} = e.target
//         setData(prev=>{
//             return{...prev,[name]:value}
//         })
//     }

//     const handleEdit=(e)=>{
//         e.preventDefault()
//         //console.log(data)
//         dispatch(editProduct(data,id)).then(()=>{
//             setSuccess(true)
//         })
//     }

//    useEffect(()=>{
//      const data=product.find((el)=>el.id==id)
//     //console.log(data)
//     setData(data)
//    },[])

//     return (
//         <Box>
//             <Navbar />
//             <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
//                 <Box w={"18%"}>
//                     <Adminsidebar />
//                 </Box>
//                 <Box textAlign={"center"} w={"82%"}>
//                     {/* write code here */}
//                     {/* Products will be added to the men's category from here */}
//                     <Heading color={"#2d2d2d"} marginBottom="2%">EDIT PRODUCT:{id}</Heading>
//                     <Box padding={"3%"} w={"50%"}  margin="2% auto" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
//                       <form onSubmit={handleEdit}>
//                         <FormControl isRequired>
//                             <FormLabel>Image</FormLabel>
//                             <Input type="text" value={product.image} onChange={(e)=>{handleChange(e)}} name="image" placeholder='Enter Image URL' />
//                             <FormLabel>Title</FormLabel>
//                             <Input type="text" value={product.title} onChange={(e)=>{handleChange(e)}} name="title" placeholder='Enter Product Title' />
//                             <FormLabel>Brand </FormLabel>
//                             <Input type="text" value={product.brand} onChange={(e)=>{handleChange(e)}} name="brand" placeholder='Enter Product Brand' />
//                             <FormLabel>Discount</FormLabel>
//                             <Input type={"number"} value={product.discount} onChange={(e)=>{handleChange(e)}} name="discount" placeholder='Enter Discount' />
//                             <FormLabel>Gender</FormLabel>
//                             <Input type="text" value={product.gender} onChange={(e)=>{handleChange(e)}} name="gender"  placeholder='Enter Gender' />
//                             <FormLabel>Style</FormLabel>
//                             <Input type="text" value={product.style} onChange={(e)=>{handleChange(e)}} name="style" placeholder='Enter Product Style' />
//                             <FormLabel>Size</FormLabel>
//                             <Input type="text" value={product.size} onChange={(e)=>{handleChange(e)}} name="size" placeholder='Enter Product Size' />
//                             <FormLabel>Price</FormLabel>
//                             <Input type="number"  value={product.price} onChange={(e)=>{handleChange(e)}} name="price" placeholder='Enter Product Price' />
//                             <FormLabel>Category</FormLabel>
//                             <Input type="text" value={product.category} onChange={(e)=>{handleChange(e)}} name="category" placeholder='Enter Product Category' />
//                             <Button backgroundColor={"#2d2d2d"} color="white" marginTop={"3%"} type={"submit"}>ADD PRODUCT</Button>
//                         </FormControl>
//                         </form>  
//                     </Box>
//                 </Box>
//             </Flex>
//         </Box>
//     )
// }

// export default AdminEditProduct
