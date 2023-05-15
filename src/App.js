import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/sidebar";
import { DataSection } from "./components/dataSection";
import { ContainerSatyled } from "./styles/AppStyles";

export const App =() => {
  return (
    <ContainerSatyled>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<DataSection/> }/>
        </Route>
      </Routes>
    </ContainerSatyled>
  );
}

