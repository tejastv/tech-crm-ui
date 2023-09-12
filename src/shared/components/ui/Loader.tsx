import React from "react";
import { Puff } from "react-loader-spinner";

export const Loader: React.FC = () => {
  return (
    <Puff
      height="50"
      width="50"
      radius={1}
      color="#ff0000"
      ariaLabel="puff-loading"
      wrapperStyle={{}}
      wrapperClass="loader-wrapper"
      visible={true}
    />
  );
};
