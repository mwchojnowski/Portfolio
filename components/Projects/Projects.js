import React, { useEffect, useState } from "react";
import {
  Container,
  ImageTag,
  Image,
  ProjectBody,
  ProjectItemContainer,
  ProjectsContainer,
  ProjectTitle,
  Subtitle,
  Title,
  Wrapper,
  LinksContainer,
  LinkImage,
  ProjectDetails,
} from "./Styles";
import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

export default function Projects(props) {
  return (
    <Wrapper id="Projects">
      <Container>
        <Subtitle>MY PROJECTS</Subtitle>
        <Title>Projects I've Worked On</Title>
        <ProjectsContainer>
          <ProjectItemContainer>
            <ImageTag
              href="http://snapsite.vercel.app"
              target="_blank"
            >
              <Image src="/SnapSite.png" loading="lazy" alt="" />
            </ImageTag>
            <ProjectTitle>SnapSite</ProjectTitle>
            <ProjectBody>
              Built a modern responsive Tech site with using React
              and Next.js with multiple responsive pages.
            </ProjectBody>
            <ProjectDetails>
              React - Next.js - Javascript - HTML/CSS 
            </ProjectDetails>
            <LinksContainer>
              <LinkImage href="https://github.com/mwchojnowski/SnapSite-Project" target="_blank">
                <AiFillGithub />
              </LinkImage>
              <LinkImage
                href='http://snapsite.vercel.app'
                target="_blank"
              >
                <FiExternalLink />
              </LinkImage>
            </LinksContainer>
          </ProjectItemContainer>
          <ProjectItemContainer>
            <ImageTag href="http://shoppeur.vercel.app" target="_blank">
              <Image src="/Shoppeur.png" loading="lazy" alt="" />
            </ImageTag>
            <ProjectTitle>Shoppeur</ProjectTitle>
            <ProjectBody>
              Built a modern responsive landing page called Shoppeur using React
              and Next.js with complete cart functionality. 
            </ProjectBody>
            <ProjectDetails>
              React - Next.js - Javascript - HTML/CSS
            </ProjectDetails>
            <LinksContainer>
              <LinkImage href="https://github.com/mwchojnowski/Shoppeur" target="_blank">
                <AiFillGithub />
              </LinkImage>
              <LinkImage href="http://shoppeur.vercel.app" target="_blank">
                <FiExternalLink />
              </LinkImage>
            </LinksContainer>
          </ProjectItemContainer>
        </ProjectsContainer>
      </Container>
    </Wrapper>
  );
}
