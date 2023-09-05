import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddPaymentModeType,
  addPaymentModeFormFields,
  usePaymentModeApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddPaymentMode: React.FC = () => {
  const methods = useForm<AddPaymentModeType>();
  const {
    addPaymentModeMutation,
    getPaymentModeData,
    updatePaymentModeMutation,
  } = usePaymentModeApiCallHook();
  const { mutate: addPaymentMode } = addPaymentModeMutation();
  const { mutate: updatePaymentMode } = updatePaymentModeMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Payment Mode" : "Add Payment Mode",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  useEffect(() => {
    // This code will run when the component is about to unmount
    return () => {
      methods.reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  if (params.id) {
    const { data: paymentModeData, isSuccess: paymentModeDataSuccess } =
      getPaymentModeData("" + params.id);
    console.log(params.id);

    if (paymentModeDataSuccess) {
      addPaymentModeFormFields.paymentmode.config.setData =
        paymentModeData?.paymentMode;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((paymentModeData) => {
    if (params.id && paymentModeData) {
      updatePaymentMode({ id: params.id, ...paymentModeData });
    } else {
      addPaymentMode(paymentModeData);
    }
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
                  <Input config={addPaymentModeFormFields.paymentmode.config} />
                </div>
              </div>
            </BorderLayout>
            <BorderLayout heading={cardConfig.formActionsConfig.heading}>
              <ActionButtons />
            </BorderLayout>
          </form>
        </FormProvider>
      </Card>
    </>
  );
};
