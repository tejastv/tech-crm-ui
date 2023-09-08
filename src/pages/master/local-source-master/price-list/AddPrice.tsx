import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  Input,
  Select,
  DivLayout,
  Button,
} from "@shared/index";
import { addPriceFormFields } from "@master/index";

export const AddPrice: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Price List (Local Source)",
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

  const onSubmit = methods.handleSubmit((data): void => {
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
                <div className="col-md-4 col-xs-12">
                  <Select config={addPriceFormFields.priceLocalSource.config} />
                </div>

                <div className="col-md-4 col-xs-12">
                  <Select config={addPriceFormFields.priceCurrency.config} />
                </div>

                <div className="col-md-4 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Std. Price
                  </Button>
                </div>
                <div className="col-md-2 col-xs-12">
                  <DivLayout heading={cardConfig.formPurchesConfig.heading} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input
                    config={addPriceFormFields.purchesExchanegRate.config}
                  />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={addPriceFormFields.purchesDate.config} />
                </div>
                <div className="col-md-2 col-xs-12"></div>
                <div className="col-md-2 col-xs-12">
                  <DivLayout heading={cardConfig.formSellConfig.heading} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={addPriceFormFields.sellExchanegRate.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={addPriceFormFields.sellDate.config} />
                </div>
                <div className="col-md-2 col-xs-12 text-right">
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
