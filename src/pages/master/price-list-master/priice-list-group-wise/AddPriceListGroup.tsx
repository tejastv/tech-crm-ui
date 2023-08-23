import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { BorderLayout, Card, Select, Button } from "@shared/index";
import { addPriceGroupFormFields } from "@master/index";

export const AddPriceGroup: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Group)",
      heading: "Action Buttons",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },
    borderLayoutConfig: {
      heading: "Table",
    },
  };

  const onSubmit = methods.handleSubmit((data) => {
    console.log("value", data);
  });

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <FormProvider {...methods}>
          <form
            onSubmit={onSubmit}
            noValidate
            autoComplete="off"
            className="p-t-20"
          >
            <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
              <div className="row">
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.pricegroupcity.config}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupSelect.config}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupCurrency.config}
                  />
                </div>

                <div className="col-md-3 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Std. Price
                  </Button>
                </div>
                {/* <div className="pt-lg-3"></div> */}
                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupSelect2.config}
                  />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select
                    config={addPriceGroupFormFields.priceGroupCurrency2.config}
                  />
                </div>
                {/* <div className="pt-lg-1"></div> */}
                <div className="col-md-6 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price
                  </Button>
                </div>

                <div className="col-md-12 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Save All
                  </Button>
                </div>
              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.borderLayoutConfig.heading}>
          {/* <Table></Table> */}
        </BorderLayout>
      </Card>
    </>
  );
};
