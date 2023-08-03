export interface CheckboxType {
  name: string;
  label: string;
  id: string;
  type: "radio" | "checkbox" | "switch";
  validation?: Validation;
  options: Array<Options>;
  className?: string;
}

interface Options {
  name: string;
  value: string | number;
}

interface Validation {
  required: {
    value: true;
    message: string;
  };
}
