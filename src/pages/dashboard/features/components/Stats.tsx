// Stats.tsx
import React from "react";

export const Stats: React.FC = () => {
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div className="card border-left border-orange">
          <div className="card-body">
            <div className="d-flex no-block align-items-center">
              <div>
                <span className="text-orange display-6">
                  <i className="ti-crown"></i>
                </span>
              </div>
              <div className="ml-auto">
                <h2 className="text-right">
                  <a href="company_master.php" target="_blank">
                    0
                  </a>
                </h2>
                <h3 className="text-orange">Total Companies</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
