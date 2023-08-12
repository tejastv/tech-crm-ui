import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";
const ClientSegmentValidation = {
  required: {
      value: true,
      message: "{label} field is rquired",
  },
  maxLength: {
      value: 30,
      message: "30 characters max",
  },
} as ValidationType;


export const clientSegment: FormFieldType = createFormConfig('SegmentName', 'Segment', 'text', ClientSegmentValidation,'Enter Segment');