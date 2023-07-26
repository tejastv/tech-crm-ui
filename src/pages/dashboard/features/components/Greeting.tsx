// Greeting.tsx
import React from "react";

//Assets
import profilepic from "../../../../assets/images/2.jpg";

const Greeting: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="card  bg-light no-card-border">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="m-r-10">
                  <img
                    src={profilepic}
                    alt="user"
                    width="60"
                    className="rounded-circle"
                  />
                </div>
                <div>
                  <h4 className="m-b-0">Welcome back - Hiren Bagadia</h4>
                  <span>Tuesday, 25 July 2023</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greeting;
