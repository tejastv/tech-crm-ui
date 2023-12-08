import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  BankDrawnOnFormType,
  bankDrawnOnFormFields,
  useBankMasterDrawnApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const BankMasterDrawnForm: React.FC = () => {
  const methods = useForm<BankDrawnOnFormType>();

  const {
    addBankMasterDrawnOnMutation,
    getBankMasterDrawnOnData,
    updateBankMasterDrawnOnMutation,
  } = useBankMasterDrawnApiCallHook();
  const { mutateAsync: addBankMasterDrawnOn } = addBankMasterDrawnOnMutation();
  const { mutateAsync: updateBankMasterDrawnOn } =
    updateBankMasterDrawnOnMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id
        ? "Update Bank Master (Drawn On)"
        : "Add Bank Master (Drawn On)",
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
    const { data: BankMasterDrawnData, isSuccess: BankMasterDrawnDataSuccess } =
      getBankMasterDrawnOnData("" + params.id);
    console.log(params.id);

    if (BankMasterDrawnDataSuccess) {
      bankDrawnOnFormFields.bankdrawn.config.setData =
        BankMasterDrawnData?.bankName;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((BankMasterDrawnData): void => {
    if (params.id && BankMasterDrawnData) {
      updateBankMasterDrawnOn({ id: params.id, ...BankMasterDrawnData });
    } else {
      addBankMasterDrawnOn(BankMasterDrawnData);
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
                  <Input config={bankDrawnOnFormFields.bankdrawn.config} />
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
