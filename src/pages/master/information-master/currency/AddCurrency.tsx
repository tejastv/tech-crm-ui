import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { paymentmode } from "@master/index";
import { BorderLayout,Card,Input,Select,DivLayout,Button,Table, ActionButtons,} from "@shared/index";
import * as formField from "@master/index";

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
                  <Input config={formField.currency.config} />
                  <Input config={formField.symbol.config} />
                  </div>
                  <div className="card-title col-md-12 m-t-40 text-center">
                  <DivLayout heading={cardConfig.formPurchesConfig.heading} />
                  <hr/>
                  </div>
                  <div className="col-md-7 col-xs-12">
                  <Input config={formField.purchesExchaneg.config} />
                  <Input config={formField.purchesDate.config} />
                  </div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="card-body">
                  <div className="col-md-12 col-xs-12">
                  <Input config={formField.currencyWord.config} />
                  </div>
                  <div className="col-md-12 col-xs-12"></div>
                  <div className="card-title col-md-12 m-t-40 text-center">
                  <DivLayout heading={cardConfig.formSellConfig.heading} />
                  <hr/>
                  </div>
                  <div className="col-md-7 col-xs-12">                    
                  <Input config={formField.sellExchaneg.config} />
                  <Input config={formField.sellDate.config} />
                  </div>
                  </div>
                </div>

              </div>
            </BorderLayout>
          </form>
        </FormProvider>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <ActionButtons />
            </BorderLayout>
      </Card>
    </>
  );
};



