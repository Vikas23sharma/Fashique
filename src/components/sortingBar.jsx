import { Box, Flex } from '@chakra-ui/react';
import React from 'react'
import "../Style/sortingBar.css";



const SortingBar = ({brands,size,order,discount,brand,sizes}) => {
  return (
    <Box className="sortingBox">
      <select className="selectId" onChange={(e) => order(e.target.value)}>
        <option>Sort</option>
        <option value="desc">Price High to Low</option>
        <option value="asc">Price Low to High</option>
      </select>
      <select className="selectId" onChange={(e) => brand(e.target.value)}>
        {brands.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
      <select className="selectId" onChange={(e) => discount(e.target.value)}>
        <option>Discount</option>
        <option value={"20"}>20%</option>
        <option value={"30"}>30%</option>
        <option value={"45"}>45%</option>
        <option value={"60"}>60%</option>
      </select>
      <select className="selectId" onChange={(e) => sizes(e.target.value)}>
        {size.map((el) => (
          <option value={el}>{el}</option>
        ))}
      </select>
    </Box>
  );
}

export default SortingBar