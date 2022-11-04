import React from "react";
import useAnalytics from "../../hooks/useAnalytics";
import Header from "../Header";
import Navigation from "../Navigation";
import "./style.scss";

const MobileLayout = ({
  children,
  showHeader = true,
  showNavigation = true,
}) => {
  useAnalytics();

  return (
    <>
      {showHeader ? <Header /> : <></>}
      <div className="mobile-layout">
        <div className="mobile-body">{children}</div>
      </div>
      {showNavigation ? <Navigation /> : <></>}
    </>
  );
};
export default MobileLayout;
