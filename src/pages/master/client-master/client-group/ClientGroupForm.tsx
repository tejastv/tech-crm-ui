import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  InputWithText,
  Select,
  SingleCheckbox,
} from "@shared/index";
import {
  ClientGroupFormType,
  addClientGroupFormFields,
  useClientGroupApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const ClientGroupForm: React.FC = () => {
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: "Add Group Master",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
  };

  const methods = useForm<ClientGroupFormType>();
  const {
    addClientGroupMutation,
    getClientGroupData,
    updateClientGroupMutation,
    getClientGroupBasedOnIdData,
    getClientGroup,
  } = useClientGroupApiCallHook();
  const { mutateAsync: addClientGroup } = addClientGroupMutation();
  const { mutateAsync: updateClientGroup } = updateClientGroupMutation();

  if (params.id) {
    const { data: clientGroupData, isSuccess: clientGroupDataSuccess } =
      getClientGroupData("" + params.id);
    const { data: clientGroupBasedOnIdData } = getClientGroupBasedOnIdData(
      "" + params.id
    );
    const { data: clientGroupListData } = getClientGroup();
    getClientGroupBasedOnIdData("" + params.id);
    if (clientGroupBasedOnIdData) {
      addClientGroupFormFields.searchClient.config.options,
        (addClientGroupFormFields.searchClient.config.setData =
          selectOptionsMaker(
            clientGroupBasedOnIdData,
            "clientID",
            "clientName"
          ));
    }
    if (clientGroupListData) {
      addClientGroupFormFields.moveToClient.config.options = selectOptionsMaker(
        Object.values(clientGroupListData),
        "groupId",
        "groupName"
      );
    }
    if (clientGroupDataSuccess) {
      addClientGroupFormFields.clientGroupName.config.setData =
        clientGroupData.groupName;
      addClientGroupFormFields.showBOBDetails.config.setData =
        clientGroupData.showBOBDetails;
      addClientGroupFormFields.showBOIDetails.config.setData =
        clientGroupData.showBOIDetails;
      addClientGroupFormFields.showIOBDetails.config.setData =
        clientGroupData.showIOBDetails;
      addClientGroupFormFields.showSouthIndianBankDetails.config.setData =
        clientGroupData.showSouthIndianBankDetails;
      addClientGroupFormFields.showUnionBankDetails.config.setData =
        clientGroupData.showUnionBankDetails;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((clientGroupData): void => {
    let data: any = { ...clientGroupData };
    if (params.id && clientGroupData) {
      let ids = [];
      let updateClientGroupObj = {
        ...data,
      };
      if (data.clientIds.length > 0) {
        ids = data.clientIds.map((data: any) => data.value);
        updateClientGroupObj["clientIds"] = ids;
      }
      updateClientGroup({
        id: +params.id,
        ...updateClientGroupObj,
        clintGroupIdToMove: data.clintGroupIdToMove.value,
      });
    } else {
      addClientGroup(data);
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
                    config={addClientGroupFormFields.clientGroupName.config}
                  />
                </div>
              </div>
              <div className="col-md-6 col-xs-12 mb-3">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-9">
                    <small className="text-center badge badge-default badge-primary form-text text-white">
                      <InputWithText
                        config={addClientGroupFormFields.namenote.config}
                      />
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-9">
                    <SingleCheckbox
                      config={addClientGroupFormFields.showBOBDetails.config}
                    />
                    <SingleCheckbox
                      config={addClientGroupFormFields.showBOIDetails.config}
                    />
                    <SingleCheckbox
                      config={addClientGroupFormFields.showIOBDetails.config}
                    />
                    <SingleCheckbox
                      config={
                        addClientGroupFormFields.showSouthIndianBankDetails
                          .config
                      }
                    />
                    <SingleCheckbox
                      config={
                        addClientGroupFormFields.showUnionBankDetails.config
                      }
                    />
                  </div>
                </div>
              </div>
              {params.id && (
                <>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <Select
                        config={addClientGroupFormFields.searchClient.config}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-xs-12">
                      <Select
                        config={addClientGroupFormFields.moveToClient.config}
                      />
                    </div>
                  </div>
                </>
              )}
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
