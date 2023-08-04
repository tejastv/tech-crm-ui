import { MaxLeangthType, MinLeangthType, PatternType } from "@shared/index";

export interface ValidationType {
  required: {
    value: true;
    message: string;
  };
  pattern?: PatternType;
  maxLength?: MaxLeangthType;
  minLength?: MinLeangthType;
}
