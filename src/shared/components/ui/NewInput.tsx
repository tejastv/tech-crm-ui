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

export const NewInput: React.FC<{
  name: string;
  placeholder: string;
  label: string;
  register: any;
  errors: any;
  required: boolean;
  type: string;
  validationSchema: any;
}> = (props) => {
  const {
    // register,
    formState: { errors },
    // setValue,
  } = useFormContext();
  const inputErrors = findInputError(errors, props.name);
  const isInvalid = isFormInvalid(inputErrors);
  //   useEffect(() => {
  //     if (props.config.setData) {
  //       setValue(props.config.name, props.config.setData);
  //     }
  //   }, [props.config.setData]);
  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          {props.label && (
            <Form.Label
              className="col-sm-3 control-label col-form-label"
              htmlFor={props.name}
            >
              {props.label}{" "}
              {props.validationSchema?.required.value && <span>*</span>}
            </Form.Label>
          )}
          <div className="col-sm-9">
            {/* {props.multiline ? (
              <Form.Control
                as="textarea"
                rows={1}
                placeholder={props.placeholder}
                id={props.id}
                {...props.register(props.name, props.validationSchema)}
              />
            ) : ( */}
            <Form.Control
              // id={props.id}
              // disabled={props.isDisabled}
              type={
                props.type && props.type.startsWith("file")
                  ? props.type.split(":")[0]
                  : props.type
              }
              placeholder={props.placeholder}
              accept={
                props.type && props.type.startsWith("file")
                  ? props.type.split(":")[1]
                  : ""
              }
              {...props.register(props.name, props.validationSchema)}
            />
            {/* )} */}
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
