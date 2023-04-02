import React from 'react'
import { Link } from "react-router-dom";
//import "../Style/Productcard.css";
import { Avatar, AvatarBadge, AvatarGroup, Box, Button } from '@chakra-ui/react'
import { Wrap,WrapItem } from '@chakra-ui/react';

export const AdminUserCard = ({email,firstname,lastname,id,password,dob,gender,token}) => {
   //var token = JSON.parse(localStorage.getItem("token"))
  return (

    <Box>
        <Wrap>
            <WrapItem>
                <Avatar name={firstname+" "+lastname} src='https://bit.ly/broken-link' />
            </WrapItem>
       </Wrap>
    
      <div className="card">
       <Link to={`/?token=${token}}`}>
        <h1>Name: {firstname}{" "}{lastname}</h1>
        </Link>
        <h3>Email: {email}</h3>
        <h3>Password: ****</h3>
        <h3>DOB: {dob}</h3>
        <h3>Gender: {gender}</h3>
        
      </div>
    
    </Box>
    
  )
}
