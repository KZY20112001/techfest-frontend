import { Box } from "@chakra-ui/react";
import Storyboard from "../../Components/Storyboard";
import Images from "../../Components/Images";

const Results = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      overflowY="scroll"
      id="container"
      display="flex"
      flexDir="column"
      gap="2rem"
    >
      <Storyboard />
      <Images />
    </Box>
  );
};

export default Results;
