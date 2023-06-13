import { Box, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react'

const ThirdFrame = (): JSX.Element => {
  return (
    <Box
      className="first-frame"
      bg="#EDE8DE"
      borderRadius="20px"
      pl="20px"
      pr="0px"
      h="634px"
      position="relative"
      overflow="hidden"
      width="50%"
    >
      <Box w="70%" mt="60px" fontWeight={600}>
        <Text mb="30px" fontSize="24px">
          Premium Taste
        </Text>
        <Text pb="20px" mb="20px" borderBottom="1px solid black" fontSize="18px">Enjoy your dish with best deals</Text>
        
        <Text fontSize="18px">Starts from ₦13,000</Text>
      </Box>
      <Image src="../src/assets/2.png" position="absolute" right="0px" bottom="0px" w="80%"   />
    </Box>
  );
};

export default ThirdFrame