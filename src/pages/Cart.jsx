import { Box, Button, Center, Image, Container, Divider, HStack, Select, Spacer, Stack, Text } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { RiInformationLine } from 'react-icons/ri';
import CartProductCard from './CartProductCard';


const Cart = () => {
    const cartproducts = [
        {
            "id": 101,
            "image": "https://images.asos-media.com/products/topman-crochet-shirt-in-green-and-ecru/204385540-2?$n_320w$&wid=317&fit=constrain",
            "title": " Topman crochet shirt in green and ecru",
            "brand": "Topman",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 65,
            "category": "T-shirt"
        },
        {
            "id": 102,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/201602748-2?$n_320w$&wid=317&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 30,
            "gender": "men",
            "style": "half sleeve",
            "size": "M",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 103,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-white/201613574-2?$n_320w$&wid=317&fit=constrain  ",
            "title": "Topman classic t-shirt in white",
            "brand": "Topman",
            "discount": 45,
            "gender": "men",
            "style": "half sleeve",
            "size": "L",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 104,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/203515869-1-black?$n_240w$&wid=168&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 60,
            "gender": "men",
            "style": "half sleeve",
            "size": "XL",
            "price": 15,
            "category": "T-shirt"
        },
        {
            "id": 105,
            "image": "https://images.asos-media.com/products/new-look-crew-neck-t-shirt-in-blue/203829520-1-midblue?$n_240w$&wid=168&fit=constrain",
            "title": "New Look crew neck t-shirt in blue",
            "brand": "New Look",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 17,
            "category": "T-shirt"
        },
        {
            "id": 10,
            "image": "https://images.asos-media.com/products/topman-crochet-shirt-in-green-and-ecru/204385540-2?$n_320w$&wid=317&fit=constrain",
            "title": " Topman crochet shirt in green and ecru",
            "brand": "Topman",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 65,
            "category": "T-shirt"
        },
        {
            "id": 12,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/201602748-2?$n_320w$&wid=317&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 30,
            "gender": "men",
            "style": "half sleeve",
            "size": "M",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 13,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-white/201613574-2?$n_320w$&wid=317&fit=constrain  ",
            "title": "Topman classic t-shirt in white",
            "brand": "Topman",
            "discount": 45,
            "gender": "men",
            "style": "half sleeve",
            "size": "L",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 14,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/203515869-1-black?$n_240w$&wid=168&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 60,
            "gender": "men",
            "style": "half sleeve",
            "size": "XL",
            "price": 15,
            "category": "T-shirt"
        },
        {
            "id": 15,
            "image": "https://images.asos-media.com/products/new-look-crew-neck-t-shirt-in-blue/203829520-1-midblue?$n_240w$&wid=168&fit=constrain",
            "title": "New Look crew neck t-shirt in blue",
            "brand": "New Look",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 17,
            "category": "T-shirt"
        }
    ]



    return (
        <Container minW={"100%"}>
            <Center minW={"100%"}>
                <Navbar />
                <Box mt="18vh">
                    <Box width={["100%", "100%", "100%", "80%", "80%", "100%"]} margin={"auto"}>
                        <Stack direction={["column", "column", "column", "row", "row"]}>
                            <Box>
                                <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                                    w={["330px", "100%", "600px", "800px", "600px", "600px"]}
                                    h={"10vh"}
                                    display="flex"
                                    justifyContent="center"
                                    alignItems="center"
                                >
                                    <Box >
                                        <HStack p={[5, 5, 5, 5, 5]}>
                                            <Text fontSize={["md", "xl"]} fontWeight="550">MY BAG</Text>
                                            <Spacer />
                                            <Text fontSize={["sm", "sm"]} pl={["4", "40px", "50px", "160px"]}
                                                display={"flex"}>Items are reserved for 30 minutes</Text>

                                        </HStack>


                                    </Box>
                                </Box>
                                <Box
                                    w={["330px", "100%", "600px", "800px", "600px", "600px"]}
                                    h="80vh"
                                    overflowY={"scroll"}
                                    // border={"1px solid black"}
                                    mt="3"
                                    css={{
                                        '&::-webkit-scrollbar': {
                                            display: 'none',
                                        },
                                        '-ms-overflow-style': 'none',
                                        scrollbarWidth: 'none',
                                    }}
                                >
                                    {
                                        cartproducts.map((items) => (
                                            <CartProductCard {...items} key={items.id} />
                                        ))
                                    }
                                </Box>
                            </Box>


                            <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                                w={["100%", "100%", "600px", "800px", "600px", "400px"]}
                                h="50vh"
                                p="5"
                            >
                                <Box>
                                    <Text p="5" letterSpacing={"2px"} fontWeight="550"> TOTAL</Text>
                                    <Divider borderColor={"black"} />
                                    <Box>
                                        <HStack> <Text p={5} fontWeight="520"> Sub-total :</Text> <Spacer />  </HStack>
                                        <HStack> <Text pl="5" fontWeight="520">Delivery </Text> <Spacer /> <RiInformationLine size={20} /></HStack>
                                    </Box>
                                    <Box>
                                        <Select pl="5" variant='flushed' placeholder='Standard Delivery (Free)' focusBorderColor="black" >
                                            <option value="stdel">Standard Delivery (Free)</option>
                                            <option value="35">Express Delivery $35</option>
                                        </Select>

                                        <Box pt="10" pr={5} pl={5}><Button bgColor={"#018849"} color={"white"} _hover={{ color: "none" }} width={"100%"}>CheckOut</Button></Box>
                                    </Box>
                                    <Box pt="5">
                                        <Text letterSpacing={"2px"} fontWeight="550">WE ACCEPT:</Text>
                                        <Box pt="2" width={"80%"}> <Image src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="cards" width={"100%"} h="3vh" /></Box>
                                        <Text pt="3" fontSize={"sm"} color="grey">Got a discount code? Add it in the next step.</Text>
                                    </Box>

                                </Box>
                            </Box>

                        </Stack>

                    </Box>
                </Box>
            </Center >

        </Container >
    )
}

export default Cart