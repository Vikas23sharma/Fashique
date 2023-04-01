import { Box, Button, Center, Image, Container, Divider, HStack, Select, Spacer, Stack, Text } from '@chakra-ui/react'
import { Navbar } from './Navbar'
import { RiInformationLine } from 'react-icons/ri';
import CartProductCard from './CartProductCard';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCartProducts, updatedCart } from '../Redux/Cart/action';
import { FaShoppingBag, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const cartproducts = JSON.parse(localStorage.getItem("CartItems")) || []

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [delId, setDelId] = useState(0)
    const [cartItems, setCartItems] = useState(cartproducts)
    const [subtotal, setSubtotal] = useState(0)
    const [subTotal, setSubTotal] = useState(subtotal)
    const [boxHeight, setBoxHeight] = useState('80vh');
    const [count, setCount] = useState(0)

    // console.log(cartproducts)
    var cartUserId = JSON.parse(localStorage.getItem("CartUserId")) || null
    var token = JSON.parse(localStorage.getItem("token")) || null


    useEffect(() => {
        let price = 0;
        if (cartItems.length !== 0) {
            cartItems.forEach((product) => {
                price += product.price;
            });
        }
        setSubtotal(price);
    }, [cartItems, subtotal]);
    useEffect(() => {
        var token = JSON.parse(localStorage.getItem("token")) || null
        // const cartproducts = JSON.parse(localStorage.getItem("CartItems")) || []
        // setCartItems(cartproducts)
        console.log(token)

        if (token !== null) {
            dispatch(getCartProducts(token))
        }
    }, [token])



    // console.log(delId, "deleting id")
    // console.log(subtotal, "subtotal")
    // console.log(subTotal, "subTotal")

    useEffect(() => {
        setCartItems((prevCart) => prevCart.filter((item) => item.id !== delId))
        const updatedCartItems = cartItems.filter((item) => item.id !== delId);
        localStorage.setItem('CartItems', JSON.stringify(updatedCartItems));
        const remainingItemsCount = cartItems.length - 1;
        const newHeight = `${remainingItemsCount * 160}px`;
        setBoxHeight(newHeight);

    }, [delId])
    console.log(cartUserId)
    useEffect(() => {
        dispatch(updatedCart(cartItems, cartUserId))
    }, [cartItems, cartUserId])
    return (
        <Container minW={"100%"}>
            <Center minW={"100%"}>
                <Navbar />
                {(cartItems.length === 0) ?
                    <Container minW={"100%"}>
                        <Center >
                            <Box width={["100%", "60%", "50%", "40%", "30%"]} margin={"auto"}>
                                <Box mt="30vh" >
                                    <Center><FaShoppingBag size={32} /></Center>
                                    <Box textAlign={"center"} pt="8">
                                        <Text textAlign={"center"} fontWeight={"bold"} letterSpacing={"2px"}>Your bag is empty</Text>
                                        <Text textAlign={"center"}>"Oops, your cart is currently empty! Don't worry, you can keep shopping and adding items to your cart by browsing our collection of products. We have a wide variety of options available, so take your time and find exactly what you're looking for. </Text>

                                    </Box>
                                    <Box pt="10"> <Center><Button onClick={() => navigate("/")} bg="black" color="white" width={"50%"}> Shop Now &nbsp;&nbsp;<FaShoppingCart /></Button></Center></Box>
                                </Box>
                            </Box>
                        </Center>
                    </Container>
                    : <Box mt="18vh">
                        <Box width={["100%", "100%", "100%", "80%", "80%", "100%"]} margin={"auto"}>
                            <Stack direction={["column", "column", "column", "row", "row"]}>
                                <Box>
                                    <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                                        w={["330px", "100%", "600px", "800px", "600px", "600px"]}
                                        h={"10vh"}
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Box >
                                            <HStack p={[5, 5, 5, 5, 5]}>
                                                <Text fontSize={["md", "xl"]} fontWeight="550">MY BAG</Text>
                                                <Spacer />
                                                <Text fontSize={["sm", "sm"]} pl={["4", "40px", "50px", "160px"]}
                                                    display={"flex"}>Items are reserved for 30 minutes</Text>

                                            </HStack>


                                        </Box>
                                    </Box>
                                    <Box
                                        w={["330px", "100%", "600px", "800px", "600px", "600px"]}
                                        h={boxHeight}
                                        overflowY={"scroll"}
                                        // border={"1px solid black"}
                                        mt="3"
                                        css={{
                                            '&::-webkit-scrollbar': {
                                                display: 'none',
                                            },
                                            '-ms-overflow-style': 'none',
                                            scrollbarWidth: 'none',
                                        }}
                                    >
                                        {
                                            cartItems.map((items) => (
                                                <CartProductCard key={items.id} {...items}
                                                    setDelId={setDelId}
                                                    setSubTotal={setSubTotal}
                                                    subTotal={subTotal}
                                                    setCount={setCount}

                                                />
                                            ))
                                        }

                                    </Box>
                                </Box>


                                <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                                    w={["100%", "100%", "600px", "800px", "600px", "400px"]}
                                    h="50vh"
                                    p="5"
                                >
                                    <Box>
                                        <Text p="5" letterSpacing={"2px"} fontWeight="550"> TOTAL</Text>
                                        <Divider borderColor={"black"} />
                                        <Box>
                                            <HStack> <Text p={5} fontWeight="520"> Sub-total :</Text> <Spacer /> <Text>$ {subtotal + subTotal}.00</Text> </HStack>
                                            <HStack> <Text pl="5" fontWeight="520">Delivery </Text> <Spacer /> <RiInformationLine size={20} /></HStack>
                                        </Box>
                                        <Box>
                                            <Select pl="5" variant='flushed' placeholder='Standard Delivery (Free)' focusBorderColor="black" >
                                                <option value="stdel">Standard Delivery (Free)</option>
                                                <option value="35">Express Delivery $35</option>
                                            </Select>

                                            <Box pt="10" pr={5} pl={5}><Button bgColor={"#018849"} color={"white"} _hover={{ color: "none" }} width={"100%"}>CheckOut</Button></Box>
                                        </Box>
                                        <Box pt="5">
                                            <Text letterSpacing={"2px"} fontWeight="550">WE ACCEPT:</Text>
                                            <Box pt="2" width={"80%"}> <Image src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="cards" width={"100%"} h="3vh" /></Box>
                                            <Text pt="3" fontSize={"sm"} color="grey">Got a discount code? Add it in the next step.</Text>
                                        </Box>

                                    </Box>
                                </Box>

                            </Stack>

                        </Box>
                    </Box>}
            </Center >

        </Container >
    )
}

export default Cart