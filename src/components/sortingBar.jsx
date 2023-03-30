import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import "../Style/sortingBar.css";



const SortingBar = () => {
  return (
    <Box
      
      className="sortingBox"
    >
      <select className="selectId">
        <option>Sort</option>
        <option>Price High to Low</option>
        <option>Price Low to High</option>
        <option>Recommended</option>
      </select>
      <select className="selectId">
        <option>Brand</option>
        <option>ASOS DESIGN</option>
        <option>ASOS LUXE</option>
        <option>Nike</option>
      </select>
      <select className="selectId">
        <option>Discount</option>
        <option>20%</option>
        <option>30%</option>
        <option>45%</option>
        <option>60%</option>
      </select>
      <select className="selectId">
        <option>Size</option>
        <option>Small</option>
        <option>Medium</option>
        <option>Large</option>
        <option>Extra Large</option>
        <option>Extra Extra Large</option>
      </select>
    </Box>
  );
}

export default SortingBar