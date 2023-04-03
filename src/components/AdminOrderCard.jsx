import React from 'react'
import { Avatar, AvatarBadge, AvatarGroup, Box, Button } from '@chakra-ui/react'
import { Wrap,WrapItem } from '@chakra-ui/react';
import "../Style/Admindashboard.css"


export const AdminOrderCard = ({name,email,id,title,brand,amount,category,gender}) => {
  return (
    <div >
      <Wrap>
            <WrapItem>
                <Avatar name={name} src='https://bit.ly/broken-link' />
            </WrapItem>
       </Wrap>
        <h1>Name: {name}</h1>
       
        <h3>Email: {email}</h3>
        <h3>Title:{title}</h3>
        <h3>Brand: {brand}</h3>
        <h3>Category: {category}</h3>
        <h3>Gender: {gender}</h3>
        <h3>Total Amount:${amount}</h3>
        
        
      </div>
  )
}
