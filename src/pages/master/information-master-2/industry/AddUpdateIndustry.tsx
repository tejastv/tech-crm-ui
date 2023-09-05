import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  AddUpdateIndustryType,
  addIndustryFormFields,
  useIndustryApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateIndustry: React.FC = () => {
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Industry" : "Add Industry",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const methods = useForm<AddUpdateIndustryType>();
  const { addIndustryMutation, getIndustryData, updateIndustryMutation } =
    useIndustryApiCallHook();
  const { mutate: addIndustry } = addIndustryMutation();
  const { mutate: updateIndustry } = updateIndustryMutation();

  if (params.id) {
    const { data: industryData, isSuccess: industryDataSuccess } =
      getIndustryData("" + params.id);
    if (industryDataSuccess) {
      addIndustryFormFields.industry.config.setData = industryData.industryName;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((industryData) => {
    let data: any = { ...industryData };
    if (params.id && industryData) {
      updateIndustry({ id: +params.id, ...data });
    } else {
      addIndustry(data);
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
                  <Input config={addIndustryFormFields.industry.config} />
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
