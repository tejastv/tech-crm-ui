import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateCreditDaysType,
  addCreditDaysFormFields,
  useCreditDaysApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateCreditDays: React.FC = () => {
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

  const methods = useForm<AddUpdateCreditDaysType>();
  const { addCreditDaysMutation, getCreditDaysData, updateCreditDaysMutation } =
    useCreditDaysApiCallHook();
  const { mutate: addCreditDays } = addCreditDaysMutation();
  const { mutate: updateCreditDays } = updateCreditDaysMutation();

  if (params.id) {
    const { data: creditDays, isSuccess: creditDaysSuccess } =
      getCreditDaysData("" + params.id);
    if (creditDaysSuccess) {
      addCreditDaysFormFields.creditdays.config.setData =
        creditDays.creditPeriod;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
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
