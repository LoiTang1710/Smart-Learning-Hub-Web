import React from "react";
import RegisterPage from "./register/page";
import LoginPage from "./login/page";


const AuthLayout = () => {
  return (
    <div>
      <LoginPage />
      <RegisterPage />
  
    </div>
  );
};

export default AuthLayout;
