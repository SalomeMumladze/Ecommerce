import React from "react";
import Header from "../layout/Header";
import Footer from "./Footer";

const HomePageLayout = ({ totalItems, children }) => {
  return (
    <>
      <Header totalItems={totalItems} />
      {children}
      <Footer />
    </>
  );
};

export default HomePageLayout;
