import { Box, Heading } from "@chakra-ui/react";
import { video } from "../../Assets/Videos";
import ReactPlayer from "react-player";
const Video = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-around"
    >
      <Heading
        textColor="gray.700"
        cursor="pointer"
        fontWeight="semibold"
        fontSize="1.8rem"
        height="10vh"
        paddingTop="2vh"
      >
        Video Player
      </Heading>
      <Box height="90vh" paddingTop="2vh">
        <ReactPlayer
          height="600px"
          width="700px"
          url={video}
          playing={true}
          loop={true}
          controls={true}
          light={true}
        />
      </Box>
    </Box>
  );
};

export default Video;
