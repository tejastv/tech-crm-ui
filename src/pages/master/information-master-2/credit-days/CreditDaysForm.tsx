import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  CreditDaysFormType,
  CreditDaysType,
  creditDaysFormFields,
  useCreditDaysApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";

export const CreditDaysForm: React.FC = () => {
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Credit Period" : "Add Credit Period",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreditDaysFormType>();
  const { state: localCreditDaysData } = useLocation();
  const { addCreditDaysMutation, getCreditDaysData, updateCreditDaysMutation } =
    useCreditDaysApiCallHook();
  const { mutateAsync: addCreditDays } = addCreditDaysMutation();
  const { mutateAsync: updateCreditDays } = updateCreditDaysMutation();

  const { data: creditDays } = getCreditDaysData(
    "" + params.id,
    !localCreditDaysData && params.id !== undefined
  );

  const mapCreditDaysDataToCreditDaysForm = (creditDaysData: CreditDaysType) => {
    let creditDayFormData: Partial<CreditDaysFormType> = {
      creditPeriod: creditDaysData.creditPeriod,
    };
    return creditDayFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (creditDays && Object.values(creditDays).length > 0) {
        reset(mapCreditDaysDataToCreditDaysForm(creditDays));
      }
    }
  }, [params.id, creditDays]);

  const mapCreditDaysRequest = (creditDaysFormData: CreditDaysFormType) => {
    let creditDaysData: Partial<CreditDaysType> = {
      creditPeriod: creditDaysFormData.creditPeriod,
    };
    return cleanupObject(creditDaysData);
  };

  const onSubmit = handleSubmit((creditDays: CreditDaysFormType): void => {
    let reqObj: Partial<CreditDaysType> = mapCreditDaysRequest(creditDays);
    if (params.id && reqObj) {
      updateCreditDays({ creditPeriodId: +params.id, ...reqObj });
    } else {
      addCreditDays(reqObj);
    }
  });

  return (
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
                config={creditDaysFormFields.creditDays}
              />
            </div>
          </div>
        </BorderLayout>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
