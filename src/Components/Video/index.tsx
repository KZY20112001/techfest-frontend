import { Box, Heading } from "@chakra-ui/react";
import { VIDEO } from "../../Data/Video";
import ReactPlayer from "react-player";
import useStore from "../../Store/useStore";
const Video = () => {
  const { prompt } = useStore();
  const video = VIDEO[prompt as keyof typeof VIDEO];
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      scrollSnapAlign="center"
    >
      <Heading
        textColor="gray.700"
        cursor="pointer"
        fontWeight="semibold"
        fontSize="1.8rem"
        height="10vh"
        paddingTop="2vh"
      >
        Sample Video
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
