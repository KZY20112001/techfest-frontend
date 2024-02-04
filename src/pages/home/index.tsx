import { Box, Button, Container, Input, Text } from "@chakra-ui/react";
import { useState } from "react";

const HomePage = () => {
  const [prompt, setPrompt] = useState("");
  console.log(prompt);
  return (
    <Container
      width="100%"
      height="100vh"
      bgGradient="linear(to-tr, #a6c1e1, #a0d08d)"
      overflow="hidden"
      maxW="full"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box marginTop="20">
        <Text fontWeight="bold" color="orange.100" fontSize="6xl" noOfLines={2}>
          Use Our Latest LLM Models to Generate Scenes
        </Text>
      </Box>
      <Box marginTop="20">
        <Text fontWeight="bold" color="orange.200" fontSize="5xl" noOfLines={2}>
          Your ideal script could be one prompt away...
        </Text>
      </Box>
      <Box marginTop="20" display="flex" flexDir="column" width="lg" gap={5}>
        <Input
          rounded="lg"
          onChange={(e) => setPrompt(e.target.value)}
          textColor="whitesmoke"
        />
        <Button size="lg" colorScheme="yellow" color="black">
          <Text fontSize="2xl" padding="0 10px" color="gray.700">
            Generate...
          </Text>
        </Button>
      </Box>
    </Container>
  );
};

export default HomePage;
