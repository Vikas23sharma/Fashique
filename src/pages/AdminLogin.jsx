import { useState, useEffect } from "react"
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  Wrap,
  WrapItem,
  useToast,


} from '@chakra-ui/react';

import LoadingWithLetter from "./LoadingWithLetter";
import { Navigate } from "react-router-dom";
const Email = "fashique@gmail.com"
const Password = "123456789"


export default function AdminLogin() {
  const [isLoading, setIsLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const toast = useToast();

  const handleChange = (e) => {
    console.log(e.target.value)
    e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    // console.log("its working")
    e.preventDefault()
    if (email === Email && password === Password) {
      toast({
        title: "Login Successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top"
      });
      <Navigate to= "/admin" replace="true" />
    } else {
      toast({
        title: "Login Failed",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top"
      });
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 1000)
  }, [])
  return isLoading === true ? (<div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>  <LoadingWithLetter /></div>) : (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'#eeeeee'}
      minW={["100%", "100%"]}
    >
      <Stack spacing={8} mx={'auto'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>FASHIQUE </Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg='white'
          boxShadow={'lg'}
          p={[6, 6, 7, 8]}
          maxW={["100%", "100%"]}
          w={["350px", "400px", "400px", "500px"]}
        >
          <Heading fontSize={'2xl'} textAlign="center" p="10">ADMIN LOGIN</Heading>
          <Stack spacing={4}>
            <form onSubmit={handleSubmit}>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name="email" value={email} onChange={handleChange} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" name="password" value={password} onChange={handleChange} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'black'}>Forgot password?</Link>
                </Stack>
                <Button
                  type="submit"
                  bg={'#2d2d2d'}
                  color={'white'}
                  _hover={{
                    bg: '#eeeeee',
                    color: "black"
                  }}>
                  Sign in
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
