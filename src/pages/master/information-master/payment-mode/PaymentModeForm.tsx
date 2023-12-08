import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  PaymentModeFormType,
  paymentModeFormFields,
  usePaymentModeApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const PaymentModeForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PaymentModeFormType>();
  const {
    addPaymentModeMutation,
    getPaymentModeData,
    updatePaymentModeMutation,
  } = usePaymentModeApiCallHook();
  const { mutateAsync: addPaymentMode } = addPaymentModeMutation();
  const { mutateAsync: updatePaymentMode } = updatePaymentModeMutation();
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
      reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  if (params.id) {
    const { data: paymentModeData, isSuccess: paymentModeDataSuccess } =
      getPaymentModeData("" + params.id);
    console.log(params.id);

    if (paymentModeDataSuccess) {
      paymentModeFormFields.paymentmode.config.setData =
        paymentModeData?.paymentMode;
    }
  } else {
    useEffect(() => {
      reset();
    }, []);
  }

  const onSubmit = handleSubmit((paymentModeData): void => {
    if (params.id && paymentModeData) {
      updatePaymentMode({ id: params.id, ...paymentModeData });
    } else {
      addPaymentMode(paymentModeData);
    }
  });

  return (
    <>
      <Card config={cardConfig.formLayoutConfig}>
        <form
          onSubmit={onSubmit}
          noValidate
          autoComplete="off"
          className="p-t-20"
        >
          <BorderLayout heading={cardConfig.formLayoutConfig.heading}>
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={paymentModeFormFields.paymentmode}
                />
              </div>
            </div>
          </BorderLayout>
          <BorderLayout heading={cardConfig.formActionsConfig.heading}>
            <ActionButtons />
          </BorderLayout>
        </form>
      </Card>
    </>
  );
};
