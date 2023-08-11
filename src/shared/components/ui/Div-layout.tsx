import { PropsWithChildren } from "react";

import { DivLayoutType } from "@shared/index";

export const DivLayout = (props: PropsWithChildren<DivLayoutType>) => {
  return (
    <>
      <div className="col-md-2 col-xs-12">
        <h6 className="card-title">{props.heading}</h6>
        {props.children}
      </div>
    </>
  );
};
