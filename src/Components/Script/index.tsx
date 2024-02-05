import { Box, Container, Heading, Text } from "@chakra-ui/react";
import useStore from "../../Store/useStore";
import { VOICE_OVERS } from "../../Data/VoiceOverScript";
const Script = () => {
  const { prompt } = useStore();
  const script = VOICE_OVERS[prompt as keyof typeof VOICE_OVERS];
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
        textColor="gray.700"
        cursor="pointer"
        fontWeight="semibold"
        fontSize="1.8rem"
        height="10vh"
        paddingTop="2vh"
      >
        Voiceover Script
      </Heading>
      <Container
        height="90vh"
        display="flex"
        flexDir="column"
        alignItems="center"
        gap="2rem"
        overflowY="scroll"
        id="container"
        paddingBottom="2rem"
      >
        {script.map((p, index) => (
          <Text
            key={index + p}
            backgroundColor="lightblue"
            borderRadius="2xl"
            padding="1rem"
            fontSize="small"
            fontWeight="semibold"
          >
            {p}
          </Text>
        ))}
      </Container>
    </Box>
  );
};

export default Script;
