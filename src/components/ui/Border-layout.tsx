import React, { PropsWithChildren } from "react";

//Types
import { BorderLayoutType } from "..";

const BorderLayout: React.FC<PropsWithChildren<BorderLayoutType>> = (props) => {
  return (
    <>
      <fieldset className="scheduler-border">
        <legend className="scheduler-border">{props.heading}</legend>
        {props.children}
      </fieldset>
    </>
  );
};

export default BorderLayout;
