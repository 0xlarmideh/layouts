import { Box, Button, Divider, Image, Text } from '@chakra-ui/react';
import React from 'react'

const FourthFrame = (): JSX.Element => {
  return (
    <Box
      className="first-frame"
      bg="#EDE8DE"
      borderRadius="20px"
      pl="40px"
      pr="0px"
      h="634px"
      position="relative"
    >
      <Box pt="60px" fontWeight={600}>
        <Text mb="6px" fontSize="32px">
          We have all types of Flour
        </Text>
        <Text mb="30px" fontSize="18px">
          You can’t miss it, have your flour of any quantity delivered at your
          door step
        </Text>
        <Button
          borderRadius="0px"
          fontWeight="600"
          color="#ffffff"
          bg="#005308"
          fontSize="24px"
          p="24px"
        >
          Order Flour
        </Button>
      </Box>
      <Image
        src="../src/assets/4.png"
        position="absolute"
        right="0px"
        bottom="0px"
        w={{ base: "90%", md:"70%", xl: "90%" }}
      />
    </Box>
  );
};

export default FourthFrame