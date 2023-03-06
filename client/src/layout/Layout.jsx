import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ToTheTop from "../hooks/ToTheTop";
import ScrollToTop from "../components/ScrollToTop";
const Layout = () => {
  return (
    <div className=" bg-gray-50  ">
      <Header />
      <Outlet />
      <Footer />
      <ToTheTop />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
