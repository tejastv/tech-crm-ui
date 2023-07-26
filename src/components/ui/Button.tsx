import React, { PropsWithChildren } from "react";

//Types
import { ButtonType } from "..";

const Button: React.FC<PropsWithChildren<ButtonType>> = (props) => {
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

export default Button;
