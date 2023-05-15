import { NavLink, Outlet } from "react-router-dom";
import logo from "../images/logo.svg";
import { Suspense } from "react";
import { SideBarContainer } from "../styles/SideBarStyled";
import { ContainerSatyled } from "../styles/AppStyles";

export const SharedLayout = () => {
  return (
    <ContainerSatyled>
      <SideBarContainer>
        <div>
          <div>
            <img src={logo} alt="Logo" />
            <h1>Dashboard</h1>
          </div>
          <nav></nav>
        </div>
        {/* <Suspense> */}
        {/* </Suspense> */}
      </SideBarContainer>
      <Outlet />
    </ContainerSatyled>
  );
};
