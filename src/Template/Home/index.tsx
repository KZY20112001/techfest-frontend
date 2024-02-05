import { Container } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  Component: JSX.Element;
};
const HomeTemplate: FC<Props> = (props) => {
  const { Component } = props;
  return (
    <Container
      width="100%"
      height="100%"
      bgGradient="linear(to-tr, #a6c1e1, #a0d08d)"
      overflow="hidden"
      maxW="full"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      {Component}
    </Container>
  );
};

export default HomeTemplate;
