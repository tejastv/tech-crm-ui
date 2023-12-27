import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  ActionButtons,
  BorderLayout,
  Card,
  Loader,
  NewInput,
  NewSelect,
  Table,
  TableType,
} from "@shared/index";
import {
  FormUserType,
  GetUserWiseRights,
  PostUserRoles,
  PostUserWiseMenu,
  UserType,
  addUserFormFields,
  useUserApiCallHook,
} from "@master/index";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";
import Form from "react-bootstrap/esm/Form";

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

  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormUserType>();
  const {
    addUserRolesMutation,
    addUserMutation,
    updateUserMutation,
    getUserWiseRightsMenu,
  } = useUserApiCallHook();

  const { data: allMenus, isFetching } = getUserWiseRightsMenu(
    "" + params.id,
    params.id !== undefined
  );

  useEffect(() => {
    allMenus?.filter((role: GetUserWiseRights) => {
      if (role.rights) {
        let selectedRoles = {} as PostUserWiseMenu;
        selectedRoles.menuId = role.mainMenuId;
        selectedRoles.subMenuId = role.subMenuId;
        setUserMenuRightsData((prevValue) => [
          ...prevValue,
          { ...selectedRoles },
        ]);
      }
    });
  }, [allMenus]);

  console.log(userData);
  const { mutateAsync: addUser } = addUserMutation();
  const { mutateAsync: addUserRoles } = addUserRolesMutation();
  const { mutateAsync: updateUser } = updateUserMutation();

  const mapFormUserToUser = (formUserData: FormUserType) => {
    let userData: Partial<UserType> = {
      user: formUserData.loginId,
      password: formUserData.password,
      username: formUserData.userName,
      userType: formUserData.userType.value,
    };
    return userData;
  };

  const mapUserToFormUser = (userData: UserType) => {
    let formUserData: Partial<FormUserType> = {
      loginId: userData.user,
      password: userData.password,
      userName: userData.username,
      userType: addUserFormFields.userTypeData[userData.userType],
    };
    return formUserData;
  };

  useEffect(() => {
    if (params.id) reset(mapUserToFormUser(userData));
  }, [params.id]);

  const mapFormUserRole = (userRoleData: Array<PostUserWiseMenu>) => {
    let userData: Partial<PostUserRoles> = {
      userId: params.id,
      roles: userRoleData,
    };
    return userData;
  };

  const onSubmit = handleSubmit((formUserData: FormUserType): void => {
    if (params.id && userData && searchParams.get("isEdit") === "true") {
      let userData: Partial<UserType> = mapFormUserToUser(formUserData);
      updateUser({ id: +params.id, ...userData });
    } else if (searchParams.get("isSetting") === "true") {
      let userRoleData: Partial<PostUserRoles> =
        mapFormUserRole(userMenuRights);
      addUserRoles(userRoleData);
    } else {
      let userData: Partial<UserType> = mapFormUserToUser(formUserData);
      addUser(userData);
    }
  });

  let [userMenuRights, setUserMenuRightsData] = useState(
    [] as Array<PostUserWiseMenu>
  );

  const columns: ColumnDef<GetUserWiseRights>[] = [
    {
      id: "srNo",
      cell: (info) => info.getValue(),
      header: () => <>Sr no</>,
    },
    {
      accessorFn: (row) => row.mainMenuCaption,
      id: "mainMenuCaption",
      cell: (info) => info.getValue(),
      header: () => <>Main Menu</>,
    },
    {
      accessorFn: (row) => row.subMenuAction,
      id: "subMenuAction",
      cell: (info) => info.getValue(),
      header: () => <>Sub Menu</>,
    },
    {
      accessorFn: (row) => row.rights,
      id: "rights",
      cell: ({ getValue, row }) => {
        const initialValue = getValue() as boolean;
        // We need to keep and update the state of the cell normally
        const [value, setValue] = useState<boolean>(initialValue);

        // If the initialValue is changed external, sync it up with our state
        React.useEffect(() => {
          setValue(row.original.rights);
        }, [row.original.rights]);

        return (
          <input
            checked={value}
            type="checkbox"
            onChange={(e) => {
              setValue(e.target.checked),
                onRightChange(e.target.checked, row.original);
            }}
            className="editable-cell-style"
          />
        );
      },
      header: () => <>Rights</>,
    },
  ];

  const onRightChange = (event: boolean, selectedMenu: GetUserWiseRights) => {
    if (event) {
      selectedMenu.rights = true;
      let selectedRoles = {} as PostUserWiseMenu;
      selectedRoles.menuId = selectedMenu.mainMenuId;
      selectedRoles.subMenuId = selectedMenu.subMenuId;
      setUserMenuRightsData((prevValue) => [
        ...prevValue,
        { ...selectedRoles },
      ]);
    } else {
      const index = userMenuRights.findIndex(
        (menu) => menu.subMenuId !== selectedMenu.subMenuId
      );
      selectedMenu.rights = false;
      if (index > -1) {
        const finalArray = userMenuRights.splice(index, 1);
        setUserMenuRightsData(finalArray);
      }
    }
  };

  const tableConfig: TableType<GetUserWiseRights> = {
    config: {
      tableName: "User Roles",
      columns: columns,
      tableData: (allMenus && Object.values(allMenus)) || [],
      copyBtn: false,
      csvBtn: false,
      excelBtn: false,
      pdfBtn: false,
      printBtn: false,
      globalSearchBox: false,
      pagination: {
        pageSize: 20,
        nextPreviousBtnShow: true,
        tableMetaDataShow: true,
      },
    },
  };
  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        {searchParams.get("isAdd") === "true" ||
        searchParams.get("isEdit") === "true" ? (
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
          </BorderLayout>
        ) : null}
        {searchParams.get("isSetting") === "true" ? (
          <BorderLayout heading={cardConfig.formTableConfig.heading}>
            <div className="form-group row">
              <Form.Label
                className="col-sm-3 pt-0 pb-0 control-label col-form-label"
                htmlFor="userName"
              >
                User Name: {userData.user}
              </Form.Label>
              <Form.Label
                className="col-sm-3 pt-0 pb-0 control-label col-form-label"
                htmlFor="loginId"
              >
                Login Id: {userData.username}
              </Form.Label>
            </div>
            {!isFetching ? <Table config={tableConfig.config} /> : <Loader />}
          </BorderLayout>
        ) : null}
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
