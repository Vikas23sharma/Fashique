import { Box, HStack, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const CheckoutProductsCard = (items) => {
    console.log(items)
    const { image, title, category, price, size } = items
    return (
        <Box w="100%">
            <SimpleGrid columns={[1, 2]} spacing={[5,5,5,1]} minChildWidth="100px">
                <Box>
                    <Image src={image} alt={category} width={["200px", "300px", "300px", "200px"]} height={["20vh", "30vh", "30vh", "15vh"]} pl="5" pb="2" />
                </Box>
                <Box p={[1, 2]}>
                    <Text color={"gray"} fontSize={["15", "20", "20", "15"]} fontWeight="bold"> &#36;{price}.00</Text>
                    <Text fontSize={["10", "20", "20", "10"]} color={"#525252"} w="80%"> {title}</Text>
                    <Text color={"gray"} fontWeight="bold" fontSize={["10", "20", "20", "12"]}>Size :{size}</Text>
                    <Text color={"gray"} fontSize={["10", "20", "20", "12"]} fontWeight="bold">Qty:{1} </Text>
                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default CheckoutProductsCard
