import React, { PropsWithChildren } from "react";

//Components
import BorderLayout from "./Border-layout";

//Types
import { CardType } from "..";

const Card: React.FC<PropsWithChildren<CardType>> = (props) => {
  return (
    <>
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
    </>
  );
};

export default Card;
