// HeaderLayout.tsx
import { PropsWithChildren } from "react";

//Components
import { Header } from "../shared";

export const HeaderLayout = (props: PropsWithChildren) => {
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
        <div className="page-wrapper d-block">
          <div className="container-fluid">{props.children}</div>
        </div>
      </div>
    </>
  );
};
