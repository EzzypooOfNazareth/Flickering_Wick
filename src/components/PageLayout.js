/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import "./fonts.css"

import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'williams-caslon-text';
  }

  p, a, span, button, caption, label, input {
    font-family: 'quatro';
  }
`;

const BodyWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {


  return (
    <>
      <GlobalStyles />
      <Header />

      <BodyWrapper>
        <main>{children}</main>
      </BodyWrapper>

      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

export default Layout
