import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  BorderLayout,
  Card,
  Input,
  Select,
  DivLayout,
  Button,
  Table,
} from "@shared/index";
import {
  priceLocalSource,
  priceCurrency,
  purchesExchanegRate,
  sellExchanegRate,
  purchesDate,
  sellDate,
} from "@master/index";

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
                <div className="col-md-4 col-xs-12">
                  <Select config={priceLocalSource.config} />
                </div>

                <div className="col-md-4 col-xs-12">
                  <Select config={priceCurrency.config} />
                </div>

                <div className="col-md-4 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Std. Price
                  </Button>
                </div>
                <DivLayout heading={cardConfig.formPurchesConfig.heading} />
                <div className="col-md-4 col-xs-12">
                  <Input config={purchesExchanegRate.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={purchesDate.config} />
                </div>
                <div className="col-md-2 col-xs-12"></div>
                <DivLayout heading={cardConfig.formSellConfig.heading} />
                <div className="col-md-4 col-xs-12">
                  <Input config={sellExchanegRate.config} />
                </div>
                <div className="col-md-4 col-xs-12">
                  <Input config={sellDate.config} />
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
          <Table></Table>
        </BorderLayout>
      </Card>
    </>
  );
};
