import { Options } from "./options-type";
import { ValidationType } from "./validations-type";

export interface FormFieldType {
  config: {
    name: string;
    label: string;
    type?: string;
    id: string;
    placeholder?: string;
    validation?: ValidationType;
    multiline?: boolean;
    className?: string;
    options?: Array<Options>;
  };
}
