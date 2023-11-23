/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import Form from "react-bootstrap/Form";

import { Note } from "@shared/index";

export const InputWithText = (props: Note) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          {/* <Form.Label
            className="col-sm-6 control-label col-form-label">
          </Form.Label> */}
          <div className="col-sm-12">
            <Form.Text className="text-danger"></Form.Text>
            {/* <p className="text-center m-b-0"> */}
            {/* <small id="name45" className="badge badge-default badge-primary form-text text-white"> */}
            {props.config.name}
            {/* </small> */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
