import {
    Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement,
    Alert, AlertDescription, AlertIcon, AlertTitle,
    InputRightElement, Spacer, Text
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsCreditCard } from "react-icons/bs";
import { BiCreditCardAlt } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { patchUserCred } from '../Redux/Checkout/action';




const initState = {
    cardnumber: "",
    expirydate: "",
    cardholdername: "",
    cvv: 0,
}

const PaymentCard = ({ setShowPaymentCard, showPaymentCard }) => {
    const [userCred, setUserCred] = useState(initState)
    const dispatch = useDispatch()
    const userId = JSON.parse(localStorage.getItem("userId"))
    console.log("userid", userId)

    const handleChange = (e) => {
        console.log(e.target.value)
        const { name, value } = e.target
        setUserCred({ ...userCred, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Object.values(userCred).every(Boolean)) {
            alert("Please enter all card details.");
        } else {
            console.log(userCred);
            localStorage.setItem("userCred", JSON.stringify(userCred));
            dispatch(patchUserCred(userCred, userId));
            setUserCred(initState);
            setShowPaymentCard(!showPaymentCard)
        }
    };



    useEffect(() => {
        setUserCred(initState);
    }, [dispatch]);

    // Render the form with the updated userCred state


    return (
        <Box pt="5">
            <Flex>  <Text fontSize={["13", "15"]}>ADD CREDIT/DEBIT CARD</Text><Spacer />
                <Button onClick={() => setShowPaymentCard(!showPaymentCard)}> <Text fontSize={["13", "15"]}>Cancel</Text> </Button></Flex>
            <form action="" onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel color={"#585858"} fontSize={["13", "15"]}> CARD NUMBER</FormLabel>
                    <InputGroup>
                        <InputRightElement
                            pointerEvents="none"
                            children={<BsCreditCard color="gray.300" />}
                        />
                        <Input type="number" pattern="\d{4} \d{4} \d{4} \d{4}"
                            maxLength="16" name="cardnumber" onChange={handleChange} placeholder="1234 *** *** **32" />
                    </InputGroup>
                </FormControl>
                <FormControl pt="3">
                    <FormLabel color={"#585858"} fontSize={["13", "15"]}>EXPIRY DATE</FormLabel>
                    <Input
                        type="month"
                        placeholder="month and year"
                        name="expirydate"
                        onChange={handleChange}
                        width={["100%", "40%"]}
                    />
                </FormControl>
                <FormControl pt="3">
                    <FormLabel color={"#585858"} fontSize={["13", "15"]}>NAME ON CARD</FormLabel>
                    <Input type='text' name="cardholdername" onChange={handleChange} placeholder='card holder name' />
                </FormControl>


                <FormControl pt="3">
                    <FormLabel color={"#585858"} fontSize={["13", "15"]}> CARD NUMBER</FormLabel>
                    <InputGroup>
                        <InputRightElement
                            pointerEvents="none"
                            children={<BiCreditCardAlt color="gray.300" />}
                        />
                        <Input type="password" name="cvv" onChange={handleChange} placeholder="CVV ***" />
                    </InputGroup>
                </FormControl>
                <Box pt="5">
                    <Button type='submit' bg={"#2d2d2d"} _hover={{ bg: "black" }} color={"white"} >
                        <Text fontSize={["13", "15"]} letterSpacing={"2px"}>USE THIS CARD</Text></Button>
                </Box>

            </form>
        </Box>
    )
}

export default PaymentCard