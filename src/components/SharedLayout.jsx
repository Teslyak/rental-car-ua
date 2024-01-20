//import { Suspense } from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Wrap } from "./SharedLayout.styled";
import { useSelector } from "react-redux";
import { selectIsLoading } from "../redux/advertsCatalog/selectors";

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);
  return (
    <Wrap>
      <Header />
      <Outlet />
      {!isLoading ? <Footer /> : null}
      <Toaster />
    </Wrap>
  );
};
