// Login.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

//Hooks
import { useAuth } from "@hooks/index";

//Types
import { LoginRequest } from "@auth/index";

//Constants
import { DASHBOARD } from "../../constants";

//Assets
import logoImage from "@assets/images/logo.png";
import { setLocalStorageData } from "@utils/index";

export const Login: React.FC = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    const user: LoginRequest = {
      userName: "Tejas",
      password: "tejastv",
    };
    setAuth({ user });
    setLocalStorageData("auth", "user", user);
    navigate(DASHBOARD, { replace: true });
  };

  return (
    <div className="auth-wrapper d-flex no-block justify-content-center align-items-center backgroundImage">
      <div className="auth-box">
        <div id="loginform">
          <div className="logo" id="err_user">
            <span className="db">
              <img src={logoImage} alt="logo" />
            </span>
            <h5 className="font-medium m-b-20">Sign In to Admin</h5>
            <input type="hidden" id="invalid_pass" />
          </div>
          <div className="row">
            <div className="col-12">
              <form
                className="form-horizontal m-t-20"
                id="loginform"
                onSubmit={handleSubmit}
              >
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                      <i className="ti-user"></i>
                    </span>
                  </div>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="email"
                    id="email"
                    name="username"
                  />
                </div>
                <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon2">
                      <i className="ti-pencil"></i>
                    </span>
                  </div>
                  <input
                    className="form-control form-control-lg"
                    placeholder="Password"
                    aria-label="Password"
                    aria-describedby="basic-addon1"
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="custom-control custom-checkbox">
                      <input
                        type="checkbox"
                        name="remember"
                        className="custom-control-input"
                        id="customCheck1"
                      />
                      <label className="custom-control-label">
                        Remember me
                      </label>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center">
                  <div className="col-xs-12 p-b-20">
                    <button
                      className="btn btn-block btn-lg btn-red"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
