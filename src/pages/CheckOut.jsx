import { Box, Center, Container, HStack, Spacer, Stack, Text, Image, useMediaQuery, Button, FormControl, FormLabel, MenuItem, Select, Divider, VStack, Flex, Alert, AlertIcon, AlertTitle, AlertDescription, Slide, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import CheckoutProductsCard from './CheckoutProductsCard';
import LoadingWithLetter from './LoadingWithLetter';
import "../Style/checkout.css"
import { AiOutlineInfoCircle } from 'react-icons/ai';
import DeliveryAddressForm from './DeliveryAddressForm';
import DeliveryAddressCard from './DeliveryAddressCard';
import { BsCreditCardFill } from 'react-icons/bs';
import { FaCcPaypal } from 'react-icons/fa';
import PaymentCard from './PaymentCard';
import { useDispatch, useSelector } from 'react-redux';
import { getUserCart, postOrders } from '../Redux/Checkout/action';

const CheckOut = () => {
    const initalPresent = JSON.parse(localStorage.getItem('addresspresent'));
    const [textChange, setTextChange] = useState("Change")
    const [isSelectActive, setIsSelectActive] = useState(false || initalPresent);
    // const [index, setIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [showAlert, setShowAlert] = useState(false);
    const [showPaymentCard, setShowPaymentCard] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(11.05);
    const [totalToPay, setTotalToPay] = useState(0)
    const [addressPresent, setAddressPresent] = useState(false);
    const navigate = useNavigate();
    const [isMobileView] = useMediaQuery("(max-width: 930px)")
    // const [isMobileView2] = useMediaQuery("(max-width: 360px)")
    const dispatch = useDispatch()
    const [country, setCountry] = useState({
        image: "https://cdn4.iconfinder.com/data/icons/flat-circle-flag/182/circle_flag_india-1024.png",
        name: "India"
    });

    const handleButtonClick = () => {
        setIsSelectActive(!isSelectActive);
        setTextChange(isSelectActive ? "Change" : "Cancel");
    };

    const countries = [
        {
            image: "https://cdn4.iconfinder.com/data/icons/flat-circle-flag/182/circle_flag_india-1024.png",
            name: "INDIA"
        },
        {
            image: "https://cdn2.iconfinder.com/data/icons/world-flags-1-1/100/USA_-512.png",
            name: "USA"
        },
        {
            image: "https://th.bing.com/th/id/OIP.h1ekIazfP21mK80EOJ2tnAHaHa?pid=ImgDet&w=300&h=300&rs=1",
            name: "CANADA"
        },
        {
            image: "https://insightwhale.com/wp-content/uploads/2018/08/%D0%B1%D1%80%D0%B8%D1%82%D0%B0%D0%BD%D0%B8%D1%8F.png",
            name: "UK"
        },
        {
            image: "https://cdn0.iconfinder.com/data/icons/world-flags-1/100/australia-2-512.png",
            name: "AUSTRALIA"
        }
    ];

    useEffect(() => {
        let token = JSON.parse(localStorage.getItem("token"))
        dispatch(getUserCart(token))
    }, [])

    // const { checkoutProducts } = useSelector(state => {
    //     return {
    //         checkoutProducts: state.CheckoutReducer.checkoutProducts
    //     }
    // })
    var checkoutProducts = JSON.parse(localStorage.getItem("CartItems"))
    console.log(checkoutProducts)

    var userDetails = JSON.parse(localStorage.getItem("UserDetails")) || []
    var index = JSON.parse(localStorage.getItem("userId")) || 1
    var token = JSON.parse(localStorage.getItem("token")) || null

    // const { useraccountcredentials } = useSelector(state => {
    //     console.log(state)
    //     return {
    //         useraccountcredentials: state.CheckoutReducer.useraccountcredentials
    //     }
    // })
    // console.log(useraccountcredentials,"useraccountcredentials")

    useEffect(() => {
        const localUserDetails = JSON.parse(localStorage.getItem("UserDetails")) || []
        const localToken = JSON.parse(localStorage.getItem("token") || null)

        const user = localUserDetails.find((item) => item.token === localToken)
        if (user && Object.keys(user.useraddress).length !== 0) {
            setAddressPresent(true)
        }
    }, [token])

    // Now you can use the `addressPresent` state variable to conditionally render your components


    // console.log(userDetails, "line179")
    useEffect(() => {
        let price = 0;
        checkoutProducts.forEach((product) => {
            price += product.price;
        });
        setTotalPrice(price);
    }, [checkoutProducts]);

    useEffect(() => {
        if (totalPrice >= 100) {
            const additionalDeliveryPrice = Math.floor((totalPrice - 100) / 25) * 5;
            setDeliveryPrice(11.05 + additionalDeliveryPrice);
        }
    }, [totalPrice]);
    useEffect(() => {
        let totalpay = totalPrice + deliveryPrice
        setTotalToPay(totalpay)
    }, [totalPrice, deliveryPrice])



    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 500)
    }, [])
    var obj = {}
    const handleBuy = () => {
        const orders = JSON.parse(localStorage.getItem("UserDetails"))
        var id = JSON.parse(localStorage.getItem("id")) || null
        obj["orders"] = orders[id - 1]
        obj["amount"] = totalPrice

        console.log(obj, "objess")
        dispatch(postOrders(obj))
        setShowAlert(true)

        setTimeout(() => {
            setShowAlert(false);
            navigate('/')
        }, 1000);

    }
    const handleCountryChange = (e) => {
        const selectedCountryIndex = e.target.value;
        const selectedCountry = countries[selectedCountryIndex];
        setCountry(selectedCountry);
    };
    const { name, image } = country
    // console.log(checkoutProducts, "line129")
    return isLoading === true ? (<div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>

        <LoadingWithLetter />
    </div>) : (
        <Container maxW={"100%"}>
            <Center>

                {showAlert && (<Slide direction="down" in={showAlert} out={showAlert} style={{ zIndex: 100, transition: 'ease-in 0.5s' }} timeout={{ enter: 500, exit: 300 }}>
                    <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" height="200px" >
                        <AlertIcon boxSize="30px" mr={0} />
                        <AlertTitle mt={4} mb={1} fontSize="lg">
                            Thank you for your purchase!
                        </AlertTitle>
                        <AlertDescription maxWidth="md" textAlign={"center"} >
                            Thank you for your purchase of fashion items! Your support helps us continue to provide trendy and high-quality products. We hope to see you again soon!
                        </AlertDescription>
                    </Alert>
                </Slide>
                )}
                <Box width={["100%", "80%", "80%", "90%", "70%"]} p="5">
                    <HStack>
                        <Box><Text fontSize={["md", "3xl"]} fontWeight="bolder">FASHIQUE</Text></Box>
                        <Spacer />
                        <Box><Text fontSize={["sm", "2xl"]} fontWeight="bolder" color={"#484848"}>CHECKOUT</Text></Box>
                        <Spacer />
                        <Box><Image src={"https://careeracademy.ie/wp-content/uploads/2020/11/Secure-Payment-Icon.png"} alt="secure" width={"100%"} height="3.3vh" /></Box>
                    </HStack>
                </Box>
            </Center>
            <Center>
                <Box width={["700px", "100%", "80%", "90%", "70%"]} p="5">

                    <Stack direction={["column", "column", "column", "row"]}>
                        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                            maxH={["17vh", "15vh", "15vh", "15vh", "15vh", "17vh"]} mt="0"
                        >
                            <Box pl={["5", "10"]} p={'0px'} m={'10px'}>
                                <Text fontSize={["md", "xl"]} fontWeight="550">DELIVERY COUNTRY :</Text>
                                <HStack>
                                    <Box width={"40px"} pt="7px">
                                        <HStack width={"100%"} >
                                            <Image src={image} alt="Indian Flag" width={"100%"} h="4vh" />
                                            <Text as="span" color={"grey"}>{name}</Text>
                                            <Spacer />
                                            <Spacer />
                                            {isSelectActive && (
                                                <FormControl >
                                                    <Select id="country-select" onChange={handleCountryChange}
                                                        variant="ghost"
                                                        name="country"
                                                        color={"grey"} width={"100px"}>
                                                        <option value="0">INDIA</option>
                                                        <option value="1">USA</option>
                                                        <option value="2">Canada</option>
                                                        <option value="3">UK</option>
                                                        <option value="4">Australia</option>
                                                    </Select>
                                                </FormControl>
                                            )}
                                        </HStack>
                                    </Box>
                                    <Spacer />
                                    <Box pr={["3", "10", "10", "10"]} pt="5px"> <Button onClick={handleButtonClick}>{textChange}</Button>
                                    </Box>
                                </HStack>
                            </Box>
                            {/* main */}
                            <Box pb="10">
                                <Box h={["100vh", "100vh", "50vh", "50vh", "10vh"]} mt={["55vh", "55vh", "45vh", "1vh", "1vh", "0vh"]}>
                                    <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }} p={5}>
                                        <Text fontSize={["md", "xl"]} fontWeight="550">Email Address:</Text>
                                        <Text pl="5" pt="2">{userDetails[index - 1].email}</Text>
                                    </Box>
                                    <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }} p={'15px'} m={'15px auto'}>
                                        <Box><Text fontSize={["md", "xl"]} fontWeight="550">Delivery Address:</Text></Box>
                                        <Box>
                                            {!addressPresent ? <DeliveryAddressForm setAddressPresent={setAddressPresent} /> :
                                                <DeliveryAddressCard index={index} userDetails={userDetails[index - 1].useraddress} />}
                                        </Box>

                                    </Box>
                                    <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }} p={'15px'} >
                                        <Box>
                                            <Text fontSize={["md", "xl"]} fontWeight="530">PAYMENT</Text>
                                            <Box pt="5">
                                                <Text as={"span"} fontSize={["sm", "md"]} fontWeight="550" >BILLING ADDRESS</Text>
                                                <DeliveryAddressCard index={index} userDetails={userDetails[index - 1].useraddress} />
                                            </Box>
                                        </Box>
                                        <Divider orientation='horizontal' borderColor="black" pt={"5"} width={"100%"} margin={"auto"} />

                                        <Text fontSize={["md", "xl"]} fontWeight="550" pt={5} pb="5" >PAYMENT TYPE</Text>
                                        <Box p={["1", "10"]} pr={["10", "5"]}>
                                            <Button p={'10px 20px'} width={["80%", "100%", "80%", "100%", "60%", "100%"]} margin={["auto"]} onClick={() => setShowPaymentCard(!showPaymentCard)}>
                                                <BsCreditCardFill /> <Text p={'10px'} letterSpacing={["0", "2px"]} fontSize={["sm", "md"]} textAlign={"center"} >
                                                    <Center> ADD CREDIT/DEBIT CARD</Center></Text>
                                            </Button>
                                            {showPaymentCard ? <PaymentCard
                                                setShowPaymentCard={setShowPaymentCard}
                                                showPaymentCard={showPaymentCard}

                                            /> : null}

                                        </Box>
                                        <Box pl={["1", "10"]} mt={["2"]}>
                                            <Button width={["80%", "100%", "80%", "100%", "60%", "100%"]}>
                                                <Center>
                                                    <Box display={"flex"}> <Text><FaCcPaypal /> </Text><Text letterSpacing={["2px", "2px"]} pl="5" >PAYPAL</Text></Box>
                                                </Center>
                                            </Button>
                                        </Box>
                                        <Box pt="5">
                                            <Flex><Box><Text fontWeight={"bold"} fontSize={["sm", "md"]} color={"grey"}>WE ACCEPT</Text></Box>

                                                <Box width={["60%", "48%"]} alignItems={"center"} justifyContent={"center"} pl="5">
                                                    <Image src="https://assets.asosservices.com/asos-finance/images/marketing/single.png" alt="cards" width={"100%"} h="3vh" /></Box>

                                            </Flex></Box>

                                    </Box>
                                    <Box pt="3"><Button bg={"#05CC6F"} color={"white"} width={"100%"} onClick={handleBuy}> BUY NOW</Button></Box>
                                    <Box p="5" pb="10"><Text fontSize={["10", "sm"]} textAlign={["justify", "left"]}>BUY NOW
                                        By placing your order you agree to our Terms & Conditions, privacy and returns policies . You also consent to some of your data being stored by FASHIQUE, which may be used to make future shopping experiences better for you.</Text></Box>
                                </Box>
                            </Box>
                            {/* main */}
                        </Box>

                        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", borderRadius: "10px" }}
                            w={["100%", "100%", "100%", "100%", "1000px", "800px"]}
                            minH={["10vh", "10vh", "10vh", "10vh"]}
                            margin={["auto", "auto", "auto", "auto"]}


                        >
                            <HStack>
                                <Box p="5">
                                    <Text letterSpacing={2} fontWeight="600">
                                        {isMobileView ? <Text fontSize={["md", "xl", "xl", "xl", "xl"]}>MY BAG</Text> : `${checkoutProducts.length} ITEMS`}
                                    </Text>
                                </Box>
                                <Spacer />
                                <Box pr={["8", "5", "5", "5"]}>
                                    <Link to="/cart">
                                        <Text>
                                            {isMobileView ? <Link to="/cart">  <Text fontSize={["md", "xl", "xl", "xl"]}>VIEW</Text></Link> : <Link to="/cart">EDIT</Link>}
                                        </Text>
                                    </Link>
                                </Box>
                            </HStack>
                            <Divider width={"90%"} margin="auto" />
                            <Box  >
                                <Box h="30vh"
                                    overflowY="scroll"
                                    className='hide-scrollbar' mt="5"
                                    css={{ scrollBehavior: 'smooth' }}
                                >
                                    {
                                        checkoutProducts.map((items) => (
                                            <CheckoutProductsCard key={items.id} {...items} />
                                        ))
                                    }
                                </Box>
                                {
                                    isMobileView ? <Box p="5">
                                        <Divider p="2" />
                                        <HStack>
                                            <Box>  <Text pt="5" pl="10" fontSize={["md", "xl", "xl", "xl"]}>  {checkoutProducts.length} Items</Text></Box>
                                            <Spacer />
                                            <Box><Text pr={"10"} pt="5" fontSize={["md", "xl", "xl", "xl"]}>&#36;{totalPrice}.00</Text></Box>
                                        </HStack>
                                    </Box> : <Box h={["30vh", "50vh", "20vh", "20vh", "25vh"]}>
                                        <Divider orientation="horizontal" height="2px" bg="gray.200" my={4} width={"90%"} margin="auto" />
                                        <VStack pl={5} pr={5} pt="5">
                                            <Flex justifyContent="space-between" width="100%">
                                                <Text>SubTotal</Text>
                                                <Text>&#36; {totalPrice}.00</Text>
                                            </Flex>
                                            <Flex justifyContent="space-between" width="100%">
                                                <Text>Delivery</Text>
                                                <Text>&#36; {deliveryPrice}.00</Text>
                                            </Flex>
                                            <Flex justifyContent="space-between" width="100%">
                                                <Text fontWeight={"bolder"}>TOTAL TO PAY</Text>
                                                <Text fontWeight={"bolder"}>&#36;   {totalToPay}</Text>
                                            </Flex>
                                            {/* {!isMobileView && <Box bg={"#cde2f5"} borderRadius={"5"} mt={'3cm'} p={["20px", "0px"]}
                                                display={["block", "block", "none", "none", "block"]}>
                                                <Flex justifyContent={"space-between"} pt="2" pb="2" >
                                                    <Text pt={"4"} pl="3" ><AiOutlineInfoCircle fontWeight={"900"} fontSize={"20px"} /></Text>
                                                    <Spacer />
                                                    <Text fontSize={"12"} textAlign={"left"} pl="3" fontWeight={"900"}>FREE STANDARD DELIVERY TO INDIA WHEN YOU SPEND OVER ${totalToPay + 4}</Text>
                                                </Flex>
                                            </Box>} */}
                                        </VStack>
                                    </Box>
                                }
                            </Box>

                        </Box>

                    </Stack>

                </Box>

            </Center >
            {/* <Box h="8vh" mt={["140vh","121vh", "115vh", "78vh", "75vh", "75vh", "75vh"]} style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}   >
                <Center>
                    { }
                    <Text p="5" >FASHIQUE Help</Text> </Center>
            </Box> */}

        </Container >
    )
}

export default CheckOut