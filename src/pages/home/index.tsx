import { Box, Button, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [showError, setShowError] = useState(false);
  console.log(prompt);

  const handleClick = () => {
    if (prompt !== "") {
      navigate("/results");
    } else {
      setShowError(true);
    }
  };
  return (
    <>
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
        <Button
          size="lg"
          colorScheme="yellow"
          color="black"
          onClick={handleClick}
        >
          <Text fontSize="2xl" padding="0 10px" color="gray.700">
            Generate...
          </Text>
        </Button>
      </Box>

      {showError && prompt === "" && (
        <Text
          color="red.600"
          fontSize="xl"
          fontWeight="semibold"
          cursor="pointer"
          paddingTop="1rem"
          onClick={() => setShowError(false)}
        >
          Input is Empty!!!
        </Text>
      )}
    </>
  );
};

export default Home;
