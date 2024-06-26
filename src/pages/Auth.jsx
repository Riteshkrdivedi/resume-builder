import React from "react";
import auth from "./auth.css";
import Logo from "../images/Logo.png";
import Authbutton from "../components/Authbutton";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { Footer } from "../containers";

const Auth = () => {
  return (
    <div>
      {/* top-section */}
      <div className="navbar">
        <img className="logo" src={Logo} alt="" />
      </div>
      {/* midsection */}
      <div className="main">
        <div className="m-1">Welcome to Resumify</div>
        <div className="m-2">Simplify the Resume making </div>
        <div className="m-3">Authenticate </div>
        <Authbutton
          logo={<FaGoogle />}
          text={"SignUp with Google"}
          label={"GoogleAuthProvider"}
          mark={<MdArrowForwardIos />}
        />
        <Authbutton
          logo={<FaGithub />}
          text={"SignUp with Github"}
          label={"GithubAuthProvider"}
          mark={<MdArrowForwardIos />}
        />
      </div>
      {/* footer */}
      <Footer className=" " />
    </div>
  );
};

export default Auth;
