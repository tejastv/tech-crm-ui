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
  AddUpdateClientGroupType,
  addClientGroupFormFields,
  useClientGroupApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";

export const AddUpdateClientGroup: React.FC = () => {
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

  const methods = useForm<AddUpdateClientGroupType>();
  const {
    addClientGroupMutation,
    getClientGroupData,
    updateClientGroupMutation,
    getClientGroupBasedOnIdData,
  } = useClientGroupApiCallHook();
  const { mutateAsync: addClientGroup } = addClientGroupMutation();
  const { mutateAsync: updateClientGroup } = updateClientGroupMutation();

  if (params.id) {
    const { data: clientGroupData, isSuccess: clientGroupDataSuccess } =
      getClientGroupData("" + params.id);
    const { data: clientGroupBasedOnIdData } = getClientGroupBasedOnIdData(
      "" + params.id
    );
    getClientGroupBasedOnIdData("" + params.id);
    if (clientGroupBasedOnIdData) {
      addClientGroupFormFields.searchClient.config.options = selectOptionsMaker(
        clientGroupBasedOnIdData,
        "clientID",
        "clientName"
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
      console.log(data);
      let updateClientGroupObj = {
        clintId: [data.clintGroupIdToMove.value],
        ClientGroupDto: {
          ...data,
        },
      };
      delete updateClientGroupObj.ClientGroupDto.clintGroupIdToMove;
      updateClientGroup({ id: +params.id, ...updateClientGroupObj });
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
                <div className="row">
                  <div className="col-md-6 col-xs-12">
                    <Select
                      config={addClientGroupFormFields.searchClient.config}
                    />
                  </div>
                </div>
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
