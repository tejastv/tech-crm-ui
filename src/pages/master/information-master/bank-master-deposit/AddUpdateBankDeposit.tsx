import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddBankDepositType,
  addBankDepositeFormFields,
  useBankMasterDepositApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddBankMasterDeposit: React.FC = () => {
  const methods = useForm<AddBankDepositType>();

  const {
    addBankMasterDepositMutation,
    getBankMasterDepositData,
    updateBankMasterDepositOnMutation,
  } = useBankMasterDepositApiCallHook();
  const { mutate: AddBankMasterDeposit } = addBankMasterDepositMutation();
  const { mutate: updateBankMasterDeposit } =
    updateBankMasterDepositOnMutation();
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id
        ? "Update Bank Master (Deposit On)"
        : "Add Bank Master (Deposit On)",
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
    const {
      data: BankMasterDepositData,
      isSuccess: BankMasterDepositDataSuccess,
    } = getBankMasterDepositData("" + params.id);
    console.log(params.id);

    if (BankMasterDepositDataSuccess) {
      addBankDepositeFormFields.bankdeposit.config.setData =
        BankMasterDepositData?.bankName;
      addBankDepositeFormFields.bankDepositAc.config.setData =
        BankMasterDepositData?.accountNo;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((BankMasterDepositData): void => {
    let data: any = { ...BankMasterDepositData };
    data["ifscCode"] = "String";
    data["branch"] = "String";
    data["swiftCode"] = "String";
    data["bankCode"] = "String";
    data["status"] = "String";
    data["groupId"] = "number";
    if (params.id && BankMasterDepositData) {
      updateBankMasterDeposit({ id: params.id, ...data });
    } else {
      AddBankMasterDeposit(data);
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
                  <Input
                    config={addBankDepositeFormFields.bankdeposit.config}
                  />
                </div>
                <div className="col-md-6 col-xs-12">
                  <Input
                    config={addBankDepositeFormFields.bankDepositAc.config}
                  />
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
