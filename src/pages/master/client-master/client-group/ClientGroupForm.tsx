import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  InputWithText,
  NewCheckbox,
  NewInput,
  NewSelect,
} from "@shared/index";
import {
  ClientGroupFormType,
  ClientGroupType,
  addClientGroupFormFields,
  useClientGroupApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";
import { selectOptionsMaker } from "@utils/selectOptionsMaker";
import _ from "lodash";
// import { selectOptionsMaker } from "@utils/selectOptionsMaker";

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

  const [clientGroupOption, setClientGroupOption] =
    useState<ClientGroupType[]>();

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ClientGroupFormType>();
  const {
    // addClientGroupMutation,
    getClientGroupData,
    // updateClientGroupMutation,
    getClientGroup,
    // getClientGroupBasedOnIdData,
  } = useClientGroupApiCallHook();
  // const { mutateAsync: addClientGroup } = addClientGroupMutation();
  // const { mutateAsync: updateClientGroup } = updateClientGroupMutation();
  const { data: clientGroupData } = getClientGroupData(
    "" + params.id,
    params.id != undefined
  );

  const { data: clientGroupListData } = getClientGroup();

  useEffect(() => {
    if (clientGroupListData) {
      setClientGroupOption(
        _.orderBy(Object.values(clientGroupListData), ["groupName"], ["asc"])
      );
    }
  }, [clientGroupListData]);

  if (clientGroupOption?.length) {
    let options = selectOptionsMaker(clientGroupOption, "groupId", "groupName");
    addClientGroupFormFields.moveToClient.config.options = options;
  }

  // const { data: clientGroupBasedOnIdData } = getClientGroupBasedOnIdData(
  //   "" + params.id,
  //   params.id != undefined
  // );

  // console.log(clientGroupBasedOnIdData);

  // if (params.id) {
  //   // const { data: clientGroupBasedOnIdData } = getClientGroupBasedOnIdData(
  //   //   "" + params.id
  //   // );
  //   console.log(clientGroupData);

  //   // if (clientGroupBasedOnIdData) {
  //   //   addClientGroupFormFields.searchClient.config.options,
  //   //     (addClientGroupFormFields.searchClient.config.setData =
  //   //       selectOptionsMaker(
  //   //         clientGroupBasedOnIdData,
  //   //         "clientId",
  //   //         "clientName"
  //   //       ));
  //   // }
  //   // if (clientGroupListData) {
  //   //   addClientGroupFormFields.moveToClient.config.options = selectOptionsMaker(
  //   //     Object.values(clientGroupListData),
  //   //     "groupId",
  //   //     "groupName"
  //   //   );
  //   // }
  //   if (clientGroupDataSuccess) {
  //     addClientGroupFormFields.clientGroupName.config.setData =
  //       clientGroupData.groupName;
  //     addClientGroupFormFields.showBOBDetails.config.setData =
  //       clientGroupData.showBOBDetails;
  //     addClientGroupFormFields.showBOIDetails.config.setData =
  //       clientGroupData.showBOIDetails;
  //     addClientGroupFormFields.showIOBDetails.config.setData =
  //       clientGroupData.showIOBDetails;
  //     addClientGroupFormFields.showSouthIndianBankDetails.config.setData =
  //       clientGroupData.showSouthIndianBankDetails;
  //     addClientGroupFormFields.showUnionBankDetails.config.setData =
  //       clientGroupData.showUnionBankDetails;
  //   }
  // } else {
  //   // useEffect(() => {
  //   //   reset();
  //   // }, []);
  // }

  const mapClientGroupDataToClientGroupForm = (
    clientGroupData: ClientGroupType
  ) => {
    let clientFormData: Partial<ClientGroupFormType> = {
      // clintGroupIdToMove?: number;
      clientIds:
        clientGroupData.clientIds && clientGroupData.clientIds.length
          ? clientGroupData.clientIds
          : [],
      groupName: clientGroupData.groupName,
      showBOBDetails: clientGroupData.showBOBDetails
        ? clientGroupData.showBOBDetails
        : false,
      showUnionBankDetails: clientGroupData.showUnionBankDetails
        ? clientGroupData.showUnionBankDetails
        : false,
      showBOIDetails: clientGroupData.showBOIDetails
        ? clientGroupData.showBOIDetails
        : false,
      showSouthIndianBankDetails: clientGroupData.showSouthIndianBankDetails
        ? clientGroupData.showSouthIndianBankDetails
        : false,
      showIOBDetails: clientGroupData.showIOBDetails
        ? clientGroupData.showIOBDetails
        : false,
      showIDBIDetails: clientGroupData.showIDBIDetails
        ? clientGroupData.showIDBIDetails
        : false,
      showSBIDetails: clientGroupData.showSBIDetails
        ? clientGroupData.showSBIDetails
        : false,
    };
    return clientFormData;
  };

  useEffect(() => {
    if (params.id) {
      if (clientGroupData && Object.values(clientGroupData).length > 0) {
        // console.log(mapClientGroupDataToClientGroupForm(clientGroupData));
        reset(mapClientGroupDataToClientGroupForm(clientGroupData));
      }
    }
  }, [params.id, clientGroupData]);

  const onSubmit = handleSubmit((clientGroupData): void => {
    let data: any = { ...clientGroupData };
    console.log(data);

    // if (params.id && clientGroupData) {
    //   let ids = [];
    //   let updateClientGroupObj = {
    //     ...data,
    //   };
    //   if (data.clientIds.length > 0) {
    //     ids = data.clientIds.map((data: any) => data.value);
    //     updateClientGroupObj["clientIds"] = ids;
    //   }
    //   updateClientGroup({
    //     id: +params.id,
    //     ...updateClientGroupObj,
    //     clintGroupIdToMove: data.clintGroupIdToMove.value,
    //   });
    // } else {
    //   addClientGroup(data);
    // }
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
                config={addClientGroupFormFields.clientGroupName}
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
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientGroupFormFields.showBOBDetails}
                />
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientGroupFormFields.showBOIDetails}
                />
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientGroupFormFields.showIOBDetails}
                />
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientGroupFormFields.showSouthIndianBankDetails}
                />
                <NewCheckbox
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientGroupFormFields.showUnionBankDetails}
                />
              </div>
            </div>
          </div>
          {params.id && (
            <div className="row">
              <div className="col-md-6 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientGroupFormFields.searchClient}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addClientGroupFormFields.moveToClient}
                />
              </div>
            </div>
          )}
        </BorderLayout>
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
