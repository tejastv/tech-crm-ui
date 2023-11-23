export interface ToasterType {
  heading: string;
  description: string;
  type:
    | "Primary"
    | "Secondary"
    | "Success"
    | "Danger"
    | "Warning"
    | "Info"
    | "Light"
    | "Dark";
  imageSrc?: string;
  icon?: string;
}
