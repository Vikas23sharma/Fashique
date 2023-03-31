import {
    Box, Center, Container, HStack, Spacer, Stack, Text, Image, useMediaQuery,
    Button, FormControl, FormLabel, MenuItem, Select, Divider, VStack, Flex
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CheckoutProductsCard from './CheckoutProductsCard';
import LoadingWithLetter from './LoadingWithLetter';
import "../Style/checkout.css"
import { AiOutlineInfoCircle } from 'react-icons/ai';

const CheckOut = () => {
    const [textChange, setTextChange] = useState("Change")
    const [isSelectActive, setIsSelectActive] = useState(false);
    // const [isLoading, setIsLoading] = useState(true)
    const [totalPrice, setTotalPrice] = useState(0);
    const [deliveryPrice, setDeliveryPrice] = useState(11.05);
    const [totalToPay, setTotalToPay] = useState(0)
    const [isMobileView] = useMediaQuery("(max-width: 930px)")
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

    const checkoutProducts = [
        {
            "id": 101,
            "image": "https://images.asos-media.com/products/topman-crochet-shirt-in-green-and-ecru/204385540-2?$n_320w$&wid=317&fit=constrain",
            "title": " Topman crochet shirt in green and ecru",
            "brand": "Topman",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 65,
            "category": "T-shirt"
        },
        {
            "id": 102,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/201602748-2?$n_320w$&wid=317&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 30,
            "gender": "men",
            "style": "half sleeve",
            "size": "M",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 103,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-white/201613574-2?$n_320w$&wid=317&fit=constrain  ",
            "title": "Topman classic t-shirt in white",
            "brand": "Topman",
            "discount": 45,
            "gender": "men",
            "style": "half sleeve",
            "size": "L",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 104,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/203515869-1-black?$n_240w$&wid=168&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 60,
            "gender": "men",
            "style": "half sleeve",
            "size": "XL",
            "price": 15,
            "category": "T-shirt"
        },
        {
            "id": 105,
            "image": "https://images.asos-media.com/products/new-look-crew-neck-t-shirt-in-blue/203829520-1-midblue?$n_240w$&wid=168&fit=constrain",
            "title": "New Look crew neck t-shirt in blue",
            "brand": "New Look",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 17,
            "category": "T-shirt"
        },
        {
            "id": 101,
            "image": "https://images.asos-media.com/products/topman-crochet-shirt-in-green-and-ecru/204385540-2?$n_320w$&wid=317&fit=constrain",
            "title": " Topman crochet shirt in green and ecru",
            "brand": "Topman",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 65,
            "category": "T-shirt"
        },
        {
            "id": 102,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/201602748-2?$n_320w$&wid=317&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 30,
            "gender": "men",
            "style": "half sleeve",
            "size": "M",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 103,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-white/201613574-2?$n_320w$&wid=317&fit=constrain  ",
            "title": "Topman classic t-shirt in white",
            "brand": "Topman",
            "discount": 45,
            "gender": "men",
            "style": "half sleeve",
            "size": "L",
            "price": 13,
            "category": "T-shirt"
        },
        {
            "id": 104,
            "image": "https://images.asos-media.com/products/topman-classic-t-shirt-in-black/203515869-1-black?$n_240w$&wid=168&fit=constrain",
            "title": "Topman classic t-shirt in black",
            "brand": "Topman",
            "discount": 60,
            "gender": "men",
            "style": "half sleeve",
            "size": "XL",
            "price": 15,
            "category": "T-shirt"
        },
        {
            "id": 105,
            "image": "https://images.asos-media.com/products/new-look-crew-neck-t-shirt-in-blue/203829520-1-midblue?$n_240w$&wid=168&fit=constrain",
            "title": "New Look crew neck t-shirt in blue",
            "brand": "New Look",
            "discount": 20,
            "gender": "men",
            "style": "half sleeve",
            "size": "S",
            "price": 17,
            "category": "T-shirt"
        }
    ]



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



    // useEffect(() => {
    //     setTimeout(() => {
    //         setIsLoading(!isLoading)
    //     }, 1000)
    // }, [])

    const handleCountryChange = (e) => {
        const selectedCountryIndex = e.target.value;
        const selectedCountry = countries[selectedCountryIndex];
        setCountry(selectedCountry);
    };
    const { name, image } = country

    // isLoading === true ? (<div style={{ display: "flex", height: "100vh", justifyContent: "center", alignItems: "center" }}>

    //     <LoadingWithLetter />
    // </div>) : 

    console.log(checkoutProducts, "line129")
    return (
        <Container maxW={"100%"}>
            <Center>
                <Box width={["100%", "80%", "80%", "90%", "60%",]} p="5">
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
                <Box width={["700px", "100%", "80%", "100%", "60%"]} p="5">

                    <Stack direction={["column", "column", "column", "row"]}>
                        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            w={["100%", "100%", "100%", "1600px", "800px"]} maxH={["17vh", "17vh", "25vh", "20vh", "17vh"]} mt="0"
                        >
                            <Box pl={["5", "10"]} pt="5" pb={"10"}>
                                <Text fontSize={["md", "xl"]} fontWeight="550">DELIVERY COUNTRY :</Text>
                                <HStack>
                                    <Box width={"40px"} pt="5">
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
                                    <Box pr={["3", "10", "10", "10"]} pt="5"> <Button onClick={handleButtonClick}>{textChange}</Button>
                                    </Box>
                                </HStack>
                            </Box>
                            <Box border={"1px solid black"} h={["100vh", "100vh", "50vh", "50vh", "10vh"]} mt={["55vh", "58vh", "65vh", "5vh", "0vh"]}>
                                <Box>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, laudantium molestias ab quasi consequuntur eum illo facilis eos voluptatum quae corporis veritatis. Nostrum commodi facilis fugiat repellendus esse recusandae expedita?
                                    Assumenda temporibus sed similique inventore. Accusamus voluptatem provident officia exercitationem nemo, ut et at magnam, reprehenderit possimus tempora necessitatibus fugiat! Perspiciatis reprehenderit in, quam at eum facere nulla laboriosam veritatis.
                                    Eum laborum eaque, necessitatibus dolorum illo assumenda, minus nesciunt doloremque consequatur ipsa, neque doloribus veniam praesentium impedit reiciendis maiores voluptatum? Libero, quisquam iure! Recusandae modi magnam voluptatum excepturi temporibus animi.
                                    Ad, error consequatur culpa minus fuga odio quod veniam vero voluptates fugit unde architecto corporis laborum, quam doloremque, harum voluptatibus aliquid. Dolor accusamus quos vero aut maiores illum non cumque.
                                    Animi quisquam dicta quaerat ad labore harum, sequi nemo, reprehenderit amet corrupti incidunt quasi debitis. Earum recusandae tenetur error est, ipsum facilis deserunt, dignissimos blanditiis, obcaecati nostrum eos vero iste?
                                    Necessitatibus, quidem quas unde facere nostrum ab rerum deleniti at magni, amet distinctio impedit quisquam fugiat numquam aperiam hic placeat consequatur sit provident harum. Officia eaque voluptatem doloribus! Quia, consequatur.
                                    Labore iure qui ratione dolore commodi eligendi at quae illum ut dolorum non odio vitae eaque quibusdam, corporis accusamus laborum architecto sapiente atque distinctio doloremque voluptatibus saepe voluptatum? Veniam, atque.
                                    Architecto possimus nam sapiente libero, voluptas amet sint officia ipsa et cum alias quisquam animi! Alias, ducimus nemo magni vero voluptatum nam iste deleniti et quo quae asperiores maiores aspernatur.
                                    Magni soluta enim minus iusto quis aliquam eos officia numquam quidem, ex voluptatum repellat eligendi cumque, repudiandae aspernatur accusantium corrupti consequuntur eius blanditiis. Fugit dolorem rem asperiores vitae quasi nesciunt!
                                    Dicta temporibus adipisci repellat velit maxime ad commodi sunt praesentium, architecto sed debitis eligendi quibusdam ipsam itaque id accusantium modi reprehenderit eum, autem magni odio eos nobis esse facilis? Natus.</Box>
                            </Box>
                        </Box>

                        <Box style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", }}
                            w={["100%", "100%", "100%", "100%", "400px"]}
                            minH={["10vh", "10vh", "10vh", "10vh"]}
                            margin={["auto", "auto", "auto", "auto"]}
                            marginTop={["50vh", "50vh", "50vh", "50vh", "10vh"]}
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
                                            {!isMobileView && <Box bg={"#cde2f5"} borderRadius={"5"} p={["20px", "0px"]}
                                                display={["block", "block", "none", "none", "block"]}>
                                                <Flex justifyContent={"space-between"} pt="2" pb="2" >
                                                    <Text pt={"4"} pl="3" ><AiOutlineInfoCircle fontWeight={"900"} fontSize={"20px"} /></Text>
                                                    <Spacer />
                                                    <Text fontSize={"12"} textAlign={"left"} pl="3" fontWeight={"900"}>FREE STANDARD DELIVERY TO INDIA WHEN YOU SPEND OVER ${totalToPay + 4}</Text>
                                                </Flex>
                                            </Box>}
                                        </VStack>
                                    </Box>
                                }
                            </Box>

                        </Box>

                    </Stack>
                    {/* <Box border={"1px solid black"} h="10">

                    </Box> */}
                </Box>
            </Center >
        </Container >
    )
}

export default CheckOut