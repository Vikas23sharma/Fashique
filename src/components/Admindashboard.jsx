import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import "../Style/Admindashboard.css"

const Admindashboard = () => {
    return (

        <Box className='dash' >
            <Heading color={"#2d2d2d"}>DASHBOARD</Heading>
            <Text color={"#2d2d2d"} fontWeight={"semibold"}>WELCOME ADMIN</Text>
            <SimpleGrid className='admingrid' marginTop={"4%"}  spacing={16}>
                <Box  textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px"  >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Total<br/>  Sales</Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>$566,788</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
                <Box textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Total <br/>  Expenditure</Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>$66,744</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
                <Box textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Net <br/>  Profit</Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>$500,448</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
                <Box textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Average <br/>  Order Value</Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>$1,788</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
                <Box textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Customer <br/>  Acquisition</Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>12%</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
                <Box textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Return <br/> Rate</Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>3%</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
                <Box textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Growth <br/>  Rate</Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>22%</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
                <Box textAlign={"center"} padding={"3%"} boxShadow="rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px" >
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"2xl"}>Marketing <br/> Expenditure </Text>
                    <Text color={"#2d2d2d"} fontWeight={"medium"} fontSize={"3xl"}>$12,311</Text>
                    <Text>This Month</Text>
                    <Text>View Report</Text>
                </Box>
            </SimpleGrid>
        </Box>

    )
}

export default Admindashboard
