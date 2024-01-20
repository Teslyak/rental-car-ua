//import { Suspense } from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Wrap } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Wrap>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </Wrap>
  );
};
