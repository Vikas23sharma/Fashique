import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Flex, Heading, Input } from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { addProductMen, addProductMenToProduct } from '../Redux/AdminProduct/action';
import { useToast } from '@chakra-ui/react'
import "../Style/Admindashboard.css"


const initialState = {
    id: "",
    image: "",
    title: "",
    brand: "",
    discount: "",
    gender: "",
    style: "",
    size: "",
    price: "",
    category: "",
}

const AdminAddProductMen = () => {
    const [product, setProduct] = useState(initialState)
    const dispatch = useDispatch()
    const { id, image, title, brand, discount, gender, style, size, price, category } = product
    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target

        setProduct((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const toast = useToast()
    const { products } = useSelector((state) => state.AdminProduct)


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(product)
        dispatch(addProductMen(product))
        dispatch(addProductMenToProduct(product))
        setProduct(initialState)
        return toast({
            title: 'Product Added Successfully',
            description: `Total Number Of Products:${products.length+1}`,
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top'
        })
        //console.log("clicked")
    }
    return (
        <Box>
            <Navbar />
            <Flex className='addproductpagecontainer' justifyContent={"space-evenly"} >
                <Box w={"18%"}>
                    <Adminsidebar />
                </Box>
                <Box className='formcontainer' textAlign={"center"} w={"82%"}>
                    {/* write code here */}
                    {/* Products will be added to the men's category from here */}
                    <Heading color={"#2d2d2d"} marginBottom="2%">ADD PRODUCT</Heading>
                    <Box padding={"3%"} w={"50%"} margin="2% auto" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired >
                                <FormLabel>ID</FormLabel>
                                <Input type="number" value={product.id} onChange={(e) => { handleChange(e) }} name="id" placeholder='Enter ID' />
                                <FormLabel>Image</FormLabel>
                                <Input type="text" value={product.image} onChange={(e) => { handleChange(e) }} name="image" placeholder='Enter Image URL' />
                                <FormLabel>Title</FormLabel>
                                <Input type="text" value={product.title} onChange={(e) => { handleChange(e) }} name="title" placeholder='Enter Product Title' />
                                <FormLabel>Brand </FormLabel>
                                <Input type="text" value={product.brand} onChange={(e) => { handleChange(e) }} name="brand" placeholder='Enter Product Brand' />
                                <FormLabel>Discount</FormLabel>
                                <Input type={"number"} value={product.discount} onChange={(e) => { handleChange(e) }} name="discount" placeholder='Enter Discount' />
                                <FormLabel>Gender</FormLabel>
                                <Input type="text" value={product.gender} onChange={(e) => { handleChange(e) }} name="gender" placeholder='Enter Gender' />
                                <FormLabel>Style</FormLabel>
                                <Input type="text" value={product.style} onChange={(e) => { handleChange(e) }} name="style" placeholder='Enter Product Style' />
                                <FormLabel>Size</FormLabel>
                                <Input type="text" value={product.size} onChange={(e) => { handleChange(e) }} name="size" placeholder='Enter Product Size' />
                                <FormLabel>Price</FormLabel>
                                <Input type="number" value={product.price} onChange={(e) => { handleChange(e) }} name="price" placeholder='Enter Product Price' />
                                <FormLabel>Category</FormLabel>
                                <Input type="text" value={product.category} onChange={(e) => { handleChange(e) }} name="category" placeholder='Enter Product Category' />
                                <Button backgroundColor={"#2d2d2d"} color="white" marginTop={"3%"} type="submit">ADD PRODUCT</Button>
                            </FormControl>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default AdminAddProductMen
