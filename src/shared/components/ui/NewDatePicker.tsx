/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { MdError } from "react-icons/md";
import Form from "react-bootstrap/Form";

import { FormFieldType } from "@shared/index";
import { findInputError, isFormInvalid } from "@utils/index";

export const NewDatePicker: React.FC<{
  config: FormFieldType;
  register: any;
  errors: any;
}> = (props) => {
  const inputErrors = findInputError(props.errors, props.config.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          {props.config.config.label && (
            <Form.Label
              className="col-sm-3 control-label col-form-label"
              htmlFor={props.config.config.name}
            >
              {props.config.config.label}{" "}
              {props.config.config.validation?.required.value && <span>*</span>}
            </Form.Label>
          )}
          <div className="col-sm-9">
            <Form.Control
              id={props.config.config.id}
              type="date"
              placeholder={props.config.config.placeholder}
              {...props.register(
                props.config.config.name,
                props.config.config.validation
              )}
            />
            {isInvalid && (
              <Form.Text className="text-danger">
                <MdError />
                {inputErrors.error.message}
              </Form.Text>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
