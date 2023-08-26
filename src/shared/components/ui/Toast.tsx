import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

import { ToasterType } from "@shared/index";

export const Toaster: React.FC<ToasterType> = (props) => {
  console.log("innnn");
  return (
    <ToastContainer
      className="p-3"
      position="top-end"
      style={{ zIndex: 99999 }}
    >
      <Toast bg={props.type} show={true}>
        <Toast.Header>
          {props.imageSrc && (
            <img src={props.imageSrc} className="rounded me-2" alt="" />
          )}
          {props.icon && <i className={props.icon + "rounded me-2"}></i>}
          <strong className="me-auto">{props.heading}</strong>
          {/* <small>11 mins ago</small> */}
        </Toast.Header>
        <Toast.Body>{props.description}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};
