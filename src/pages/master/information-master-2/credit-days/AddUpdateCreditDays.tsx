import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateCreditDaysType,
  addCreditDaysFormFields,
  useCreditDaysApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateCreditDays: React.FC = () => {
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Credit Period",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const methods = useForm<AddUpdateCreditDaysType>();
  const { addCreditDaysMutation, getCreditDaysData, updateCreditDaysMutation } =
    useCreditDaysApiCallHook();
  const { mutate: addCreditDays } = addCreditDaysMutation();
  const { mutate: updateCreditDays } = updateCreditDaysMutation();
  const params = useParams();

  if (params.id) {
    const { data: creditDays, isSuccess: creditDaysSuccess } =
      getCreditDaysData("" + params.id);
    if (creditDaysSuccess) {
      addCreditDaysFormFields.creditdays.config.setData =
        creditDays.creditPeriod;
    }
  }

  const onSubmit = methods.handleSubmit((creditDays): void => {
    let data: any = { ...creditDays };
    if (params.id && creditDays) {
      updateCreditDays({ id: +params.id, ...data });
    } else {
      addCreditDays(data);
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
                  <Input config={addCreditDaysFormFields.creditdays.config} />
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
