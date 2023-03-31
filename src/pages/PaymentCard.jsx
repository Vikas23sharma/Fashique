import { Box, Button, Flex, FormControl, FormLabel, Input, InputGroup, InputLeftElement, InputRightElement, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { BsCreditCard } from "react-icons/bs";
import { BiCreditCardAlt } from "react-icons/bi";




const PaymentCard = ({ setShowPaymentCard, showPaymentCard }) => {
    return (
        <Box pt="5">
            <Flex>  <Text fontSize={["13", "15"]}>ADD CREDIT/DEBIT CARD</Text><Spacer />
                <Button onClick={() => setShowPaymentCard(!showPaymentCard)}> <Text fontSize={["13", "15"]}>Cancel</Text> </Button></Flex>
            <FormControl>
                <FormLabel color={"#585858"} fontSize={["13", "15"]}> CARD NUMBER</FormLabel>
                <InputGroup>
                    <InputRightElement
                        pointerEvents="none"
                        children={<BsCreditCard color="gray.300" />}
                    />
                    <Input type="text" placeholder="1234 *** *** **32" />
                </InputGroup>
            </FormControl>
            <FormControl pt="3">
                <FormLabel color={"#585858"} fontSize={["13", "15"]}>EXPIRY DATE</FormLabel>
                <Input
                    type="month"
                    placeholder="month and year"
                    width={["100%", "40%"]}
                />
            </FormControl>
            <FormControl pt="3">
                <FormLabel color={"#585858"} fontSize={["13", "15"]}>NAME ON CARD</FormLabel>
                <Input type='text' placeholder='card holder name' />
            </FormControl>


            <FormControl pt="3">
                <FormLabel color={"#585858"} fontSize={["13", "15"]}> CARD NUMBER</FormLabel>
                <InputGroup>
                    <InputRightElement
                        pointerEvents="none"
                        children={<BiCreditCardAlt color="gray.300" />}
                    />
                    <Input type="text" placeholder="CVV ***" />
                </InputGroup>
            </FormControl>
            <Box pt="5">
                <Button bg={"#2d2d2d"} _hover={{ bg: "black" }} color={"white"}> <Text fontSize={["13", "15"]} letterSpacing={"2px"}>USE THIS CARD</Text></Button>
            </Box>
        </Box>
    )
}

export default PaymentCard