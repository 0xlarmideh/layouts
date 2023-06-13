import { Box, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react'

const SecondFrame = (): JSX.Element => {
  return (
    <Box
      className="first-frame"
      bg="#EDE8DE"
      borderRadius="20px"
      pl="40px"
      pr="0px"
      m="50px"
      h="300px"
      w="486px"
      display="flex"
      alignItems="flex-end"
    >
      <Box my="auto" fontWeight={600}>
        <Text mb="30px" fontSize="32px">
          Premium Taste
        </Text>
        <Text pb="20px" mb="20px" borderBottom="1px solid black" fontSize="18px">Enjoy your dish with best deals</Text>
        
        <Text fontSize="18px">Starts from ₦13,000</Text>
      </Box>
      <Image src="../src/assets/3.png" w="200px"   />
    </Box>
  );
};

export default SecondFrame