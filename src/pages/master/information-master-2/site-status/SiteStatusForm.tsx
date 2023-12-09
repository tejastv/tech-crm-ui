import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, Input } from "@shared/index";
import {
  SiteStatusFormType,
  siteStatusFormFields,
  useSiteStatusApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const SiteStatusForm: React.FC = () => {
  const params = useParams();

  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update Site Status" : "Add Site Status",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const methods = useForm<SiteStatusFormType>();
  const { addSiteStatusMutation, getSiteStatusData, updateSiteStatusMutation } =
    useSiteStatusApiCallHook();
  const { mutateAsync: addSiteStatus } = addSiteStatusMutation();
  const { mutateAsync: updateSiteStatus } = updateSiteStatusMutation();

  if (params.id) {
    const { data: siteStatus, isSuccess: siteStatusSuccess } =
      getSiteStatusData("" + params.id);
    if (siteStatusSuccess) {
      siteStatusFormFields.sitestatus.config.setData = siteStatus.siteStatus;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((siteStatus): void => {
    let data: any = { ...siteStatus };
    if (params.id && siteStatus) {
      updateSiteStatus({ id: +params.id, ...data });
    } else {
      addSiteStatus(data);
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
                  <Input config={siteStatusFormFields.sitestatus.config} />
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
