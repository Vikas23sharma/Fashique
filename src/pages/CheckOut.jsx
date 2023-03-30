import { Box, Center, Container, HStack, Spacer, Stack, Text, Image } from '@chakra-ui/react'
import React from 'react'

const CheckOut = () => {
    return (
        <Container maxW={"100%"}>
            <Center>
                <Box width={["100%", "80%", "80%", "60%"]} p="5">
                    <HStack>
                        <Box><Text fontSize={["md", "3xl"]} fontWeight="bolder">FASHIQUE</Text></Box>
                        <Spacer />
                        <Box><Text fontSize={["sm", "2xl"]} fontWeight="bolder" color={"#484848"}>CHECKOUT</Text></Box>
                        <Spacer />
                        <Box><Image src="https://careeracademy.ie/wp-content/uploads/2020/11/Secure-Payment-Icon.png" alt="secure" width={"100%"} height="3.3vh" /></Box>
                    </HStack>
                </Box>
            </Center>
            <Center>
                <Box width={["100%", "90%", "80%", "60%"]} p="5">
                    <Stack direction={["column", "column", "column", "row"]}>
                        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            w={["100%", "100%", "100%", "800px"]} minH={["10vh", "10vh", "10vh", "10vh"]} mt="0"
                        >
                        </Box>
                        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            w={["100%", "100%", "100%", "400px"]} minH={["10vh", "10vh", "10vh", "10vh"]}
                        >
                        </Box>
                    </Stack>
                </Box>
            </Center>
        </Container>
    )
}

export default CheckOut