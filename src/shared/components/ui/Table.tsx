// CompanyMaster.tsx
import React, { PropsWithChildren } from "react";

export const Table: React.FC<PropsWithChildren> = (props) => {
  return <>{<div className="table-responsive">{props.children}</div>}</>;
};
