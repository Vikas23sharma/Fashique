import React from 'react';
import { Spinner, Box } from '@chakra-ui/react';

const SpinnerWithLetter = ({ letter, ...props }) => (
  <Box display="flex" justifyContent="center" alignItems="center">
    <Spinner {...props} />
    <Box
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      fontWeight="bold"
      fontSize="2em"
 
    >
      {letter}
    </Box>
  </Box>
);

export default function LoadingWithLetter() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <SpinnerWithLetter
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='gray'
        size='xl'
        letter='F'
      />
    </div>
  );
}
