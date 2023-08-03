import React, { PropsWithChildren } from "react";
import { BorderLayoutType } from "../..";

//Types

export const BorderLayout: React.FC<PropsWithChildren<BorderLayoutType>> = (
  props
) => {
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
