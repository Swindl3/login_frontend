import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (values) => {
    console.log(values);
    if (values.password === "P@$$W0RD") {
      console.log("CORRECT");
      history.push("/welcome", values.username);
    }
  };
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-sm"></div>
          <div className="col-sm text-center">
            <h2 className="text-info">Login</h2>
            <br />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="username"
                className="form-control"
                ref={register({
                  required: "Required",
                  validate: (value) => value.trim() !== "",
                })}
                placeholder="Username"
              />
              <br />
              <input
                name="password"
                type="password"
                className="form-control"
                ref={register({
                  required: "Required",
                  validate: (value) => value.trim() !== "",
                })}
                placeholder="Password"
              />
              <br />
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
          <div className="col-sm"> </div>
        </div>
      </div>
    </>
  );
};

export default Login;
