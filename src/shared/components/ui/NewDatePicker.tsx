/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { MdError } from "react-icons/md";
import Form from "react-bootstrap/Form";

import { FormFieldType } from "@shared/index";
import { findInputError, isFormInvalid } from "@utils/index";
import { Controller, useController } from "react-hook-form";

export const NewDatePicker: React.FC<{
  config: FormFieldType;
  register: any;
  errors: any;
  control: any;
  defaultValue?: any;
  minDate?: any;
  onChange?: (value: string) => void; // Define an onChange prop
}> = (props) => {
  const inputErrors = findInputError(props.errors, props.config.config.name);
  const isInvalid = isFormInvalid(inputErrors);
  const {
    field: { onChange },
  } = useController({
    control: props.control,
    name: props.config.config.name,
  });
  const handleSelectChange = (selectedOption: any) => {
    // Update the form value with the selected data
    onChange(selectedOption);
    if (props.onChange) {
      props.onChange(selectedOption.target.value);
    }
  };
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
            <Controller
              name={props.config.config.name}
              control={props.control}
              rules={props.config.config.validation}
              defaultValue={
                props.defaultValue
                  ? props.defaultValue
                  : new Date().toISOString().split("T")[0]
              }
              render={({ field }) => (
                <Form.Control
                  {...field}
                  id={props.config.config.id}
                  type="date"
                  min={props.minDate}
                  placeholder={props.config.config.placeholder}
                  onChange={handleSelectChange} // Pass the onChange handler
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
