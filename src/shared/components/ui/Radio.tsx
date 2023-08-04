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
import Form from "react-bootstrap/Form";

import { findInputError, isFormInvalid } from "@utils/index";
import { RadioType } from "@shared/index";

export const CheckboxGroup: React.FC<RadioType> = ({
  name,
  label,
  options,
  type,
  validation,
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
            {options.map((option) => {
              return (
                <Form.Check
                  type={type}
                  value={option.value}
                  name={option.name}
                  {...register(name, validation)}
                >
                  {option.name}
                </Form.Check>
              );
            })}
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
