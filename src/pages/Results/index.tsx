import { Container } from "@chakra-ui/react";
import Storyboard from "../../Components/Storyboard";

const Results = () => {
  return (
    <Container
      size="5xl"
      width="100vw"
      height="100vh"
      overflowY="scroll"
      id="container"
    >
      <Storyboard />
    </Container>
  );
};

export default Results;
