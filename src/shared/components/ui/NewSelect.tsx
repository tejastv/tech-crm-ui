/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import { Controller, useController } from "react-hook-form";
import { MdError } from "react-icons/md";
import Form from "react-bootstrap/Form";
import { default as AliceSelect } from "react-select";

import { findInputError, isFormInvalid } from "@utils/index";
import { FormFieldType } from "@shared/index";

export const NewSelect: React.FC<{
  config: FormFieldType;
  register: any;
  errors: any;
  control: any;
  onChange?: (data: any) => void;
  onInputChange?: (data: any) => void;
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
      props.onChange(selectedOption);
    }
  };

  const handleInputChange = (inputValue: any) => {
    if (props.onInputChange) {
      props.onInputChange(inputValue);
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
            {props.config.config.type?.split(":")[1] === "isMulti" ? (
              <Controller
                name={props.config.config.name}
                control={props.control}
                rules={props.config.config.validation}
                render={({ field }) => (
                  <AliceSelect
                    {...field}
                    isMulti
                    // isClearable
                    onChange={handleSelectChange} // Pass the onChange handler
                    options={props.config.config.options}
                    placeholder={props.config.config.placeholder}
                  />
                )}
              />
            ) : (
              <Controller
                name={props.config.config.name}
                control={props.control}
                rules={props.config.config.validation}
                render={({ field }) => (
                  <AliceSelect
                    // isClearable
                    {...field}
                    defaultValue={[]}
                    options={props.config.config.options}
                    placeholder={props.config.config.placeholder}
                    onChange={handleSelectChange} // Pass the onChange handler
                    onInputChange={handleInputChange}
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
