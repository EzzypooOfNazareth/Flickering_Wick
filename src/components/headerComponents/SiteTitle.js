import { graphql, StaticQuery, Link } from "gatsby";
import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    flex-grow: 1;
`;

const LogoImage = styled.img`
    height: 75px;
    width: auto;
`;

const SiteTitle = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpMedia(filter: {categories: {elemMatch: {name: {eq: "Logo"}}}}) {
            edges {
              node {
                media_type
                path
                source_url
                caption
                categories {
                  name
                }
              }
            }
          }
    }
    `} render={props => (
        <ImageContainer>
          <Link to={'/'}>
              <LogoImage src={props.allWordpressWpMedia.edges[0].node.source_url} alt={props.allWordpressWpMedia.edges[0].node.media_type} />
            </Link>
        </ImageContainer>
    )} />
);

export default SiteTitle;