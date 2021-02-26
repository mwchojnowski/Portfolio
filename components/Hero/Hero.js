import React, { useEffect, useState } from "react";
import {
  Container,
  Wrapper,
  LeftContainer,
  Subtitle,
  Title,
  Name,
  Paragraph,
  ButtonsContainer,
  OutlineButton,
  FillButton,
  SocialText,
  SocialIconsContainer,
  SocialImg,
} from "./Styles";
import { AiFillGithub } from "react-icons/ai";

export default function Hero(props) {
  return (
    <Wrapper>
      <Container>
        <LeftContainer>
          <Subtitle>Hello</Subtitle>
          <Title>
            I am <Name>Mateusz Chojnowski</Name>
            <br />
            I&#x27;m a Front End Developer
          </Title>
          <Paragraph>
            I specialize in developing exceptionally modern websites,
            applications and everything in between!
          </Paragraph>
          <ButtonsContainer>
            <OutlineButton href="" target="_blank">
              View Resume
            </OutlineButton>
            <FillButton href="mailto: mateusz.w.chojnowski@gmail.com">
              Hire me!
            </FillButton>
          </ButtonsContainer>
        </LeftContainer>
      </Container>
    </Wrapper>
  );
}
