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
import { useEffect } from "react";

export const Input = (props: FormFieldType) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const inputErrors = findInputError(errors, props.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  useEffect(() => {
    // if (props.config.setData) {
    setValue(props.config.name, props.config.setData);
    // }
  }, [props.config.setData]);
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
                disabled={props.config.isDisabled}
                type={
                  props.config.type && props.config.type.startsWith("file")
                    ? props.config.type.split(":")[0]
                    : props.config.type
                }
                placeholder={props.config.placeholder}
                accept={
                  props.config.type && props.config.type.startsWith("file")
                    ? props.config.type.split(":")[1]
                    : ""
                }
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
