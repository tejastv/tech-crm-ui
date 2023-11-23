// CompanyMaster.tsx
import { ImageType } from "@shared/index";

export const Image: React.FC<ImageType> = (props) => {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        width={props.width}
        className={props.className}
      />
    </>
  );
};
