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
import { default as AliceSelect } from "react-select";

import { findInputError, isFormInvalid } from "@utils/index";
import { FormFieldType } from "@shared/index";
import { useEffect } from "react";

export const Select = (props: FormFieldType) => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();
  const inputErrors = findInputError(errors, props.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  const handleSelectChange = (selectedOption: any) => {
    // Update the form value with the selected data
    if (props.onChangeHandler) {
      props.onChangeHandler(selectedOption);
    }
    setValue(props.config.name, selectedOption);
  };
  useEffect(() => {
    if (props.config.setData) {
      setValue(
        props.config.name,
        props.config.setData ? props.config.setData : null
      );
    }
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
              {props.config.validation?.required.value && <span>*</span>}
            </Form.Label>
          )}
          <div className="col-sm-9">
            {props.config.type?.split(":")[1] === "isMulti" ? (
              <Controller
                name={props.config.name}
                control={control}
                rules={props.config.validation}
                render={({ field }) => (
                  <AliceSelect
                    {...field}
                    isMulti
                    // isClearable
                    onChange={handleSelectChange} // Pass the onChange handler
                    options={props.config.options}
                    placeholder={props.config.placeholder}
                  />
                )}
              />
            ) : (
              <Controller
                name={props.config.name}
                control={control}
                rules={props.config.validation}
                render={({ field }) => (
                  <AliceSelect
                    {...field}
                    // isClearable
                    onChange={handleSelectChange} // Pass the onChange handler
                    options={props.config.options}
                    placeholder={props.config.placeholder}
                  />
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
