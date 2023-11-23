import { MaxLeangthType, MinLeangthType, PatternType } from "@shared/index";

export interface ValidationType {
  required: {
    value: boolean;
    message: string;
  };
  pattern?: PatternType;
  maxLength?: MaxLeangthType;
  minLength?: MinLeangthType;
}
