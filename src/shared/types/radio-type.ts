export interface RadioType {
  name: string;
  label: string;
  id: string;
  validation?: Validation;
  type: "radio" | "checkbox" | "switch";
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
