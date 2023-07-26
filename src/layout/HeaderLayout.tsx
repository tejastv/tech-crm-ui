// HeaderLayout.tsx
import React, { PropsWithChildren } from "react";

//Components
import { Header } from "../shared";

export const HeaderLayout: React.FC<PropsWithChildren> = (props) => {
  return (
    <React.Fragment>
      <div
        id="main-wrapper"
        data-layout="horizontal"
        data-navbarbg="skin1"
        data-sidebartype="mini-sidebar"
        data-boxed-layout="boxed"
      >
        <Header />
        <div className="page-wrapper d-block">
          <div className="container-fluid">{props.children}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
