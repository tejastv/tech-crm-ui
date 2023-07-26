import React, { PropsWithChildren } from "react";
import { BorderLayoutType } from "../..";

//Types

export const BorderLayout: React.FC<PropsWithChildren<BorderLayoutType>> = (
  props
) => {
  return (
    <>
      <fieldset className="scheduler-border">
        <legend className="scheduler-border">{props.heading}</legend>
        {props.children}
      </fieldset>
    </>
  );
};
