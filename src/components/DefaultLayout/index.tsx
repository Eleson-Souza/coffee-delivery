import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { DefaultLayoutContainer } from "./styled";

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />
      <Outlet />
    </DefaultLayoutContainer>
  );
}
