// Greeting.tsx
import React from "react";

import profilepic from "@assets/images/2.jpg";
import { useAuth } from "@hooks/useAuth";

export const Greeting: React.FC = () => {
  const { user } = useAuth();
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
                  <h4 className="m-b-0">Welcome back - {user?.name}</h4>
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
