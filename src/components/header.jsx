import { HeadingStyled, LogoContainer } from "../styles/SideBarStyled";
import logo from "../images/logo.svg";
import styled from "styled-components";
export const Header = () => {
  return (
    <HeaderStyled>
      <LogoContainer>
        <img src={logo} alt="Logo" />
              <HeadingStyled>Dashboard</HeadingStyled>
               <HeaderText>Hello, Elon,</HeaderText>
      </LogoContainer>
    </HeaderStyled>
  );
};

export const HeaderStyled = styled.div`
    width: 100%;
`
export const HeaderText = styled.p`
    margin: 0;
`