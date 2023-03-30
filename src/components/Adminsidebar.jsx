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


const Adminsidebar = () => {
    return (
        <Box height={"100%"} backgroundColor={"#2d2d2d"} >
            <Flex direction={"column"} justifyContent={"space-evenly"} >
                <Link to={"/admin"}>
                    <Flex justifyContent={"space-evenly"} padding={"6%"}  >
                        <Box w={"10%"}><AiOutlineHome color='white' size={27} /></Box>
                        <Box w={"40%"}> <Text color='white' fontSize={"xl"}>Home</Text></Box>
                    </Flex>
                </Link>
                <Link to={"/adminorders"}>
                    <Flex justifyContent={"space-evenly"} padding={"6%"} >
                        <Box w={"10%"} ><AiOutlineShoppingCart color='white' size={27} /></Box>
                        <Box w={"40%"}><Text color='white' fontSize={"xl"}>Orders</Text></Box>
                    </Flex>
                </Link>
                <Link to="/admincustomers">
                    <Flex justifyContent={"space-evenly"} padding={"4%"} >
                        <Box w={"10%"}><FiUsers color='white' size={25} /></Box>
                        <Box w={"40%"}><Text color='white' fontSize={"xl"}>Customers</Text></Box>
                    </Flex>
                </Link>

                <Accordion border={"0px solid #2d2d2d "} defaultIndex={[0]} allowMultiple>
                    <AccordionItem padding={"3%"}>
                        <h2>
                            <AccordionButton color={"white"}>
                                <Box display={"flex"} justifyContent="space-evenly" as="span" flex='1' textAlign='center'>
                                    <Box w={"22%"}><HiOutlineClipboardList color='white' size={27} /></Box>
                                    <Box w={"42%"}><Text color='white' fontSize={"xl"}>Products</Text></Box>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign="center">
                           <Link to={"/adminproductmen"}>
                           <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>MEN</Text>
                           </Link>
                            <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>WOMEN</Text>
                            <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>SHOES</Text>
                            <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>JACKETS</Text>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem padding={"3%"}>
                        <h2>
                            <AccordionButton color={"white"}>
                                <Box display={"flex"} justifyContent="space-evenly" as="span" flex='1' textAlign='center'>
                                    <Box w={"22%"}><BsPlusCircle color='white' size={25} /></Box>
                                    <Box w={"42%"}><Text color='white' fontSize={"xl"}>Add Products</Text></Box>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel textAlign={"center"} pb={4}>
                            <Link to={"/adminaddproductmen"}>
                            <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>MEN</Text>
                            </Link>
                            <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>WOMEN</Text>
                            <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>SHOES</Text>
                            <Text color='white' boxShadow="rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px" padding="2%" _hover={{ cursor: "pointer", fontSize: "2xl" }}>JACKETS</Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

                <Flex></Flex>
            </Flex>
        </Box>
    )
}

export default Adminsidebar
