import { Box, Button, Flex, HStack, Image, Select, Text } from '@chakra-ui/react'
import { FaTimes } from 'react-icons/fa';
import { useState } from "react"

const CartProductCard = ({ image, title, category, price, size, id, setDelId, setSubTotal, subTotal, setCount }) => {
    // console.log(items)

    const [qty, setQty] = useState(1)
    // const { image, title, category, price, size, id } = items
    const handleDelete = () => {
        setDelId(id)
        setCount(p => p + 1)
    }
    const handleChange = (e) => {
        setQty(e.target.value)
        var newprice = subTotal + (price * qty)

        setSubTotal(newprice)
    }

    return (
        <Box>
            <Box style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px", borderRadius: "10px" }} p="5" h="160px">
                <Flex>
                    <Box pl={[0, 5]}>
                        <Image src={image} alt={category} width={"100%"} h={"15vh"} />
                    </Box>

                    <Box w="70%" pl={[8, 10]}>
                        <HStack>
                            <Box>
                                <Text color={"#d01345"} fontSize={["15", "20", "20", "15"]} fontWeight="bold"> &#36;{price}.00</Text>
                            </Box>
                        </HStack>
                        <Text fontSize={["10", "20", "20", "12"]} color={"#525252"} fontWeight="bold"> {title}</Text>
                        <Text color={"gray"} fontWeight="bold" fontSize={["10", "20", "20", "12"]}>Size :{size}</Text>
                        <HStack>
                            <Text color={"gray"} fontSize={["10", "20", "20", "12"]} fontWeight="bold">Qty: {qty}</Text>
                            <Select defaultValue={1} w="45px" variant={"ghost"} onChange={handleChange}>
                                <option value="" hidden></option>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </Select>
                        </HStack>
                    </Box>
                    <Box >
                        <Button variant={"ghost"} _hover={{ bg: "none" }} onClick={handleDelete}>   <FaTimes color='greyS' /></Button>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default CartProductCard