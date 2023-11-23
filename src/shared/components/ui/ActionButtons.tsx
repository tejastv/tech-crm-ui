import { Button } from "@shared/index";
import { useNavigate } from "react-router-dom";

export const ActionButtons = () => {
  const navigate = useNavigate();

  const routeHandler = () => {
    return navigate("..");
  };

  return (
    <>
      <div className="form-group row m-b-0 float-right">
        <div className="col-sm-12">
          <Button
            type="button"
            className="btn btn-secondary  waves-effect waves-light mr-2"
            onClick={routeHandler}
          >
            {" "}
            <i className="fa fa-close pr-1"></i> Cancel
          </Button>
          <Button
            type="submit"
            className="btn btn-danger waves-effect waves-light"
          >
            {" "}
            <i className="far fa-save pr-1"></i> Save
          </Button>
          {/* <a
            className="btn btn-dark  waves-effect waves-light"
            href="#"
            id="btnToTop"
          >
            <i className="fa fa-arrow-up"></i> Top
          </a> */}
        </div>
      </div>
    </>
  );
};
