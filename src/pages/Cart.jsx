import { Box, Button, Center, Image, Container, Divider, HStack, Select, Spacer, Stack, Text } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { RiInformationLine } from 'react-icons/ri';


const Cart = () => {
    return (
        <Container minW={"100%"}>
            <Center minW={"100%"}>
                <Navbar />
                <Box mt="18vh">
                    <Box width={["100%", "100%", "95%", "80%", "80%", "80%"]} margin={"auto"}>
                        <Stack direction={["column", "column", "column", "row", "row"]}>
                            <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                                w={["330px", "100%", "100%", "1600px", "700px"]}
                                h={"10vh"}
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <Box >
                                    <HStack >
                                        <Text fontSize={["md", "xl"]} fontWeight="550">MY BAG</Text>
                                        <Spacer />
                                        <Text fontSize={["sm", "sm"]} pl={["0", "40px", "50px", "160px"]} display={"flex"}>Items are reserved for 30 minutes</Text>

                                    </HStack>


                                </Box>
                            </Box>
                            <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                                w={["100%", "100%", "100%", "100%", "400px"]}
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