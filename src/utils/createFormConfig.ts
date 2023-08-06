import { FormFieldType, Options, ValidationType } from "@shared/index";

export function createFormConfig(
  idName: string,
  lable: string,
  type: string,
  validationConfig: ValidationType,
  multiline: boolean = false,
  options?: Array<Options>
): FormFieldType {
  let formField: FormFieldType = { config: {} } as FormFieldType;
  const replaceLabel = "{label}";
  formField.config['validation'] = {} as ValidationType;
  formField.config['id'] = idName;
  formField.config['name'] = idName;
  formField.config['type'] = type;
  formField.config['label'] = lable;
  if (multiline) formField.config['multiline'] = multiline;
  if (options && options.length > 0) formField.config['options'] = options;
  formField.config['validation'] = validationConfig;
  formField.config['validation'].required.message = formField.config['validation'].required.message.replace(replaceLabel, lable);
  return formField;
}