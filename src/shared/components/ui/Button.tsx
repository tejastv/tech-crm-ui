import { PropsWithChildren } from "react";
import { ButtonType } from "../..";

//Types

export const Button = (props: PropsWithChildren<ButtonType>) => {
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
