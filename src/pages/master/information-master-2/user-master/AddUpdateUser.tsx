import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  NewInput,
  NewSelect,
} from "@shared/index";
import {
  FormUserType,
  UserType,
  addUserFormFields,
  useUserApiCallHook,
} from "@master/index";
import { useLocation, useParams } from "react-router-dom";

export const AddUpdateUser: React.FC = () => {
  const params = useParams();
  const { state: userData } = useLocation();

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

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormUserType>();
  const { addUserMutation, updateUserMutation } = useUserApiCallHook();
  const { mutateAsync: addUser } = addUserMutation();
  const { mutateAsync: updateUser } = updateUserMutation();

  const mapFormUsertoUser = (formUserData: FormUserType) => {
    let userData: Partial<UserType> = {
      user: formUserData.loginId,
      password: formUserData.password,
      username: formUserData.userName,
      usertype: formUserData.userType.value,
    };
    return userData;
  };

  const mapUsertoFormUser = (userData: UserType) => {
    let formUserData: Partial<FormUserType> = {
      loginId: userData.user,
      password: userData.password,
      userName: userData.username,
      userType: addUserFormFields.userTypeData[userData.usertype],
    };
    return formUserData;
  };

  useEffect(() => {
    if (params.id) reset(mapUsertoFormUser(userData));
  }, [params.id]);

  const onSubmit = handleSubmit((formUserData): void => {
    let userData: Partial<UserType> = mapFormUsertoUser(formUserData);
    if (params.id && userData) {
      updateUser({ id: +params.id, ...userData });
    } else {
      addUser(userData);
    }
  });

  return (
    <>
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
                  config={addUserFormFields.userName}
                />
                <NewSelect
                  errors={errors}
                  register={register}
                  control={control}
                  config={addUserFormFields.userType}
                />
              </div>
              <div className="col-md-6 col-xs-12">
                <NewInput
                  errors={errors}
                  register={register}
                  config={addUserFormFields.login}
                />
                <NewInput
                  errors={errors}
                  register={register}
                  config={addUserFormFields.password}
                />
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
      </Card>
    </>
  );
};
