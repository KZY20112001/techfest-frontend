import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import { STORYBOARD } from "../../Data/Storyboard";
import useStore from "../../Store/useStore";

const Storyboard = () => {
  const { prompt } = useStore();
  const data = STORYBOARD[prompt as keyof typeof STORYBOARD];
  return (
    <Container
      width="100%"
      height="100vh"
      padding="0.5rem 0"
      display="flex"
      flexDirection="column"
      scrollSnapAlign="center"
    >
      <Heading
        textColor="gray.700"
        cursor="pointer"
        fontWeight="semibold"
        fontSize="1.8rem"
        marginBottom="0.5rem"
      >
        Storyboard
      </Heading>
      <Container
        overflowY="scroll"
        id="container"
        gap="1.5rem"
        padding="1.5rem 0"
        display="flex"
        flexDirection="column"
      >
        {data.map((story, index) => (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="0.5rem"
            bgGradient="linear(to-tr, #81a8d8, #badcad)"
            textColor="gray.800"
            padding="0.75rem 0.5rem"
            borderRadius="xl"
            key={story.content + story.scene}
          >
            <Heading
              borderRadius="lg"
              width="10rem"
              fontWeight="semibold"
              backgroundColor="green.100"
              padding="0.5rem 0"
              fontSize="1.25rem"
              cursor="pointer"
            >
              Scene {index + 1}
            </Heading>
            <Box
              borderRadius="lg"
              cursor="pointer"
              padding="0.5rem 0.25rem"
              backgroundColor="blue.100"
              fontSize="1rem"
            >
              <Text>{story.scene}</Text>
              <Divider
                orientation="horizontal"
                height="2px"
                margin="0.25rem 0"
                backgroundColor="gray.400"
              />
              <Text fontStyle="italic" fontWeight="semibold">
                Content: <span>{story.content}</span>
              </Text>
            </Box>
          </Box>
        ))}
      </Container>
    </Container>
  );
};

export default Storyboard;
