import React from "react";

import Layout from "../components/PageLayout";
import SEO from "../components/seo";

import styled from 'styled-components';

const StyledTitle = styled.h1`
    margin: 25px 0 0 0;
    font-size: 30px;

    &:after {
        content: "";
        height: 1.25px;
        background: linear-gradient(to right,  rgba(0,0,0,0) 0%,rgba(147,147,147,1) 50%,rgba(0,0,0,0) 100%);
    
        display: block;
        margin-bottom: 10px;
        margin-top: 10px;
      }
`;

const BodyContent = styled.p`
      font-size: 14px;
      color: #343333;
`;

const Post = ({ pageContext }) => (
  <Layout>
    <SEO title="Post" />
    
    <StyledTitle dangerouslySetInnerHTML={{__html: pageContext.title}} />
    <BodyContent dangerouslySetInnerHTML={{__html: pageContext.content}} />
  </Layout>
);

export default Post;
