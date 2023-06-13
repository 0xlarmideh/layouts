import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const FirstFrame = ():JSX.Element => {
  return (
    <Box
      className="first-frame"
      bg="#FFC700"
      borderRadius="20px"
      pl="20px"
      pr="0px"
      height="50%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      position="relative"
      w="100%"
      overflow="hidden"
    >
      <Box fontWeight={600}>
        <Text mb="30px" fontSize="18px">
          Premium Taste
        </Text>
        <Text w="55%" lineHeight="38px" fontSize="36px">
          1 million people
        </Text>
      </Box>
      
        <Image src="../src/assets/1.png" h="100%" position="absolute" right="-60px" />

    </Box>
  );
}

export default FirstFrame