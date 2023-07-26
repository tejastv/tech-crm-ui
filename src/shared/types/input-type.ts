export interface InputType {
  name: string;
  label: string;
  type: string;
  id: string;
  placeholder: string;
  validation?: validation;
  multiline?: boolean;
}

interface validation {
  required: {
    value: true;
    message: string;
  };
  maxLength?: MaxLeangth;
  minLength?: MinLeangth;
}

interface MaxLeangth {
  value: number;
  message: string;
}

interface MinLeangth {
  value: number;
  message: string;
}
