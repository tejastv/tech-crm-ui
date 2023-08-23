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
import * as formField from "@master/index";

export const AddPriceClients: React.FC = () => {
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
                <div className="col-md-3 col-xs-12">
                  <Select config={formField.pricecity.config} />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select config={formField.priceClient.config} />
                </div>
                <div className="col-md-2 col-xs-12">
                  <Select config={formField.priceClientCurrency.config} />
                </div>
                <div className="col-md-2 col-xs-12">
                  <Select config={formField.priceGroup.config} />
                </div>

                <div className="col-md-1 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price(From Group)
                  </Button>
                  <div className="pt-lg-5"></div>
                </div>
                <div className="col-md-12 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Std. Price
                  </Button>
                </div>
                <div className="pt-lg-3"></div>
                <div className="col-md-3 col-xs-12">
                  <Select config={formField.priceGroup2.config} />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select config={formField.priceCurrencyClient.config} />
                </div>
                {/* <div className="pt-lg-1"></div> */}
                <div className="col-md-6 col-xs-12 text-right">
                  <Button type={"submit"} className={"btn btn-danger btn-sm"}>
                    <i className="far fa-save"></i>Get Price(From Other Group)
                  </Button>
                </div> 
                {/* <div className="pt-lg-3"></div> */}
                <div className="col-md-3 col-xs-12">
                  <Select config={formField.priceClient2.config} />
                </div>

                <div className="col-md-3 col-xs-12">
                  <Select config={formField.priceCurrencyGroup.config} />
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
