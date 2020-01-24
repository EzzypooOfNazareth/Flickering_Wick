import React from "react";
import styled from 'styled-components';

//comps
import SiteTitle from './headerComponents/SiteTitle';
import NaviBar from './headerComponents/NaviBar';

const StyledHeader = styled.div`
  width: 100%;
  background-color: white;
`;

const HeaderInner = styled.div`
  max-width: 1200px;
  display: flex;
  align-items: center;
  padding: 5px 0;
  margin: 0 auto;
`;

const Header = () => (
  <StyledHeader>
    <HeaderInner>
      <SiteTitle />
      <NaviBar />
    </HeaderInner>
  </StyledHeader>
)

export default Header
