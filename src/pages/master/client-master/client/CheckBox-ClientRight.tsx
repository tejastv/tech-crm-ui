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

import { findInputError, isFormInvalid } from "@utils/index";
import { FormFieldType } from "@shared/index";

export const CheckboxClientRight = (props: FormFieldType) => {
  const {
    register,
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
            htmlFor={props.config.id}
          >
            {props.config.label}
          </Form.Label>
          <div className="col-sm-9">
            {props.config.options &&
              props.config.options.map((option) => {
                return (
                  <Form.Check 
                    className="form-check-inline"
                    value={option.value}
                    id={"" + option.value}
                    type="checkbox"
                    key={option.value}
                    label={option.label}
                    {...register(props.config.name, props.config.validation)}
                  />
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
