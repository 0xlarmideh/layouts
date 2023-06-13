import FirstFrame from '../../components/FirstFrame'
import SecondFrame from "../../components/SecondFrame";
import ThirdFrame from "../../components/ThirdFrame";
import FourthFrame from "../../components/FourthFrame";
import { Box } from '@chakra-ui/react';

const Index = () => {
  return (
    <main>
      <Box display="flex" flexDirection="column" alignItems="center">
        <FirstFrame />
        <SecondFrame />
        <ThirdFrame />
        <FourthFrame />
      </Box>
    </main>
  );
}

export default Index