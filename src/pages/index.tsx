import FirstFrame from '../../components/FirstFrame'
import SecondFrame from "../../components/SecondFrame";
import ThirdFrame from "../../components/ThirdFrame";
import FourthFrame from "../../components/FourthFrame";
import { Box, Flex } from '@chakra-ui/react';

const Index = () => {
  return (
    <main>
      <Box
        className="container"
        display="flex"
        flexDir={{ base: "column", xl: "row" }}
        bg="black"
        alignItems="center"
        justifyContent="center"
        gap={4}
        p="40px"
      >
        <Flex
          w={{ base: "500px", md: "700px", xl: "50%" }}
          gap={4}
          alignItems="center"
          flexDir={{ sm: "column", lg: "row" }}
        >
          <Flex
            width="50%"
            alignItems="center"
            height="634px"
            justifyContent="space-between"
            flexDirection="column"
            gap={4}
          >
            <FirstFrame />
            <SecondFrame />
          </Flex>
          <ThirdFrame />
        </Flex>
        <Box w={{ base: "500px", md: "700px", xl: "50%" }}>
          <FourthFrame />
        </Box>
      </Box>
    </main>
  );
}

export default Index