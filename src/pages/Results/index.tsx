import { Box } from "@chakra-ui/react";
import Storyboard from "../../Components/Storyboard";
import Images from "../../Components/Images";
import Video from "../../Components/Video";
import Script from "../../Components/Script";
import Poster from "../../Components/Poster";

const Results = () => {
  return (
    <Box
      width="100vw"
      height="100vh"
      overflowY="scroll"
      id="container"
      display="flex"
      flexDir="column"
      scrollSnapType="y mandatory"
    >
      <Storyboard />
      <Images />
      <Video />
      <Script />
      <Poster />
    </Box>
  );
};

export default Results;
