import React from "react";
import useAnalytics from "../../hooks/useAnalytics";
import Header from "../Header";
import "./style.scss";

const MobileLayout = ({ children }) => {
  useAnalytics();

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
