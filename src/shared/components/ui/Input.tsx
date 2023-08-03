/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import React from "react";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { findInputError, isFormInvalid } from "../../../utils";
import { InputType } from "../..";
import Form from "react-bootstrap/Form";

export const Input: React.FC<InputType> = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          <Form.Label
            className="col-sm-3 control-label col-form-label"
            htmlFor="name"
          >
            {label}
          </Form.Label>
          <div className="col-sm-9">
            {multiline ? (
              <Form.Group
                placeholder={placeholder}
                id={id}
                {...register(name, validation)}
              />
            ) : (
              <Form.Control
                id={id}
                type={type}
                placeholder={placeholder}
                {...register(name, validation)}
              />
            )}
            {isInvalid && (
              <Form.Control.Feedback type="invalid">
                <MdError />
                {inputErrors.error.message}
              </Form.Control.Feedback>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
