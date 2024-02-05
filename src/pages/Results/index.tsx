import { Box } from "@chakra-ui/react";
import Storyboard from "../../Components/Storyboard";
import Images from "../../Components/Images";
import Video from "../../Components/Video";

const Results = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      overflowY="scroll"
      id="container"
      display="flex"
      flexDir="column"
    >
      <Storyboard />
      <Images />
      <Video />
    </Box>
  );
};

export default Results;
