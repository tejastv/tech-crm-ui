export interface PageBreadcrumbType {
  config: {
    pageHeading: string;
    buttons: Array<buttonConfig>;
  };
}

export interface buttonConfig {
  btnTitle?: string;
  btnRoute?: string;
}
