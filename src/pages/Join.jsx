import React, { useEffect, useState } from 'react'
import {
    FormControl, Center, Text, HStack, VStack, Spacer, Stack, SimpleGrid,
    FormLabel, Radio, RadioGroup, Checkbox, CheckboxGroup,
    FormErrorMessage,
    FormHelperText,
    Input,
    Box,
    Button,
    Container,
    useToast
} from '@chakra-ui/react'
import { FcGoogle } from "react-icons/fc"
import { TiVendorApple } from 'react-icons/ti'
import { MdOutlineFacebook } from 'react-icons/md';
import { replace, useFormik } from 'formik';
import JoinForm from "../schemas/JoinForm"
import { createAccount } from '../Redux/Join/action';
import { useDispatch, useSelector } from 'react-redux';
import Loading from './Loading';
import LoadingWithLetter from './LoadingWithLetter';
import { Navigate } from 'react-router-dom';

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
        const randomIndex = Math.floor(Math.random() * characters.length) + Math.floor(Math.random());
        token += characters.charAt(randomIndex);
    }
    return token;
}

const Join = ({ setCurrentForm }) => {
    const dispatch = useDispatch()
    const toast = useToast()
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: JoinForm,
        onSubmit: (values, action) => {
            console.log("onsubmit is working")
            values["token"] = generateToken()
            values["useraddress"] = {}
            values["cart"] = []
            values["wishlist"] = {}
            values["useraccountcredentials"] = {}

            dispatch(createAccount(values))
            toast({
                title: 'Account created.',
                description: "We've created your account for you.",
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: "top"
            })
            action.resetForm();
            // <Navigate to="/signin" replace="true"/>
            setTimeout(() => {
                setIsLoading(!isLoading)
                setCurrentForm("signin")
                setIsLoading(!isLoading)
            }, 2000);
        }

    })
    // const { isLoading } = useSelector(state => {
    //     return {
    //         isLoading: state.JoinReducer.isLoading
    //     }
    // })
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 1000)
    }, [])

    return (
        <Container w={["110%", "98%", "95%", "90%"]} margin={["auto", "auto"]} maxW="100%">
            <Box p={'15px'}>
                <Box >

                    <Box letterSpacing=".1em">
                        <form onSubmit={handleSubmit}>
                            <FormControl isRequired >
                            <Box margin={'15px 0'} padding={'5px'}>
                                    <Input type='email'
                                        name='email'
                                        id="email"
                                        autoComplete='off'
                                        placeholder='ENTER EMAIL ...'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={'0'}
                                        borderBottom={'1px'}
                                        borderColor={'rgb(207, 216, 220)'}
                                        fontSize={['12px','13px','14px']}
                                    />
                                    {errors.email && touched.email ? <Text fontSize={11} pl="3" color="red">{errors.email}</Text> : null}
                                    {/* <FormHelperText fontSize={"10"} pl="3">We'll send your order confirmation here</FormHelperText> */}

                                </Box>

                            </FormControl>
                            <FormControl isRequired>
                            <Box margin={'15px 0'} padding={'5px'}>
                                    {/* <FormLabel color="grey">FIRST NAME :</FormLabel> */}
                                    {/* <Text margin={'10px'} color={'grey'}>FIRST NAME :</Text> */}
                                    <Input type='text'
                                        id='firstname'
                                        name='firstname'
                                        placeholder='FIRST NAME ...'
                                        autoComplete='off'
                                        value={values.firstname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={'0'}
                                        borderBottom={'1px'}
                                        borderColor={'rgb(207, 216, 220)'}
                                        fontSize={['12px','13px','14px']}
                                    />
                                    {errors.firstname && touched.firstname ? <Text fontSize={11} pl="3" color="red">{errors.firstname}</Text> : null}
                                </Box>
                            </FormControl>
                            <FormControl >
                            <Box margin={'15px 0'} padding={'5px'}>
                                    <Input type='text'
                                        id="lastname"
                                        name='lastname'
                                        placeholder='LAST NAME ...'
                                        autoComplete='off'
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={'0'}
                                        borderBottom={'1px'}
                                        borderColor={'rgb(207, 216, 220)'}
                                        fontSize={['12px','13px','14px']}
                                    />
                                    {errors.lastname && touched.lastname ? <Text fontSize={11} pl="3" color="red">{errors.lastname}</Text> : null}
                                </Box>
                            </FormControl>
                            <FormControl isRequired width={"100%"}>
                            <Box margin={'15px 0'} padding={'5px'}>
                                    <Input type='password'
                                        id='password'
                                        name='password'
                                        placeholder='ENTER PASSWORD ...'
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={'0'}
                                        borderBottom={'1px'}
                                        borderColor={'rgb(207, 216, 220)'}
                                        fontSize={['12px','13px','14px']}
                                    />
                                    {errors.password && touched.password ? <Text fontSize={11} pl="3" color="red">{errors.password}</Text> : null}
                                    {/* <FormHelperText fontSize={"10"} pl="3">Must be 6 or more characters</FormHelperText> */}
                                </Box>
                            </FormControl>
                            <FormControl isRequired>
                            <Box margin={'15px 0'} padding={'5px'}>
                                    <Input type='password'
                                        id="confirmpassword"
                                        name='confirmpassword'
                                        placeholder='CONFIRM PASSWORD'
                                        value={values.confirmpassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={'0'}
                                        borderBottom={'1px'}
                                        borderColor={'rgb(207, 216, 220)'}
                                        fontSize={['12px','13px','14px']}
                                    />
                                    {errors.confirmpassword && touched.confirmpassword ? <Text fontSize={11} pl="3" color="red">{errors.confirmpassword}</Text> : null}
                                    {/* <FormHelperText fontSize={"10"} pl="3">Must be 6 or more characters</FormHelperText> */}
                                </Box>
                            </FormControl>

                            <FormControl isRequired>
                            <Box margin={'15px 0'} padding={'5px'}>
                                    <Input name='dob'
                                        type="date"
                                        id="date"
                                        value={values.dob}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        border={'0'}
                                        borderBottom={'1px'}
                                        borderColor={'rgb(207, 216, 220)'}
                                        color={'rgb(117, 117, 117)'}
                                        fontSize={['12px','13px','14px']}
                                    />
                                    {errors.dob && touched.dob ? <Text fontSize={11} pl="3" color="red">{errors.dob}</Text> : null}
                                </Box>
                            </FormControl>

                            <RadioGroup >
                                <Text color="grey" margin={'15px'} fontSize={[13, 15]}>MOSTLY INTERESTED IN </Text>
                                    <Box display={'flex'} justifyContent={'space-between'} padding={'10px'}>
                                        <Box>
                                        <Radio value={"women"}
                                            name="gender"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >Womenswear</Radio>
                                        </Box>
                                        <Box>
                                        <Radio value={"men"}
                                            name="gender"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            >Menwear</Radio>
                                        </Box>
                                        {/* {errors.gender && touched.gender ? <Text fontSize={11} pl="3" color="red">{errors.gender}</Text> : null} */}
                                    </Box>
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
{/* part -2 */}
<Center pb="10" >
                        <VStack >
                            <Box pb="5">
                                <Text fontWeight="bolder" fontSize={["sm", "2xl"]}>SIGN IN WITH</Text>
                            </Box>


                                    <Box w={['100%','80%','60%']}>
                                        <Button w={'100%'}>
                                            <FcGoogle fontSize="20px" />&nbsp;&nbsp;
                                            <Text fontSize={[10, 10, 10, 15]} display={["none", "block"]}>GOOGLE</Text>
                                        </Button>
                                    </Box>

                                    <Box w={['100%','80%','60%']}>
                                        <Button w={'100%'}>
                                            <TiVendorApple fontSize="20px" />&nbsp;&nbsp;
                                            <Text fontSize={[10, 10, 10, 15]} display={["none", "block"]}>APPLE</Text>
                                        </Button>
                                    </Box>

                                    <Box w={['100%','80%','60%']}>
                                        <Button w={'100%'}>
                                            <MdOutlineFacebook fontSize="20px" />&nbsp;&nbsp;
                                            <Text fontSize={[10, 10, 10, 15]} display={["none", "block"]}>FACEBOOK</Text>
                                        </Button>
                                    </Box>

                            <Text fontSize="11" p={'10px'} textAlign="center">Signing up with social is super quick. No extra passwords to remember - no brain fail. Don't worry, we'd never share any of your data or post anything on your behalf #notevil</Text>
                        </VStack>
                    </Center>

        </Container>
    )
}

export default Join 