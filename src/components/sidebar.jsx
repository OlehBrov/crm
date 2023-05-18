import { Outlet } from "react-router-dom";

// import { Suspense } from "react";
import {
  HeadingStyled,
  LinkStyled,
  LogoContainer,
  MainNav,
  SideBarContainer,
} from "../styles/SideBarStyled";
import { useMediaQuery } from "react-responsive";
import { Header } from "./header";
import styled from "styled-components";

export const SharedLayout = () => {
  const isDesktop = useMediaQuery({ minWidth: 1220 });

  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1219 });
  const isMobile = useMediaQuery({ minWidth: 480, maxWidth: 767 });
  // const isRetina = useMediaQuery({ minResolution: '2dppx' })
  return (
    <> <Header />
      <div>
      {!isMobile && (
        <SideBarContainer>

          <MainNav>
            <LinkStyled to={"/"}>Dashboard</LinkStyled>
            <LinkStyled to={"/"}>Product</LinkStyled>
            <LinkStyled to={"/customers"}>Customers</LinkStyled>
            <LinkStyled to={"/"}>Income</LinkStyled>
            <LinkStyled to={"/"}>Promote</LinkStyled>
            <LinkStyled to={"/"}>Help</LinkStyled>
          </MainNav>
        </SideBarContainer>
      )}
        <Outlet />
        </div>
    </>
  );
};


