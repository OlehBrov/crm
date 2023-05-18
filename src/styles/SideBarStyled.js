import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import styled from "styled-components";


export const SideBarContainer = styled.aside`

display: flex;
background: #FFFFFF;
box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
flex-direction: column;
height: 100%;
padding: 36px 28px;
`

export const MainNav = styled.nav`
display: flex;
flex-direction: column;

gap: 18px;
`
export const LinkStyled = styled(NavLink)`
width: 250px;
padding: 11px 8px 11px 11px;
border-radius: 8px;
font-weight: 500;
font-size: 14px;
line-height: 1.5;
letter-spacing: -0.01em;
color: #9197B3;
list-style: none;
text-decoration: none;
&:after{
    content: url('../images/chevron-right.svg');
    position: absolute;
    display: inline-block;
    width: 16px;
    height: 16px;
    fill: #FFFFFF;
    color: #FFFFFF;
    /* background-image: url('../images/logo.svg'); */
    background-size: 24px 24px;
}
&.active{
    background: #5932EA;
    color: #FFFFFF;

}

`
export const LogoContainer = styled.div`
display: flex;
margin-bottom: 64px;
`

export const HeadingStyled = styled.h1`
font-weight: 600;
font-size: 26px;
line-height: 1.5;
letter-spacing: 0.01em;
color: #000000;
margin: 0;
`