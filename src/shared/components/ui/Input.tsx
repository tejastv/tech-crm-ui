/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import Form from "react-bootstrap/Form";

import { FormFieldType } from "@shared/index";
import { findInputError, isFormInvalid } from "@utils/index";

export const Input = (props: FormFieldType) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputErrors = findInputError(errors, props.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          {props.config.label && (
            <Form.Label
              className="col-sm-3 control-label col-form-label"
              htmlFor={props.config.name}
            >
              {props.config.label}
            </Form.Label>
          )}
          <div className="col-sm-9">
            {props.config.multiline ? (
              <Form.Control
                as="textarea"
                rows={1}
                placeholder={props.config.placeholder}
                id={props.config.id}
                {...register(props.config.name, props.config.validation)}
              />
            ) : (
              <Form.Control
                id={props.config.id}
                type={props.config.type}
                placeholder={props.config.placeholder}
                {...register(props.config.name, props.config.validation)}
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
