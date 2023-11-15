export interface ButtonType {
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className: string;
  disabled?: boolean;
  name?: string;
}
