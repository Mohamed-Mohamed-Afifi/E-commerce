import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/" className="logo__container ">
        <h2 className="logo__title">Afify</h2>
        <CgShoppingCart className="logo__img" />
        <h2 className="logo__title">Store</h2>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 10rem;
  }
`;
export default Header;