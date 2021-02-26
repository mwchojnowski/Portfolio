import React from "react";
import { Wrapper, Container, Text } from "./Styles";

export default function footer() {
  let year = new Date().getFullYear();
  return (
    <Wrapper>
      <Container>
        <Text>@ {year} Mateusz Chojnowski All Rights Reserved</Text>
      </Container>
    </Wrapper>
  );
}
