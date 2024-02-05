import { Box, Heading, Image } from "@chakra-ui/react";
import { POSTER } from "../../Data/Poster";
import useStore from "../../Store/useStore";
const Poster = () => {
  const { prompt } = useStore();
  const poster = POSTER[prompt as keyof typeof POSTER];
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      scrollSnapAlign="center"
      justifyContent="center"
    >
      <Heading
        textColor="gray.600"
        cursor="pointer"
        fontWeight="semibold"
        fontSize="1.8rem"
        height="10vh"
        paddingTop="2vh"
      >
        Generated Poster
      </Heading>
      <Box
        height="90vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Image src={poster} alt="poster" width="600px" height="600px" />{" "}
      </Box>
    </Box>
  );
};

export default Poster;
