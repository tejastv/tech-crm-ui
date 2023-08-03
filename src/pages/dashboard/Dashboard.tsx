// Dashboard.tsx
import React from "react";

//Components
import { Greeting, Stats } from "./features";
import { PageWrapper } from "../../shared";

const Dashboard: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <Greeting />
        <div className="row">
          <Stats />
        </div>
      </PageWrapper>
    </>
  );
};

export default Dashboard;
