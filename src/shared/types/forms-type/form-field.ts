import { Options, ValidationType } from "@shared/index";

export interface FormFieldType {
  config: {
    name: string;
    label?: string;
    type?: string;
    id: string;
    placeholder?: string;
    validation?: ValidationType;
    multiline?: boolean;
    className?: string;
    selectedValue?: string | number;
    options?: Array<Options>;
  };
}
