import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  AddPaymentModeType,
  PaymentModeType,
  addPaymentModeFormFields,
  usePaymentModeApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";

export const AddPaymentMode: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AddPaymentModeType>();
  const {
    addPaymentModeMutation,
    getPaymentModeData,
    updatePaymentModeMutation,
  } = usePaymentModeApiCallHook();
  const { mutateAsync: addPaymentMode } = addPaymentModeMutation();
  const { mutateAsync: updatePaymentMode } = updatePaymentModeMutation();
  const params = useParams();
  const { state: localPayModeData } = useLocation();

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

  const { data: paymentModeData } = getPaymentModeData(
    "" + params.id,
    !localPayModeData && params.id !== undefined
  );

  const mapPayModeDataToPayModeForm = (enqData: PaymentModeType) => {
    let enqFormData: Partial<AddPaymentModeType> = {
      paymentMode: enqData.paymentMode,
    };

    return enqFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (paymentModeData && Object.values(paymentModeData).length > 0) {
        reset(mapPayModeDataToPayModeForm(paymentModeData));
      }
    }
  }, [params.id, paymentModeData]);

  useEffect(() => {
    if (params.id) {
      if (localPayModeData !== null) {
        console.log(localPayModeData);
        reset(mapPayModeDataToPayModeForm(localPayModeData));
      }
    }
  }, [params.id, localPayModeData]);

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
                  config={addPaymentModeFormFields.paymentmode}
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
