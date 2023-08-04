import { ValidationType, Options } from '..';

export interface RadioType {
  name: string;
  label: string;
  id: string;
  validation?: ValidationType;
  type: "radio" | "checkbox" | "switch";
  options: Array<Options>;
  className?: string;
}