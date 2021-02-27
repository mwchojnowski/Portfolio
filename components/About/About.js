import React from "react";
import {
  Container,
  Subtitle,
  Wrapper,
  Title,
  AboutContainer,
  LeftContainer,
  Paragraph,
  List,
  ListItem,
  BulletPoint,
  ListItemText,
  RightContainer,
  ImageContainer,
  ImageOverlay,
  ImageCornerBlock,
  Image,
} from "./Styles";

export default function About(props) {
  return (
    <Wrapper id="Skills">
      <Container>
        <Subtitle>WHAT I DO</Subtitle>
        <Title>I specialize in Front End Development</Title>
        <AboutContainer>
          <LeftContainer>
            <Paragraph>
              I'm Mateusz, a front end developer based in New York, NY. I am
              passionate about creating modern and responsive websites.
              <br />
              <br />
              On every project I work on, I strive to build products that
              provide pixel-perfect, optimized, performant experiences. 
              <br />
              <br />
              <br />
            </Paragraph>
          </LeftContainer>
          <RightContainer>
          Here are a few skills I&#x27;ve been using recently:
          <List>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>React</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>HTML &amp; (S)CSS</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>Javascript (ES6+)</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>Next.js</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>Responsive design</ListItemText>
              </ListItem>
              <ListItem>
                <BulletPoint src="/Bullet-Point.svg" />
                <ListItemText>Back-end Basics</ListItemText>
              </ListItem>
            </List>
          </RightContainer>
        </AboutContainer>
      </Container>
    </Wrapper>
  );
}
