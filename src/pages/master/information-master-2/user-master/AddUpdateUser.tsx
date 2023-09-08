import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Input,
  Select,
} from "@shared/index";
import {
  AddUpdateUserType,
  addUserFormFields,
  useUserApiCallHook,
} from "@master/index";
import { useParams } from "react-router-dom";

export const AddUpdateUser: React.FC = () => {
  const params = useParams();
  const cardConfig = {
    formLayoutConfig: {
      mainHeading: params.id ? "Update User" : "Add User",
      heading: "Entry",
    },
    formActionsConfig: {
      heading: "Action Buttons",
    },
    formTableConfig: {
      heading: "Set User Rights",
    },
  };

  const methods = useForm<AddUpdateUserType>();
  const { addUserMutation, getUserData, updateUserMutation } =
    useUserApiCallHook();
  const { mutate: addUser } = addUserMutation();
  const { mutate: updateUser } = updateUserMutation();

  if (params.id) {
    const { data: userData, isSuccess: userDataSuccess } = getUserData(
      "" + params.id
    );
    if (userDataSuccess) {
      // addUserFormFields.creditdays.config.setData = userData.creditPeriod;
    }
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const onSubmit = methods.handleSubmit((userData): void => {
    let data: any = { ...userData };
    if (params.id && userData) {
      updateUser({ id: +params.id, ...data });
    } else {
      addUser(data);
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
                  <Input config={addUserFormFields.username.config} />
                  <Select config={addUserFormFields.usertype.config} />
                </div>

                <div className="col-md-6 col-xs-12">
                  <Input config={addUserFormFields.username.config} />
                  <Input config={addUserFormFields.usertype.config} />
                </div>
              </div>
              <BorderLayout heading={cardConfig.formTableConfig.heading}>
                {/* <Table/> */}
              </BorderLayout>
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
