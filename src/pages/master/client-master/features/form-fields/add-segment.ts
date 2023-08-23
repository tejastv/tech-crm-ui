import { FormFieldType, ValidationType } from "@shared/index";
import { createFormConfig } from "@utils/index";

const segmentValid = {
  required: {
    value: true,
    message: "{label} field is rquired",
  },
  maxLength: {
    value: 30,
    message: "30 characters max",
  },
} as ValidationType;

const clientSegment: FormFieldType = createFormConfig(
  "SegmentName",
  "Segment Name",
  "text",
  segmentValid,
  "Enter Segment"
);

export const addSegmentFormFields = {
  clientSegment,
};
