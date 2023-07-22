// MainLayout.tsx
import React from "react";

import Header from "../components/ui/header";

type Props = {
  children: string | JSX.Element | JSX.Element[];
}

const MainLayout: React.FC<Props> = (props) => {
  return (
    <>
      <div id="main-wrapper">
        <Header></Header>
        <div className="page-wrapper">
          <div className="container-fluid">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
