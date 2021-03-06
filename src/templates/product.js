import React from 'react';
import styled from 'styled-components';

import Layout from "../components/PageLayout";
import SEO from "../components/seo";

import Fade from 'react-reveal';

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
    flex-wrap: wrap;
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

const VertDivider = styled.div`
  height: 380px;
  width: 1px;
  display: block;
  background-color: black;
  margin: auto 30px auto 0;
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
  font-size: 24px;
  color: gray;
  margin: 0 0 25px 0;

  font-weight: ${props => props.onSale ? 400 : 700};
  text-decoration: ${props => props.onSale ? "line-through" : "hidden"};
`;

const SalePrice = styled.p`
  font-size: 28px;
  color: crimson;
  font-weight: bold;
  margin: 0 0 25px 0;

  display: ${props => props.onSale ? "inline-block" : "none" }
`;

const Desc = styled.p`
  font-size: 16px;
  color: gray;
  font-style: italic;
  margin: 10px 0;
`;

const BuyButton = styled.a`
  padding: 10px 25px;
  text-decoration: none;
  color: white;
  background-color: darkred;
  transition: 0.2s ease;
  cursor: pointer;

  &:hover {
      background-color: red;
  }
`;

const Input = styled.input`
  width: 50px;
  margin: 0 0 25px 0;
  color: black;
`;

const ProductPage = ({ pageContext }) => (
    <Layout>
        <SEO title={`Products: ${pageContext.name}`} />

        <Container>

            <Section>
                <Left>
                    <Fade left>
                        <ProductImage src={`${pageContext.images[0].src.source_url}`} />
                    </Fade>
                </Left>
                <VertDivider />
                <Right>
                    <Fade bottom>
                        <ProductName>{pageContext.name}</ProductName>
                        <Desc dangerouslySetInnerHTML={{ __html: pageContext.description }} />
                        <Price onSale={pageContext.on_sale}>${pageContext.prices.regular_price} <SalePrice onSale={pageContext.on_sale}>${pageContext.prices.sale_price}</SalePrice></Price>
                        <Desc>Quantity:</Desc>
                        <Input type="number" />
                        <BuyButton>Add to Cart</BuyButton>
                    </Fade>
                </Right>
            </Section>
            <Divider />
            <Section>

            </Section>

        </Container>
    </Layout>
);

export default ProductPage;