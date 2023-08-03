// CompanyMaster.tsx
import { PropsWithChildren } from "react";

export const PageWrapper = (props: PropsWithChildren) => {
  return <>{<div className="page-wrapper d-block">{props.children}</div>}</>;
};
