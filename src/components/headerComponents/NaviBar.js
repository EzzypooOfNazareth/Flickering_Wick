import { graphql, StaticQuery, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const NavItem = styled(Link)`
    font-size: 12px;
    margin: 0 5px;
    text-decoration: none;
    color: #343333;
    transition: 0.2s ease;

    &:hover {
        color: red;
    }
`;

const NaviBar = () => (
    <StaticQuery query={graphql`
    {
        allWordpressWpApiMenusMenusItems(filter: {
            name: {
                eq: "Header Menu"
            }
        }) {
          edges {
            node {
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `} render={props => (
        props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => <NavItem to={item.object_slug}>{item.title}</NavItem>)
    )} />
);

export default NaviBar;