// Dashboard.tsx
import React from "react";

//Components
import Greeting from "./features/components/Greeting";
import Stats from "./features/components/Stats";

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
