import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  BankDepositFormType,
  BankDepositType,
  bankDepositeFormFields,
  useBankMasterDepositApiCallHook,
} from "@master/index";
import { useParams, useLocation } from "react-router-dom";

export const BankMasterDepositForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BankDepositFormType>();

  const {
    addBankMasterDepositMutation,
    getBankMasterDepositData,
    updateBankMasterDepositOnMutation,
  } = useBankMasterDepositApiCallHook();
  const { mutateAsync: AddBankMasterDeposit } = addBankMasterDepositMutation();
  const { mutateAsync: updateBankMasterDeposit } =
    updateBankMasterDepositOnMutation();
  const params = useParams();
  const { state: localBankDepositData } = useLocation();

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
      reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  const mapBankDepositDataToBankDepositForm = (
    bankDrawnData: BankDepositType
  ) => {
    let bankDrawnFormData: Partial<BankDepositFormType> = {
      bankName: bankDrawnData.bankName,
      accountNo: bankDrawnData.accountNo,
    };

    return bankDrawnFormData;
  };

  const { data: BankMasterDepositData } = getBankMasterDepositData(
    "" + params.id,
    !localBankDepositData && params.id !== undefined
  );

  useEffect(() => {
    if (params.id) {
      if (
        BankMasterDepositData &&
        Object.values(BankMasterDepositData).length > 0
      ) {
        reset(mapBankDepositDataToBankDepositForm(BankMasterDepositData));
      }
    }
  }, [params.id, BankMasterDepositData]);

  useEffect(() => {
    if (params.id) {
      if (localBankDepositData !== null) {
        console.log(localBankDepositData);
        reset(mapBankDepositDataToBankDepositForm(localBankDepositData));
      }
    }
  }, [params.id, localBankDepositData]);

  const onSubmit = handleSubmit((BankMasterDepositData): void => {
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
                  config={bankDepositeFormFields.bankdeposit}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={bankDepositeFormFields.bankDepositAc}
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
