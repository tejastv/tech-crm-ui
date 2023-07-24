// MainLayout.tsx
import React from "react";
import Header from "../components/ui/Header";

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const MainLayout: React.FC<Props> = (props) => {
  return (
    <>
      <div
        id="main-wrapper"
        data-layout="horizontal"
        data-navbarbg="skin1"
        data-sidebartype="mini-sidebar"
        data-boxed-layout="boxed"
      >
        <Header />
        <div className="page-wrapper">
          <div className="container-fluid">{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
