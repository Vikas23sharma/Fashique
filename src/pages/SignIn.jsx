import React, { useEffect, useState } from 'react'
import {
    FormControl, Center, Text, VStack, SimpleGrid,
    FormLabel, Input, Box, Button, Container, useToast
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc"
import { TiVendorApple } from 'react-icons/ti'
import { MdOutlineFacebook } from 'react-icons/md';
import { getUserDetails, login_in } from '../Redux/Login/action';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';



const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [forceUpdate, setForceUpdate] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const toast = useToast();
    const { isLoading } = useSelector(state => {
        return {
            isLoading: state.LoginReducer.isLoading
        }
    })


    const handleChange = (e) => {
        e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value)
    }
    let detail = JSON.parse(localStorage.getItem("UserDetails"))
    // console.log(detail, "Inside Sigin In page")
    function getDetails(email, password) {
        for (let i = 0; i < detail.length; i++) {
            if (detail[i].email === email && detail[i].password === password) {
                // tokens=detail[i].token
                toast({
                    title: "Login Successful",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
                localStorage.setItem("token", JSON.stringify(detail[i].token))
                let token = JSON.parse(localStorage.getItem("token"))

                // console.log("token",token)
                dispatch(login_in(token));
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 1000);
            } else if (detail[i].email === email && detail[i].password !== password) {
                toast({
                    title: "Login Failed",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
                setTimeout(() => {

                    window.location.reload();
                }, 2000);
            } else if (detail[i].email !== email && detail[i].password === password) {
                toast({
                    title: "Login Failed",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                    position: "top"
                });
                setTimeout(() => {

                    window.location.reload();
                }, 2000);
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

    return isLoading === true ? (<div style={{ display: "flex", height: "50vh", justifyContent: "center", alignItems: "center" }}>  <Loading /></div>) : (
        <Container w={["110%", "93%", "90%", "80%"]} margin={["auto", "auto"]} maxW="100%">
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
                                <Box><Center><Button width={"100%"}><span style={{ fontSize: "20px" }}><FcGoogle /></span> &nbsp; &nbsp;<Text fontSize={[15, 15, 10, 15]} >GOOGLE</Text></Button></Center></Box>

                                <Box><Center><Button width={"100%"} ><span style={{ fontSize: "20px" }}><TiVendorApple /></span> &nbsp; &nbsp;<Text fontSize={[15, 15, 10, 15]} >APPLE</Text></Button></Center></Box>

                                <Box><Center><Button width={"100%"}> <span style={{ fontSize: "20px" }}><MdOutlineFacebook /></span> &nbsp; &nbsp;<Text fontSize={[15, 15, 10, 13]} >FACEBOOK</Text></Button></Center></Box>
                            </SimpleGrid>


                        </VStack>
                    </Center>
                </Box>
            </Box>


        </Container>
    )
}

export default SignIn