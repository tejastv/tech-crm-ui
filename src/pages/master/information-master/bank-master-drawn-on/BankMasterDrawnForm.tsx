import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  BankDrawnOnFormType,
  BankdrawnonType,
  bankDrawnOnFormFields,
  useBankMasterDrawnApiCallHook,
} from "@master/index";
import { useParams, useLocation } from "react-router-dom";

export const BankMasterDrawnForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BankDrawnOnFormType>();

  const {
    addBankMasterDrawnOnMutation,
    getBankMasterDrawnOnData,
    updateBankMasterDrawnOnMutation,
  } = useBankMasterDrawnApiCallHook();
  const { mutateAsync: addBankMasterDrawnOn } = addBankMasterDrawnOnMutation();
  const { mutateAsync: updateBankMasterDrawnOn } =
    updateBankMasterDrawnOnMutation();
  const params = useParams();
  const { state: localBankDrawnData } = useLocation();

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
      reset();
      // Place your cleanup code here
      console.log("Component is unmounting. Cleanup can be performed here.");
    };
  }, []);

  const mapBankDrawnDataToBankDrawnForm = (bankDrawnData: BankdrawnonType) => {
    let bankDrawnFormData: Partial<BankDrawnOnFormType> = {
      bankName: bankDrawnData.bankName,
    };

    return bankDrawnFormData;
  };

  const { data: BankMasterDrawnData } = getBankMasterDrawnOnData(
    "" + params.id,
    !localBankDrawnData && params.id !== undefined
  );

  useEffect(() => {
    if (params.id) {
      if (
        BankMasterDrawnData &&
        Object.values(BankMasterDrawnData).length > 0
      ) {
        reset(mapBankDrawnDataToBankDrawnForm(BankMasterDrawnData));
      }
    }
  }, [params.id, BankMasterDrawnData]);

  useEffect(() => {
    if (params.id) {
      if (localBankDrawnData !== null) {
        console.log(localBankDrawnData);
        reset(mapBankDrawnDataToBankDrawnForm(localBankDrawnData));
      }
    }
  }, [params.id, localBankDrawnData]);

  const onSubmit = handleSubmit((BankMasterDrawnData): void => {
    if (params.id && BankMasterDrawnData) {
      updateBankMasterDrawnOn({ id: params.id, ...BankMasterDrawnData });
    } else {
      addBankMasterDrawnOn(BankMasterDrawnData);
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
                  config={bankDrawnOnFormFields.bankdrawn}
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
