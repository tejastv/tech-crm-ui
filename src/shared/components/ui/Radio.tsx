/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { Controller, useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import Form from "react-bootstrap/Form";

import { findInputError, isFormInvalid } from "@utils/index";
import { FormFieldType } from "@shared/index";
import { useEffect } from "react";

export const Radio = (props: FormFieldType) => {
  const {
    register,
    formState: { errors },
    setValue,
    control,
  } = useFormContext();

  const inputErrors = findInputError(errors, props.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  useEffect(() => {
    if (props.config.setData) {
      setValue(props.config.name, props.config.setData);
    }
  }, [props.config.setData]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          <Form.Label
            className="col-sm-3 control-label col-form-label"
            htmlFor={props.config.id}
          >
            {props.config.label}
          </Form.Label>
          <div className="col-sm-9">
            <div className="input-group">
              {props.config.options &&
                props.config.options.map((option, index) => {
                  return (
                    <Controller
                      name={props.config.name}
                      control={control}
                      key={index + "" + option.value}
                      render={({ field }) => (
                        <Form.Check
                          {...field}
                          value={option.value}
                          id={"" + option.value}
                          type="radio"
                          className="mr-3"
                          label={option.label}
                          {...register(
                            props.config.name,
                            props.config.validation
                          )}
                          onChange={(e: any) => {
                            field.onChange(
                              () => (props.config.setData = e.target.value)
                            ); // Toggle the field value
                          }}
                        />
                      )}
                    ></Controller>
                  );
                })}
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
    </div>
  );
};
