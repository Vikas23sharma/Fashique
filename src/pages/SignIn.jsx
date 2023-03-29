import React, { useEffect, useState } from 'react'
import {
    FormControl, Center, Text, HStack, VStack, Spacer, Stack, SimpleGrid,
    FormLabel, FormErrorMessage, FormHelperText, Input, Box, Button, Container
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc"
import { TiVendorApple } from 'react-icons/ti'
import { MdOutlineFacebook } from 'react-icons/md';
import { getUserDetails, login_in } from '../Redux/Login/action';
import { useDispatch, useSelector } from 'react-redux';



const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [forceUpdate, setForceUpdate] = useState(false)
    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value)
    }
    let detail = JSON.parse(localStorage.getItem("UserDetails"))
    // console.log(detail, "Inside Sigin In page")
    function getDetails(email, password) {
        for (let i = 0; i < detail.length; i++) {
            if (detail[i].email === email && detail[i].password === password) {
                // tokens=detail[i].token
                localStorage.setItem("token", JSON.stringify(detail[i].token))
                let token = JSON.parse(localStorage.getItem("token"))
                // console.log("token",token)
                dispatch(login_in(token))
            }
        }
    }
    const { token } = useSelector((state) => {
        // console.log(state)
        return {
            token: state.LoginReducer.token,
        }
    })
    useEffect(() => {
        console.log(token)
    }, [forceUpdate, token])

    // console.log(token)
    // console.log(detail, "1")

    useEffect(() => {
        dispatch(getUserDetails())
        // console.log("its rendering")
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault()
        getDetails(email, password)
        setEmail("")
        setPassword("")
        setTimeout(() => {
            setForceUpdate(!forceUpdate)
        }, 1000);

    }

    return (
        <Container style={{ width: "80%", margin: "auto" }} maxW="100%">
            <Box p="10%" letterSpacing=".1em">
                <form onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <Box pb="10%">
                            <FormLabel color="grey">EMAIL ADDRESS :</FormLabel>
                            <Input type='email' name='email' placeholder='enter your mail id' autoComplete='off' onChange={handleChange} />
                        </Box>
                    </FormControl>
                    <FormControl isRequired>
                        <Box>
                            <FormLabel color="grey">PASSWORD :</FormLabel>
                            <Input type='password' name='password' placeholder='enter your password' autoComplete='off' onChange={handleChange} />
                        </Box>
                    </FormControl>
                    <br />
                    <FormControl mt={"5"}>
                        <Button type='submit' bg={"#2d2d2d"} color="white" width={"100%"} _hover={{
                            color: "black",
                            bg: "#edf2f7"
                        }} >
                            SIGN IN
                        </Button>
                    </FormControl>
                </form>


                <Center mt="10">
                    <Button variant={"ghost"} _hover={{ bg: "none" }}>Forgot password?</Button>
                </Center>
                <Box pt="15%" >
                    <Center>
                        <VStack >
                            <Box pb="5">
                                <Text fontWeight="bolder" fontSize={["sm", "2xl"]}>OR SIGN IN WITH...</Text>
                            </Box>

                            <SimpleGrid columns={[1, null, 3]} gap="5" >
                                <Box><Center><Button width={["100%", "100%", "100%", "100%"]}><FcGoogle /> &nbsp; &nbsp;<Text fontSize={[8, 8, 10, 15]} >GOOGLE</Text></Button></Center></Box>

                                <Box><Center><Button width={["100%", "100%", "100%", "100%"]}><TiVendorApple /> &nbsp; &nbsp;<Text fontSize={[8, 8, 10, 15]} >APPLE</Text></Button></Center></Box>

                                <Box><Center><Button> <MdOutlineFacebook /> &nbsp; &nbsp;<Text fontSize={[8, 8, 10, 15]} >FACEBOOK</Text></Button></Center></Box>
                            </SimpleGrid>

                        </VStack>
                    </Center>
                </Box>
            </Box>


        </Container>
    )
}

export default SignIn