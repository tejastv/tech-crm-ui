import { FormFieldType, Note, Options, ValidationType } from "@shared/index";

export function createFormConfig(
  idName: string,
  lable: string,
  type: string,
  validationConfig: ValidationType,
  placeholder: string,
  disabled: boolean = false,
  multiline: boolean = false,
  options?: Array<Options>
): FormFieldType {
  let formField: FormFieldType = { config: {} } as FormFieldType;
  const replaceLabel = "{label}";
  formField.config["validation"] = {} as ValidationType;
  formField.config["id"] = idName;
  formField.config["name"] = idName;
  formField.config["type"] = type;
  formField.config["placeholder"] = placeholder;
  formField.config["isDisabled"] = disabled;
  formField.config["label"] = lable;
  if (multiline) formField.config["multiline"] = multiline;
  if (options && options.length > 0) formField.config["options"] = options;
  formField.config["validation"] = validationConfig;
  formField.config["validation"].required.message = formField.config[
    "validation"
  ].required.message.replace(replaceLabel, lable);
  return formField;
}
// import { Note } from "@shared/index";

export function createNoteConfig(noteName: string): Note {
  let noteField: Note = { config: {} } as Note;
  noteField.config["name"] = noteName;

  return noteField; // You need to return the created note field config
}
