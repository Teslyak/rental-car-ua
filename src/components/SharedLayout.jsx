//import { Suspense } from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};
