/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { Controller } from "react-hook-form";
import { MdError } from "react-icons/md";
import Form from "react-bootstrap/Form";

import { findInputError, isFormInvalid } from "@utils/index";
import { FormFieldType } from "@shared/index";

export const NewCheckbox: React.FC<{
  config: FormFieldType;
  register: any;
  errors: any;
  control: any;
  onChange?: (data: any) => void;
}> = (props) => {
  const inputErrors = findInputError(props.errors, props.config.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  const options =
    props.config.config.options && Object.values(props.config.config.options);
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          {props.config.config.label && (
            <Form.Label
              className="col-sm-3 control-label col-form-label"
              htmlFor={props.config.config.id}
            >
              {props.config.config.label}{" "}
              {props.config.config.validation?.required.value && <span>*</span>}
            </Form.Label>
          )}
          <div
            className={`${
              props.config.config.label ? "col-md-9" : "col-md-12"
            }`}
          >
            {options &&
              options.map((option, index) => {
                return (
                  <Controller
                    name={props.config.config.name}
                    control={props.control}
                    key={index + "" + option.value}
                    render={({ field }) => (
                      <Form.Check
                        type="checkbox"
                        id={`${props.config.config.name}-${index}`}
                        label={option.label}
                        {...field}
                        className="custom-checkbox"
                        value={option.value}
                        onChange={(e) => {
                          let value: any = e.target.value;
                          let result;
                          if (value === "true" || value === "false") {
                            result = e.target.checked;
                          } else if (!isNaN(Number(value))) {
                            result = Number(value);
                          } else {
                            result = value;
                          }
                          field.onChange(result);
                          if (props.onChange) {
                            props.onChange(result);
                          }
                        }}
                        checked={field.value}
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
  );
};
