import React from 'react';
import styled from 'styled-components';

import Layout from "../components/PageLayout";
import SEO from "../components/seo";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    jusitfy-content: space-between;
    align-items: center;
    margin-top: 50px;
`;

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: start;
`;

const Left = styled.div`
    float: left;
    flex-basis: 450px;
    flex-grow: 1;
`;

const Right = styled.div`
    float: right;
    flex-basis: 450px;
`;

const Divider = styled.hr`
  width: 90%;
  margin: 25px auto;
  border: none;

  &:before {
    content: "";
    height: 1.25px;
    background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(147,147,147,1) 50%,rgba(0,0,0,0) 100%);

    display: block;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const ProductName = styled.h1`
  font-size: 30px;
  color: #343333;
  margin: 0 0 25px 0;
`;

const ProductImage = styled.img`
  width: 450px;
  height: 450px;
  object-fit: cover;
`;

const Price = styled.p`
  font-size: 26px;
  color: #343333;
  margin: 0;
`;

const Desc = styled.p`
  font-size: 14px;
  color: black;
  margin: 10px 0;
`;

const ProductPage = ({ pageContext }) => (
    <Layout>
        <SEO title={`Products: ${pageContext.name}`} />

        <Container>

            <Section>
                <Left>
                    <ProductName>{pageContext.name}</ProductName>
                    <ProductImage src={`${pageContext.images[0].src.source_url}`} />
                </Left>
                <Right>
                    <Price>${pageContext.prices.regular_price}</Price>
                    <Desc dangerouslySetInnerHTML={{__html: pageContext.description}} />
                </Right>
            </Section>
            <Divider />
            <Section>
            
            </Section>

        </Container>
    </Layout>
);

export default ProductPage;