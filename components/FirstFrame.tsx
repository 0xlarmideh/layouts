import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const FirstFrame = ():JSX.Element => {
  return (
    <Box
      className="first-frame"
      bg="#FFC700"
      borderRadius="20px"
      pl="40px"
      pr="0px"
      m="50px"
      h="300px"
      w="486px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box fontWeight={600}>
        <Text mb="30px" fontSize="27px">
          Premium Taste
        </Text>
        <Text lineHeight="54px" fontSize="54">1 million people</Text>
      </Box>
      <Image src="../src/assets/1.png" height="100%" />
    </Box>
  );
}

export default FirstFrame