// Dashboard.tsx
import React from "react";

import { Greeting, Stats } from "@dashboard/index";
import { PageWrapper } from "@shared/index";

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
