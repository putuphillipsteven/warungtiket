import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { keepLogin } from "../../features/login/loginSlice";

const Auth = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(keepLogin());
  }, [dispatch]);

  return <>{children}</>;
};

export default Auth;
