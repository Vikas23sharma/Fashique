import React from 'react'
import { Box, Button, Flex,Heading,Input } from '@chakra-ui/react'
import Adminsidebar from '../components/Adminsidebar'
import { Navbar } from './Navbar'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'



const AdminAddProductMen = () => {
    return (
        <Box>
            <Navbar />
            <Flex justifyContent={"space-evenly"} marginTop={"8%"}>
                <Box w={"18%"}>
                    <Adminsidebar />
                </Box>
                <Box textAlign={"center"} w={"82%"}>
                    {/* write code here */}
                    {/* Products will be added to the men's category from here */}
                    <Heading color={"#2d2d2d"} marginBottom="2%">ADD PRODUCT</Heading>
                    <Box padding={"3%"} w={"50%"}  margin="2% auto" boxShadow= "rgba(0, 0, 0, 0.24) 0px 3px 8px">
                        <FormControl isRequired>
                            <FormLabel>Image</FormLabel>
                            <Input placeholder='Enter Image URL' />
                            <FormLabel>Title</FormLabel>
                            <Input placeholder='Enter Product Title' />
                            <FormLabel>Brand </FormLabel>
                            <Input placeholder='Enter Product Brand' />
                            <FormLabel>Discount</FormLabel>
                            <Input type={"number"} placeholder='Enter Discount' />
                            <FormLabel>Gender</FormLabel>
                            <Input placeholder='Enter Gender' />
                            <FormLabel>Style</FormLabel>
                            <Input placeholder='Enter Product Style' />
                            <FormLabel>Size</FormLabel>
                            <Input placeholder='Enter Product Size' />
                            <FormLabel>Price</FormLabel>
                            <Input type={"number"} placeholder='Enter Product Price' />
                            <FormLabel>Category</FormLabel>
                            <Input placeholder='Enter Product Category' />
                            <Button backgroundColor={"#2d2d2d"} color="white" marginTop={"3%"} type={"submit"}>ADD PRODUCT</Button>
                        </FormControl>
                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default AdminAddProductMen
