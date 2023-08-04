import { Route, Routes } from "react-router-dom";
import {
  CLIENT_GROUP,
  CLIENT,
  SEGMENT,
  Client,
  ClientGroup,
  Segment,
} from "@master/index";

const ClientMasterIndex = () => {
  return (
    <Routes>
      <Route path={CLIENT} element={<Client />}></Route>
      <Route path={CLIENT_GROUP} element={<ClientGroup />}></Route>
      <Route path={SEGMENT} element={<Segment />}></Route>
    </Routes>
  );
};

export default ClientMasterIndex;
