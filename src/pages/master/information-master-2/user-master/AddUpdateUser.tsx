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
  FormUserType,
  UserType,
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

  const methods = useForm<FormUserType>();
  const { addUserMutation, updateUserMutation } =
    useUserApiCallHook();
    // getUserData
  const { mutateAsync: addUser } = addUserMutation();
  const { mutateAsync: updateUser } = updateUserMutation();

  if (params.id) {
    
  } else {
    useEffect(() => {
      methods.reset();
    }, []);
  }

  const mapFormUsertoUser = (formUserData:FormUserType) =>{
    let userData: Partial<UserType> = {
      "user": formUserData.loginId, 
      "password": formUserData.password,
      "username": formUserData.userName,
      "usertype": formUserData.userType.value
    }
    return userData;
  } 

  const onSubmit = methods.handleSubmit((formUserData): void => {
    let userData:Partial<UserType> =  mapFormUsertoUser(formUserData);
    if (params.id && userData) {
      updateUser({ id: +params.id, ...userData});
    } else {
      addUser(userData);
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
                  <Input config={addUserFormFields.userName.config} />
                  <Select config={addUserFormFields.userType.config} />
                </div>

                <div className="col-md-6 col-xs-12">
                  <Input config={addUserFormFields.login.config} />
                  <Input config={addUserFormFields.password.config} />
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
