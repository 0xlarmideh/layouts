import { Box, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react'

const ThirdFrame = (): JSX.Element => {
  return (
    <Box
      className="first-frame"
      bg="#EDE8DE"
      borderRadius="20px"
      pl="40px"
      pr="0px"
      m="50px"
      h="634px"
      w="486px"
      position="relative"
      overflow="hidden"

    >
      <Box w="60%" mt="60px" fontWeight={600}>
        <Text mb="30px" fontSize="32px">
          Premium Taste
        </Text>
        <Text pb="20px" mb="20px" borderBottom="1px solid black" fontSize="18px">Enjoy your dish with best deals</Text>
        
        <Text fontSize="18px">Starts from ₦13,000</Text>
      </Box>
      <Image src="../src/assets/2.png" position="absolute" left="131px" top="195px"   />
    </Box>
  );
};

export default ThirdFrame