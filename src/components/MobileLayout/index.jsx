import React from "react";
import Header from "../Header";
import "./style.scss";

const MobileLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="mobile-layout">
        <div className="mobile-body">{children}</div>
      </div>
    </>
  );
};
export default MobileLayout;
