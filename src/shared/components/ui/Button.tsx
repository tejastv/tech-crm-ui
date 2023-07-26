import React, { PropsWithChildren } from "react";
import { ButtonType } from "../..";

//Types

export const Button: React.FC<PropsWithChildren<ButtonType>> = (props) => {
  return (
    <button
      className="btn btn-danger btn-sm"
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
