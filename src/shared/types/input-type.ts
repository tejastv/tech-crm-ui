export interface InputType {
  config: {
    name: string;
    label: string;
    type?: string;
    id: string;
    placeholder: string;
    validation?: Validation;
    multiline?: boolean;
    className?: string;
  };
}

interface Validation {
  required: {
    value: true;
    message: string;
  };
  pattern?: Pattern;
  maxLength?: MaxLeangth;
  minLength?: MinLeangth;
}

interface Pattern {
  value: RegExp;
  message: string;
}

interface MaxLeangth {
  value: number;
  message: string;
}

interface MinLeangth {
  value: number;
  message: string;
}
