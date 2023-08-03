// CompanyMaster.tsx
import { PropsWithChildren } from "react";

export const Table = (props: PropsWithChildren) => {
  return <>{<div className="table-responsive">{props.children}</div>}</>;
};
