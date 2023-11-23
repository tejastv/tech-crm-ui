import { PropsWithChildren } from "react";

import { CardType } from "@shared/index";

export const CardLayOut = (props: PropsWithChildren) => {
  return (
    <>
      <div className="col-12">
        <div className="accordion pt-20" id="accordionExample">
          <div className="card">
            <div className="card-header" id="headingOne">
              {/* <h2 className="mb-0"> */}
              {/* <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne">
                <i className="fa fa-plus"></i> {props.children}</button>*/}
              {props.children}
              {/* </h2> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
