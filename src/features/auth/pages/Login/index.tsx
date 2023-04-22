// React
import React, { useState } from "react";

// Components
import { Content, LoginForm, LoginSosmed, Navbar, SignUp } from "./components";
import { AppModal } from "@/features/app/components";

const Login: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toogleModal = (): void => {
    setShowModal((prevModal) => !prevModal);
  };

  return (
    <div className="login">
      <Navbar />
      <div onClick={toogleModal}>CLICK MEEEE</div>
      <AppModal show={showModal} onClose={toogleModal} />
      <Content>
        <LoginSosmed />
        <LoginForm />
        <SignUp />
      </Content>
    </div>
  );
};

export default Login;
