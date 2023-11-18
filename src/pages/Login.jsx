import React, { useState, useEffect } from 'react'
import { Container, Center, Box, Heading, VStack, HStack, Text, Spacer,Spinner , Divider, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import "../Style/loginStyles.css"
import SignIn from './SignIn'
import Join from './Join'
import LoadingWithLetter from './LoadingWithLetter'

export const Login = () => {
    const [currentForm, setCurrentForm] = useState("signin")
    const [isLoading, setIsLoading] = useState(true)
   
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 1000)
    }, [])
    const handlePage = (val) => {
        setCurrentForm(val)
    }

    return (

        <Container minW="100%" minH="100vh" bgColor="#eeeeee">
            <Center>
                <VStack w={["95%", "85%", "80%", "55%"]} mt="10" mb="10" >
                    {/* <Box pb="10"><Link to="/"> <Heading as="h1" fontSize="5xl">FASHIQUE</Heading></Link></Box> */}
                    <Box className="box" bgColor="#ffffff">
                    <Text textAlign={'center'} margin={'10px'} fontSize={'30px'} fontWeight={'bolder'} color={'rgb(66, 66, 66)'}>FASHIQUE</Text>

                        <Center display="flex" justifyContent="space-around" p={'10px'} border="0px solid black" textAlign="center">
                            <Box pl="14%" >
                                <Button variant="ghost" onClick={() => handlePage("join")} _hover={{ bg: "none" }}>  <Text color={currentForm !== "signin" ? "black" : "grey"}>JOIN</Text></Button>
                                <Divider orientation='vertical' height="50%" color="black" />
                            </Box>
                            <Divider orientation='vertical' borderColor="grey" height='50px' />

                            <Box pr="13%">
                                <Button variant="ghost" onClick={() => handlePage("signin")} _hover={{ bg: "none" }}>  <Text color={currentForm === "signin" ? "black" : "grey"}>SIGN IN</Text></Button>
                            </Box>
                        </Center>

                        <Divider orientation='horizontal' style={{ width: "80%", margin: "auto", borderWidth: ".1em" }} />
                        {
                            currentForm === "signin" ? <SignIn /> : <Join setCurrentForm={setCurrentForm}/>
                        }
                    </Box>


                    <Box>

                    </Box>
                </VStack>

            </Center>
        </Container>

    )
}
