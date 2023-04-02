// import { Box } from '@chakra-ui/react'
import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHome, AiOutlineShoppingCart } from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { HiOutlineClipboardList } from 'react-icons/hi'
import { BsPlusCircle } from 'react-icons/bs'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import "../Style/Admindashboard.css"




const Adminsidebar = () => {
    return (
        <Box position={"fixed"} height={"100vh"} width={["10%","14%","18%"]}  backgroundColor={"#2d2d2d"} >
            <Flex className='adminsidebar' direction={"column"} justifyContent={"space-evenly"} >
                <Link to={"/admin"}>
                    <Flex className='labelcont' justifyContent={"space-evenly"} padding={"6%"}  mt={"1%"}  >
                        <Box w="10%"><AiOutlineHome className='icons' color='white' size={27} /></Box>
                        <Box w="40%"> <Text className='labels' color='white' >Home</Text></Box>
                    </Flex>
                </Link>
                <Link to={"/adminorders"}>
                    <Flex justifyContent={"space-evenly"} padding={"6%"} >
                        <Box w={"10%"} ><AiOutlineShoppingCart className='icons' color='white' size={27} /></Box>
                        <Box  w={"40%"}><Text className='labels' color='white' >Orders</Text></Box>
                    </Flex>
                </Link>
                <Link to="/admincustomers">
                    <Flex justifyContent={"space-evenly"} padding={"4%"} >
                        <Box w={"10%"}><FiUsers className='icons' color='white' size={25} /></Box>
                        <Box  w={"40%"}><Text className='labels' color='white' >Customers</Text></Box>
                    </Flex>
                </Link>

                <Accordion border={"0px solid #2d2d2d "} defaultIndex={[0]} allowMultiple>
                    <AccordionItem padding={"3%"}>
                        <h2>
                            <AccordionButton color={"white"}>
                                <Flex justifyContent="space-evenly" as="span" flex='1' textAlign='center'>
                                    <HiOutlineClipboardList className='icons' color='white' size={27} />
                                    <Text className='labels'  color='white' >Products</Text>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="center">
                           <Link to={"/adminproductmen"}>
                           <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>MEN</Text>
                           </Link>

                           <Link to={"/admin-product-women"}>
                           <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>WOMEN</Text>
                           </Link>
                           
                           <Link to={"/admin-product-shoes"}>
                           <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>SHOES</Text>
                           </Link>
                            

                            <Link to={"/admin-product-jacket"}>
                            <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>JACKETS</Text>
                            </Link>
                            
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem padding={"3%"}>
                        <h2>
                            <AccordionButton color={"white"}>
                                <Flex display={"flex"} justifyContent="space-evenly" as="span" flex='1' textAlign='center'>
                                    <BsPlusCircle className='icons' color='white' size={25} />
                                    <Text className='labels'  color='white' >Add <br/> Products</Text>
                                </Flex>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel textAlign={"center"} pb={4}>
                            <Link to={"/adminaddproductmen"}>
                            <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>MEN</Text>
                            </Link>
                            <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>WOMEN</Text>
                            <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>SHOES</Text>
                            <Text className='sections' color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>JACKETS</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Flex></Flex>
            </Flex>
        </Box>
    )
}

export default Adminsidebar
