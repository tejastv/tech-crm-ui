import { Options, ValidationType } from "@shared/index";

export interface FormFieldType {
  config: {
    name: string;
    label?: string;
    type?: string;
    id: string;
    placeholder?: string;
    inputTypeAccept?: string;
    validation?: ValidationType;
    multiline?: boolean;
    className?: string;
    setData?: any;
    options?: Array<Options>;
  };
}
