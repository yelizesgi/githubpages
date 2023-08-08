import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import {LoginContext} from "../context/LoginContext"

const PrivateRouter = () => {
  const {user} = useContext(LoginContext);
  return user.email && user.password ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
