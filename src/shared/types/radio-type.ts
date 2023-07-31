export interface RadioType {
  name: string;
  label: string;
  id: string;
  validation?: Validation;
  className?: string;
}

interface Validation {
  required: {
    value: true;
    message: string;
  };
}
