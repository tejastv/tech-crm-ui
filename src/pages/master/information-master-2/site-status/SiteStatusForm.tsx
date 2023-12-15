import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import { ActionButtons, BorderLayout, Card, NewInput } from "@shared/index";
import {
  SiteStatusFormType,
  SiteStatusType,
  siteStatusFormFields,
  useSiteStatusApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";
import { cleanupObject } from "@utils/index";

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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SiteStatusFormType>();
  const { state: localSiteStatusData } = useLocation();
  const { addSiteStatusMutation, getSiteStatusData, updateSiteStatusMutation } =
    useSiteStatusApiCallHook();
  const { mutateAsync: addSiteStatus } = addSiteStatusMutation();
  const { mutateAsync: updateSiteStatus } = updateSiteStatusMutation();

  const { data: siteStatus } = getSiteStatusData(
    "" + params.id,
    !localSiteStatusData && params.id !== undefined
  );

  const mapSiteStatusDataToSiteStatusForm = (
    siteStatusData: SiteStatusType
  ) => {
    let siteStatusFormData: Partial<SiteStatusFormType> = {
      siteStatus: siteStatusData.siteStatus,
    };
    return siteStatusFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (siteStatus && Object.values(siteStatus).length > 0) {
        reset(mapSiteStatusDataToSiteStatusForm(siteStatus));
      }
    }
  }, [params.id, siteStatus]);

  const mapSiteStatusRequest = (siteStatusFormData: SiteStatusFormType) => {
    let siteStatusData: Partial<SiteStatusType> = {
      siteStatus: siteStatusFormData.siteStatus,
    };
    return cleanupObject(siteStatusData);
  };

  const onSubmit = handleSubmit((siteStatus: SiteStatusFormType): void => {
    let reqObj: Partial<SiteStatusType> = mapSiteStatusRequest(siteStatus);
    if (params.id && siteStatus) {
      updateSiteStatus({ id: +params.id, ...reqObj });
    } else {
      addSiteStatus(reqObj);
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
                config={siteStatusFormFields.siteStatus}
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
