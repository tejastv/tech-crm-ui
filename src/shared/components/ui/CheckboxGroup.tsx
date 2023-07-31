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
import { CheckboxGroupType } from "../..";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Checkbox,
  CheckboxGroup as CkCheckboxGroup,
  Stack,
} from "@chakra-ui/react";

export const CheckboxGroup: React.FC<CheckboxGroupType> = ({
  name,
  label,
  id,
  validation,
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
              <CkCheckboxGroup {...register(name, validation)}>
                <Stack spacing={[1, 5]} direction={["column", "row"]}>
                  <Checkbox value="naruto">Naruto</Checkbox>
                  <Checkbox value="sasuke">Sasuke</Checkbox>
                  <Checkbox value="kakashi">Kakashi</Checkbox>
                </Stack>
              </CkCheckboxGroup>
            </div>
          </FormControl>
        </div>
      </div>
    </div>
    // <div className="input-group">
    //   <FormControl isInvalid={isInvalid}>
    //     <CkCheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']}>
    //       <Stack spacing={[1, 5]} direction={['column', 'row']}>
    //         <Checkbox value='naruto'>Naruto</Checkbox>
    //         <Checkbox value='sasuke'>Sasuke</Checkbox>
    //         <Checkbox value='kakashi'>Kakashi</Checkbox>
    //       </Stack>
    //     </CkCheckboxGroup>
    //   </FormControl>
    //   </div>
  );
};
