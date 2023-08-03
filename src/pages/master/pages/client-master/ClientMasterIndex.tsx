import { Route, Routes } from "react-router-dom";
import {
  CLIENT_GROUP,
  CLIENT,
  SEGMENT,
} from "../../features/constants/route-constants";
import { Client, ClientGroup, Segment } from "..";

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
