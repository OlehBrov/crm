import { Outlet } from "react-router-dom";
import logo from "../images/logo.svg";
// import { Suspense } from "react";
import {
  HeadingStyled,
  LinkStyled,
  LogoContainer,
  MainNav,
  SideBarContainer,
} from "../styles/SideBarStyled";

export const SharedLayout = () => {
  return (
    <>
      <SideBarContainer>
        <LogoContainer>
          <img src={logo} alt="Logo" />
          <HeadingStyled>Dashboard</HeadingStyled>
        </LogoContainer>
        <MainNav>
          <LinkStyled to={"/"}>Dashboard</LinkStyled>
          <LinkStyled to={"/"}>Product</LinkStyled>
          <LinkStyled to={"/customers"}>Customers</LinkStyled>
          <LinkStyled to={"/"}>Income</LinkStyled>
          <LinkStyled to={"/"}>Promote</LinkStyled>
          <LinkStyled to={"/"}>Help</LinkStyled>
        </MainNav>
      </SideBarContainer>
      <Outlet />
    </>
  );
};
