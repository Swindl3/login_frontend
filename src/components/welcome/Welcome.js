import React from "react";

const Welcome = (props) => {
  console.log(props);
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <h1 className="text-center mt-5">
              Welcome <br />
              <h1 className="text-success">{props.location.state}</h1>
            </h1>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
