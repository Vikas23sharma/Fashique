import { Box, Button, FormControl, FormLabel, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { getUserCred, patchUserAddress } from '../Redux/UserAddress/action'
import { useDispatch } from 'react-redux'
import { getUserDetails } from '../Redux/Login/action'

const initialstate = {
    firstname: "",
    lastname: "",
    city: "",
    mobilenumber: "",
    address: "",
    postcode: "",
    country: ""
}
const DeliveryAddressForm = ({setAddressPresent}) => {
    const [userID, setUserID] = useState(0)
    const [useraddress, setUseraddress] = useState(initialstate)
    const dispatch = useDispatch()


    const handleChange = (e) => {
        // console.log(e.target.value)
        const { name, value } = e.target
        let values = { ...useraddress, [name]: value }
        setUseraddress(values)
    }
    var token = JSON.parse(localStorage.getItem("token"))
    // console.log(token)
    var userid = JSON.parse(localStorage.getItem("UserDetails"))
    var userId = JSON.parse(localStorage.getItem("userId") || 0)
    userid.forEach((items) => {
        // console.log(items)
        if (items.token === token) {
            // console.log(items.id)
            userId = items.id
            localStorage.setItem("userId", JSON.stringify(userId))
        }
    })
    function refresh() {
        setTimeout(() => {
            dispatch(getUserCred())
            setAddressPresent(true)

            // localStorage.setItem("addresspres", JSON.stringify(userId))
           localStorage.setItem('addresspresent', JSON.stringify(true));

        }, 1000)
    }


    console.log(userId, "line30")
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(patchUserAddress(useraddress, userId))
        setUseraddress(initialstate)
        // console.log(useraddress)
        refresh()
    }

    return (
        <Box>
            <Text fontWeight={"bold"} pt={5} pb={5}>Add Address</Text>
            <Box>
                <form action="" onSubmit={handleSubmit}>
                    <FormControl id="firstname" >
                        <FormLabel pt="2" color={"#545555"}>FIRSTNAME :</FormLabel>
                        <Input type='text' name="firstname" placeholder="firstname"
                            // value={firstname}
                            onChange={handleChange} />
                    </FormControl>
                    <FormControl id="lastname">
                        <FormLabel pt="2" color={"#545555"}>LASTNAME :</FormLabel>
                        <Input type='text' name="lastname" placeholder="lastname"
                            // values={lastname}
                            onChange={handleChange} />
                    </FormControl>
                    <FormControl id="mobile">
                        <FormLabel pt="2" color={"#545555"}>MOBILE :</FormLabel>
                        <InputGroup>
                            <InputLeftAddon children='+91' />
                            <Input type='number' placeholder='phone number' name="mobilenumber"
                                onChange={handleChange}
                            // value={mobilenumber}
                            />
                        </InputGroup>
                    </FormControl>
                    <FormControl id="address">
                        <FormLabel pt="2" color={"#545555"}>ADDRESS :</FormLabel>
                        <Input type='text' name="address" placeholder='address' onChange={handleChange}
                        // value={address}
                        />
                    </FormControl>
                    <FormControl id="firstname">
                        <FormLabel pt="2" color={"#545555"}>CITY :</FormLabel>
                        <Input type='text' name="city" placeholder='city' onChange={handleChange}
                        // value={city}
                        />
                    </FormControl>
                    <FormControl id="country">
                        <FormLabel pt="2" color={"#545555"}>COUNTRY :</FormLabel>
                        <Input type='text' name="country" placeholder='country' onChange={handleChange}
                        // value={country}
                        />
                    </FormControl>
                    <FormControl id="postcode">
                        <FormLabel pt="2" color={"#545555"}>POST CODE :</FormLabel>
                        <Input type='number' name="postcode"
                            placeholder='post code'
                            // value={postcode}
                            width={"50%"}
                            css={{
                                '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
                                    '-webkit-appearance': 'none',
                                    margin: 0
                                },
                                '&[type=number]': {
                                    '-moz-appearance': 'textfield'
                                }
                            }} onChange={handleChange}
                        />
                    </FormControl>
                    <FormControl pt="5">
                        <Button color={"white"} bg="black" type='submit'>DELIVER TO THIS ADDRESS</Button>
                    </FormControl>
                </form>
            </Box>

        </Box>

    )
}

export default DeliveryAddressForm