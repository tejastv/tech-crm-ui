import { PropsWithChildren } from "react";

import { DivLayoutType } from "@shared/index";

export const DivLayoutClient = (props: PropsWithChildren<DivLayoutType>) => {
  return (
    <>
         <h6 className="card-title m-t-20">{props.heading}</h6>
        {props.children}
      
    </>
  );
};
