// Dashboard.tsx
import React from "react";

//Components
import { Greeting, Stats } from "./features";

const Dashboard: React.FC = () => {
  return (
    <React.Fragment>
      <Greeting />
      <div className="row">
        <Stats />
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
