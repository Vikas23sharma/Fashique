import { Box, Text } from '@chakra-ui/react'
import React from 'react'

const DeliveryAddressCard = ({ index, userDetails }) => {
    console.log(index, "index")
    console.log(userDetails)
    const { firstname, lastname, address, country, city, postcode, mobilenumber } = userDetails
    return (
        <Box mt="3" pl="5" >
            <Text>{firstname} {lastname}</Text>
            <Text>{address}</Text>
            <Text>{city}</Text>
            <Text>{country}</Text>
            <Text>{postcode}</Text>
            <Text>{mobilenumber}</Text>
        </Box>

    )
}

export default DeliveryAddressCard