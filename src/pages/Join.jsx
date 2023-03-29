import React, { useEffect } from 'react'
import {
    FormControl, Center, Text, HStack, VStack, Spacer, Stack, SimpleGrid,
    FormLabel, Radio, RadioGroup, Checkbox, CheckboxGroup,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
    Container
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc"
import { TiVendorApple } from 'react-icons/ti'
import { MdOutlineFacebook } from 'react-icons/md';
import { useFormik } from 'formik';
import JoinForm from "../schemas/JoinForm"
import { createAccount } from '../Redux/Join/action';
import { useDispatch } from 'react-redux';

const initialValues = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
    confirmpassword: "",
    dob: "",
    gender: "",

}
function generateToken() {
    let token = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < 50; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)+Math.floor(Math.random());
        token += characters.charAt(randomIndex);
    }
    return token;
}

const Join = () => {
    const dispatch = useDispatch()

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: JoinForm,
        onSubmit: (values, action) => {
            console.log("onsubmit is working")
            values["token"] = generateToken()

            dispatch(createAccount(values))
            action.resetForm()
        }
    })





    return (
        <Container style={{ width: "90%", margin: "auto" }} maxW="100%">
            <Box p="10%" >

                <Box >
                    <Center pb="10">
                        <VStack >
                            <Box pb="5">
                                <Text fontWeight="bolder" fontSize={["sm", "2xl"]}>OR SIGN IN WITH...</Text>
                            </Box>

                            <Center>  <SimpleGrid columns={[3, 3, 3, 3]} gap={[2, 3, 3, 3]} pb={[5, 10, 10, 10]} w={["100%", "100%", "100%", "100%"]}
                                margin={["auto", "auto", "auto", "auto"]} justifyContent={["center", "center", "center", "center"]}
                                marginLeft={["auto", "auto", "auto", "auto"]}
                                marginRight={["auto", "auto", "auto", "auto"]}
                            >
                                <Box><Button><FcGoogle />&nbsp;&nbsp;<Text fontSize={[8, 8, 10, 15]}  display={["none","block"]}>GOOGLE</Text></Button></Box>

                                <Box><Button ><TiVendorApple />&nbsp;&nbsp;<Text fontSize={[8, 8, 10, 15]}  display={["none","block"]}>APPLE</Text></Button></Box>

                                <Box><Button> <MdOutlineFacebook />&nbsp;&nbsp;<Text fontSize={[8, 8, 10, 15]}  display={["none","block"]}>FACEBOOK</Text></Button></Box>
                            </SimpleGrid></Center>
                            <Text fontSize="11" textAlign="justify">Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil</Text>
                        </VStack>
                    </Center>
                    <Box letterSpacing=".1em">
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired >
                                <Box pb="10%">
                                    <FormLabel color="grey" htmlFor='email'>EMAIL ADDRESS :</FormLabel>
                                    <Input type='email'
                                        name='email'
                                        id="email"
                                        autoComplete='off'
                                        placeholder='enter email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.email && touched.email ? <Text fontSize={11} pl="3" color="red">{errors.email}</Text> : null}
                                    <FormHelperText fontSize={"10"} pl="3">We'll send your order confirmation here</FormHelperText>

                                </Box>

                            </FormControl>
                            <FormControl isRequired>
                                <Box pb="10%">
                                    <FormLabel color="grey">FIRST NAME :</FormLabel>
                                    <Input type='text'
                                        id='firstname'
                                        name='firstname'
                                        placeholder='enter firstname'
                                        autoComplete='off'
                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.firstname && touched.firstname ? <Text fontSize={11} pl="3" color="red">{errors.firstname}</Text> : null}
                                </Box>
                            </FormControl>
                            <FormControl >
                                <Box pb="10%">
                                    <FormLabel color="grey">LAST NAME :</FormLabel>
                                    <Input type='text'
                                        id="lastname"
                                        name='lastname'
                                        placeholder='enter lastname'
                                        autoComplete='off'
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.lastname && touched.lastname ? <Text fontSize={11} pl="3" color="red">{errors.lastname}</Text> : null}
                                </Box>
                            </FormControl>
                            <FormControl isRequired>
                                <Box pb="10%">
                                    <FormLabel color="grey">PASSWORD :</FormLabel>
                                    <Input type='password'
                                        id='password'
                                        name='password'
                                        placeholder='enter password'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.password && touched.password ? <Text fontSize={11} pl="3" color="red">{errors.password}</Text> : null}
                                    <FormHelperText fontSize={"10"} pl="3">Must be 10 or more characters</FormHelperText>
                                </Box>
                            </FormControl>
                            <FormControl isRequired>
                                <Box pb="10%">
                                    <FormLabel color="grey">CONFIRM PASSWORD :</FormLabel>
                                    <Input type='password'
                                        id="confirmpassword"
                                        name='confirmpassword'
                                        placeholder='re-enter password'
                                        value={values.confirmpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.confirmpassword && touched.confirmpassword ? <Text fontSize={11} pl="3" color="red">{errors.confirmpassword}</Text> : null}
                                    <FormHelperText fontSize={"10"} pl="3">Must be 6 or more characters</FormHelperText>
                                </Box>
                            </FormControl>

                            <FormControl isRequired>
                                <Box pb="10%">
                                    <FormLabel color="grey" >DATE OF BIRTH :</FormLabel>
                                    <Input name='dob'
                                        type="date"
                                        id="date"
                                        value={values.dob}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.dob && touched.dob ? <Text fontSize={11} pl="3" color="red">{errors.dob}</Text> : null}
                                </Box>
                            </FormControl>

                            <RadioGroup pb="10%" >
                                <FormLabel color="grey" fontSize={[14, 16]}>MOSTLY INTERESTED IN :</FormLabel>
                                <Center  >
                                    <Stack direction='row' gap={[0, 20]} >
                                        <Radio value={"women"}
                                            name="gender"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >Womenswear</Radio>
                                        <Radio value={"men"}
                                            name="gender"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >Menwear</Radio>
                                        {/* {errors.gender && touched.gender ? <Text fontSize={11} pl="3" color="red">{errors.gender}</Text> : null} */}
                                    </Stack>
                                </Center>
                            </RadioGroup>
                            <FormControl mt={"5"} >
                                <Button type='submit' bg={"#2d2d2d"} color="white" width={"100%"} _hover={{
                                    color: "black",
                                    bg: "#edf2f7"
                                }} letterSpacing=".2em">
                                    JOIN FASHIQUE
                                </Button>
                            </FormControl>
                        </form>


                    </Box>
                </Box>
            </Box>


        </Container>
    )
}

export default Join 