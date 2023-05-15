import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/sidebar";
import { DataSection } from "./components/dataSection";
import { ContainerStyled } from "./styles/AppStyles";
import { Home } from "./Pages/Home";

export const App = () => {
  return (
    <ContainerStyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="customers" element={<DataSection />} />
        </Route>
      </Routes>
    </ContainerStyled>
  );
};
