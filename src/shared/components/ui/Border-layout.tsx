import { PropsWithChildren } from "react";

import { BorderLayoutType } from "@shared/index";

export const BorderLayout = (props: PropsWithChildren<BorderLayoutType>) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <fieldset className="scheduler-border">
            <legend className="scheduler-border">{props.heading}</legend>
            {props.children}
          </fieldset>
        </div>
      </div>
    </>
  );
};
