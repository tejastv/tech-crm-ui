/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { Controller, useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { findInputError, isFormInvalid } from "../../../utils";
import { InputType } from "../..";
import Form from "react-bootstrap/Form";
import { default as AliceSelect } from "react-select";

export const Select = (props: InputType) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const inputErrors = findInputError(errors, props.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          <Form.Label
            className="col-sm-3 control-label col-form-label"
            htmlFor="name"
          >
            {props.config.label}
          </Form.Label>
          <div className="col-sm-9">
            <Controller
              name={props.config.name}
              control={control}
              rules={props.config.validation}
              render={({ field }) => (
                <AliceSelect
                  {...field}
                  options={props.config.options}
                  placeholder={props.config.placeholder}
                />
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
