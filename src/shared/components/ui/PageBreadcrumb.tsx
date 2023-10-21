import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

//Types
import { PageBreadcrumbType, buttonConfig } from "@shared/index";

export const PageBreadcrumb: React.FC<PageBreadcrumbType> = (props) => {
  const navigate = useNavigate();

  const routeHandler = (button: buttonConfig) => {
    button.btnRoute && navigate(button.btnRoute);
  };

  return (
    <>
      <div className="page-breadcrumb pb-4">
        <div className="row">
          <div className="col-5 align-self-center">
            <h4 className="page-title">{props.config.pageHeading}</h4>
          </div>
          <div className="col-7 align-self-center">
            <div className="d-flex no-block justify-content-end align-items-center">
              {props.config.buttons &&
                props.config.buttons.map((button) => (
                  <Button
                    variant="primary"
                    className="btn waves-effect waves-light mr-2 btn-danger btn-sm"
                    onClick={() => routeHandler(button)}
                  >
                    {button.btnTitle}
                  </Button>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
