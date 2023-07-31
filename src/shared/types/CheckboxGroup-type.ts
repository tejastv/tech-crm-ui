export interface CheckboxGroupType {
  name: string;
  label: string;
  id: string;
  validation?: Validation;
  options: Array<Options>;
  className?: string;
}

interface Options {
  name: string;
  value: string | number | boolean;
}

interface Validation {
  required: {
    value: true;
    message: string;
  };
}
