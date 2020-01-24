import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { Link } from 'gatsby';

import styled from 'styled-components';

import Fade from 'react-reveal';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HalfSplit = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  flex-basis: 48%;
  float: left;
`;

const SplitImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const SplitText = styled.div`
  flex-basis: 48%;
  float: right; 
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const SplitHeader = styled.h2`
  font-size: 26px;
  margin: 0;
  margin-bottom: 25px;
`;

const SplitBody = styled.p`
  font-size: 14px;
  margin: 0;
`;

const LearnButton = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  background-color: darkred;
  color: white;
  margin-top: 25px;
  transition: 0.2s ease;

  &:hover {
    background-color: red;
  }
`;

const Divider = styled.hr`
  width: 100%;
  margin: 25px auto;
  border: none;

  &:before {
    content: "";
    height: 1px;
    background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(147,147,147,1) 50%,rgba(0,0,0,0) 100%);

    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const WholeBlock = styled.div`
  width: 100%;
`;

const WholeImage = styled.img`
  width: 100%;
  height: auto;
`;

const ButtonWrap = styled.div`
  position: relative;
  width: 100%;
  bottom: 100px;
  text-align: center;
`;

const FloatingButton = styled(Link)`
  padding: 10px 15px;
  text-decoration: none;
  background-color: darkred;
  color: white;
  transition: 0.2s ease;
  font-size: 30px;

  margin: 0 auto;

  &:hover {
    background-color: red;
  }
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <HalfSplit>
        <ImageContainer>
          <Fade left>
            <SplitImage src={require('../images/green.jpg')} />
          </Fade>
        </ImageContainer>

        <SplitText>
          <SplitHeader>
            Find out what makes us Different by Design
          </SplitHeader>

          <SplitBody>
            Flickering Wick CFS is dedicated to keeping our planet green and completely eliminating
            chemicals in household candles. Click the button below to learn more about the advantages
            of soy-wax candles over traditional methods.
          </SplitBody>

          <LearnButton to={'/'}>Learn More</LearnButton>
        </SplitText>
      </HalfSplit>
      <Divider />

      <WholeBlock>
        <WholeImage src={require('../images/flickeringwickimage.jpg')} />
        <ButtonWrap>
          <FloatingButton>Click Here</FloatingButton>
        </ButtonWrap>
      </WholeBlock>
    </Container>
  </Layout>
);

export default IndexPage;
