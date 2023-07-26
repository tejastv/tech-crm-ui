import { Route, Routes } from "react-router-dom";

//Components
import Login from "./Login";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default AuthRoutes;
