import { MaxLeangthType } from "./max-leangth-type";
import { MinLeangthType } from "./min-length-type";
import { PatternType } from "./pattern-type";

export interface ValidationType {
  required: {
    value: true;
    message: string;
  };
  pattern?: PatternType;
  maxLength?: MaxLeangthType;
  minLength?: MinLeangthType;
}
