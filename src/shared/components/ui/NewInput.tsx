/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { MdError } from "react-icons/md";
import Form from "react-bootstrap/Form";

import { findInputError, isFormInvalid } from "@utils/index";
import { FormFieldType } from "@shared/index";

export const NewInput: React.FC<{
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
            {props.config.config.multiline ? (
              <Form.Control
                as="textarea"
                rows={1}
                placeholder={props.config.config.placeholder}
                id={props.config.config.id}
                {...props.register(
                  props.config.config.name,
                  props.config.config.validation
                )}
              />
            ) : (
              <Form.Control
                id={props.config.config.id}
                disabled={props.config.config.isDisabled}
                defaultValue={""}
                type={
                  props.config.config.type &&
                  props.config.config.type.startsWith("file")
                    ? props.config.config.type.split(":")[0]
                    : props.config.config.type
                }
                placeholder={props.config.config.placeholder}
                accept={
                  props.config.config.type &&
                  props.config.config.type.startsWith("file")
                    ? props.config.config.type.split(":")[1]
                    : ""
                }
                {...props.register(
                  props.config.config.name,
                  props.config.config.validation
                )}
              />
            )}
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
