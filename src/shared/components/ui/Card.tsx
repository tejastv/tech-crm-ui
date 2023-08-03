import { PropsWithChildren } from "react";

//Components

//Types
import { CardType } from "../..";

export const Card = (props: PropsWithChildren<CardType>) => {
  return (
    <>
      <div className="card card-default">
        <div className="card-header bg-danger">
          <h4 className="card-title"></h4>
          <h6 className="m-b-0 text-white">{props.config.mainHeading}</h6>
        </div>
        <div className="collapse show">
          <div className="card-body">{props.children}</div>
        </div>
      </div>
    </>
  );
};
