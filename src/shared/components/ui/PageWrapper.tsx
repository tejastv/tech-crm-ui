// CompanyMaster.tsx
import React, { PropsWithChildren } from "react";

export const PageWrapper: React.FC<PropsWithChildren> = (props) => {
  return <>{<div className="page-wrapper d-block">{props.children}</div>}</>;
};
