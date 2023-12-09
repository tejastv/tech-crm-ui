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

export const NewSingleCheckbox: React.FC<{
  config: FormFieldType;
  register: any;
  errors: any;
  control: any;
  onChange?: (data: any) => void;
}> = (props) => {
  const inputErrors = findInputError(props.errors, props.config.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          <div className="col-sm-12">
            {/* <Controller
              name={props.config.name}
              control={control}
              render={({ field }) => (
                <Form.Check
                  id={props.config.name}
                  type="checkbox"
                  label={props.config.label}
                  {...field}
                  {...register(props.config.name, props.config.validation)}
                  onChange={(e: any) => {
                    field.onChange(e.target.checked); // Toggle the field value
                  }}
                />
              )}
            ></Controller> */}

            <Controller
              name={props.config.config.name}
              control={props.control}
              render={({ field }) => (
                <Form.Check
                  type="checkbox"
                  label={props.config.config.label}
                  {...field}
                  className="custom-checkbox"
                  onChange={(e) => {
                    let value: any = e.target.value;
                    if (typeof eval(value) === "boolean") {
                      value = e.target.checked;
                    }
                    field.onChange(value);
                    if (props.onChange) {
                      props.onChange(value);
                    }
                  }}
                  defaultChecked={field.value}
                />
              )}
            ></Controller>
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
