import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import {
  BorderLayout,
  Card,
  Input,
  DivLayout,
  ActionButtons,
} from "@shared/index";
import { addCurrencyFormFields } from "@master/index";

export const AddCurrency: React.FC = () => {
  const methods = useForm();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Currency",
      heading: "Entry",
    },
    formPurchesConfig: {
      heading: "Purchase",
    },
    formSellConfig: {
      heading: "Sell",
    },

    formActionsConfig: {
      heading: "Action Button",
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
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <div className="col-md-7 col-xs-12">
                      <Input config={addCurrencyFormFields.currency.config} />
                    </div>

                    <div className="col-md-7 col-xs-12">
                      <Input config={addCurrencyFormFields.symbol.config} />
                    </div>
                    <div className="card-title col-md-12 m-t-40 text-center">
                      <DivLayout
                        heading={cardConfig.formPurchesConfig.heading}
                      />
                      <hr />
                    </div>
                    <div className="col-md-7 col-xs-12">
                      <Input
                        config={addCurrencyFormFields.purchesExchaneg.config}
                      />
                      <Input
                        config={addCurrencyFormFields.pDate.config}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                    <div className="col-md-12 col-xs-12">
                      <Input
                        config={addCurrencyFormFields.currencyWord.config}
                      />
                    </div>
                    <div className="card-title col-md-12 m-t-40 text-center">
                      <DivLayout heading={cardConfig.formSellConfig.heading} />
                      <hr />
                    </div>
                    <div className="col-md-7 col-xs-12">
                      <Input
                        config={addCurrencyFormFields.sellExchaneg.config}
                      />
                      <Input config={addCurrencyFormFields.sDate.config} />
                    </div>
                  </div>
                </div>
              </div>
            </BorderLayout>
            <div className="card-body">
              <BorderLayout heading={cardConfig.formActionsConfig.heading}>
                <ActionButtons />
              </BorderLayout>
            </div>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
