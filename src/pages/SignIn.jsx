import React from 'react'
import {
    FormControl, Center, Text, HStack, VStack, Spacer, Stack, SimpleGrid,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc"
import { TiVendorApple } from 'react-icons/ti'
import { MdOutlineFacebook } from 'react-icons/md';
const SignIn = () => {
    return (
        <div style={{ width: "80%", margin: "auto" }} maxW="100%">
            <Box p="10%" letterSpacing=".1em">
                <FormControl isRequired>
                    <Box pb="10%">
                        <FormLabel color="grey">EMAIL ADDRESS :</FormLabel>
                        <Input type='email' />
                    </Box>
                </FormControl>
                <FormControl isRequired>
                    <Box>
                        <FormLabel color="grey">PASSWORD :</FormLabel>
                        <Input type='email' />
                    </Box>
                </FormControl>
                <br />
                <FormControl mt={"5"}>
                    <Button type='submit' bg={"#2d2d2d"} color="white" width={"100%"} _hover={{
                        color: "black",
                        bg: "#edf2f7"
                    }}>
                        SIGN IN
                    </Button>
                </FormControl>
                <Center mt="10">
                    <Button variant={"ghost"} _hover={{ bg: "none" }}>Forgot password?</Button>
                </Center>
                <Box pt="15%" >
                    <Center>
                        <VStack >
                            <Box pb="5">
                                <Text fontWeight="bolder" fontSize={["sm","2xl"]}>OR SIGN IN WITH...</Text>
                            </Box>

                            <SimpleGrid columns={[1, null, 3]} gap="5" >
                                <Box><Button width={"100%"}><FcGoogle /> &nbsp; &nbsp;<Text>GOOGLE</Text></Button></Box>

                                <Box><Button width={"100%"}><TiVendorApple /> &nbsp; &nbsp;<Text>APPLE</Text></Button></Box>

                                <Box><Button> <MdOutlineFacebook /> &nbsp; &nbsp;<Text>FACEBOOK</Text></Button></Box>
                            </SimpleGrid>

                        </VStack>
                    </Center>
                </Box>
            </Box>


        </div>
    )
}

export default SignIn