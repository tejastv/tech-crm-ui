import React, { PropsWithChildren } from "react";

//Components

//Types
import { BorderLayout, CardType } from "../..";

export const Card: React.FC<PropsWithChildren<CardType>> = (props) => {
  return (
    <React.Fragment>
      <div className="card card-default">
        <div className="card-header bg-danger">
          <h4 className="card-title">
            <h6 className="m-b-0 text-white">{props.mainHeading}</h6>
          </h4>
        </div>
        <div className="collapse show">
          <div className="card-body">
            <BorderLayout heading={props.heading}>
              {props.children}
            </BorderLayout>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
