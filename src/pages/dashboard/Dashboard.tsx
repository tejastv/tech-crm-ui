// Dashboard.tsx
import React from "react";

//Components
import { Greeting, Stats } from "./features";

const Dashboard: React.FC = () => {
  return (
    <>
      <Greeting />
      <div className="row">
        <Stats />
      </div>
    </>
  );
};

export default Dashboard;
