import { PropsWithChildren } from "react";

import { ButtonType } from "@shared/index";

export const Button = (props: PropsWithChildren<ButtonType>) => {
  return (
    <button
      className={props.className}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
      name={props.name}
    >
      {props.children}
    </button>
  );
};
