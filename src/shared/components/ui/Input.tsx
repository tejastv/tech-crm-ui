/*-------------------------------------------------------------------
|  🐼 React FC Input
|
|  🐯 Purpose: RE-USEABLE INPUT COMPOENT
|
|  🐸 Returns:  JSX
*-------------------------------------------------------------------*/
import React from "react";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { findInputError, isFormInvalid } from "../../../utils";
import { InputType } from "../..";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input as CkInput,
  Textarea,
} from "@chakra-ui/react";

export const Input: React.FC<InputType> = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className="row">
      <div className="col-12">
        <div className="form-group row">
          <FormControl isInvalid={isInvalid}>
            <FormLabel
              className="col-sm-3 control-label col-form-label"
              htmlFor="name"
            >
              {label}
            </FormLabel>
            <div className="col-sm-9">
              {multiline ? (
                <Textarea
                  isInvalid={isInvalid}
                  placeholder={placeholder}
                  id={id}
                  {...register(name, validation)}
                />
              ) : (
                <CkInput
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  {...register(name, validation)}
                />
              )}
              {isInvalid && (
                <FormErrorMessage>
                  <MdError />
                  {inputErrors.error.message}
                </FormErrorMessage>
              )}
            </div>
          </FormControl>
        </div>
      </div>
    </div>
  );
};
