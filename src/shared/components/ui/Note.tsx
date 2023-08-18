/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { useFormContext } from "react-hook-form";
import Form from "react-bootstrap/Form";

import { Note } from "@shared/index";
import { findInputError, isFormInvalid } from "@utils/index";

export const InputWithText = (props:Note) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          <Form.Label
            className="col-sm-3 control-label col-form-label">
          </Form.Label>
          <div className="col-sm-9">
          <Form.Text className="text-danger">
                
              </Form.Text>
            <p className="text-center m-b-0">
           <small id="name45" className="badge badge-default badge-primary form-text text-white">{props.config.name}</small></p>
          </div>
        </div>
      </div>
    </div>
  );
};
