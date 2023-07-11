import React from "react";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";
import { Link } from "react-router-dom";


export const Nav = () => {
  return (
    <Head>
      <LogoContainer to={"/"}>
        <GiKnifeFork />
        <Logo>delicious!</Logo>
      </LogoContainer>

     
      
     

    </Head>
  );
};

const Head = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  

  svg {
    font-size: 2rem;
  }
`;

const Logo = styled.div`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: normal;
  font-family: "Lobster Two", cursive;
`;


export default Nav;
