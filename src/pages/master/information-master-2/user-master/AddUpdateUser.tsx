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
  UserType,
  addUserFormFields,
  useUserApiCallHook,
} from "@master/index";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { ColumnDef } from "@tanstack/react-table";

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
  console.log();
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<FormUserType>();
  const { addUserMutation, updateUserMutation, getAllRightsMenu } =
    useUserApiCallHook();

  const { data: allMenus, isFetching } = getAllRightsMenu();

  const { mutateAsync: addUser } = addUserMutation();
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

  const onSubmit = handleSubmit((formUserData): void => {
    let userData: Partial<UserType> = mapFormUserToUser(formUserData);
    if (params.id && userData) {
      updateUser({ id: +params.id, ...userData });
    } else {
      addUser(userData);
    }
  });

  let [userMenuRights, setUserMenuRightsData] = useState(
    Array<GetUserWiseRights>
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
      header: () => <>Main Menu</>,
    },
    {
      accessorFn: (row) => row.rights,
      id: "rights",
      cell: ({ getValue, row, column: { id } }) => {
        const initialValue = getValue() as boolean;
        // We need to keep and update the state of the cell normally
        const [value, setValue] = React.useState<boolean>(initialValue);

        // If the initialValue is changed external, sync it up with our state
        React.useEffect(() => {
          setValue(initialValue || false);
        }, [initialValue]);

        return (
          <input
            checked={value}
            type="checkbox"
            onChange={(e) => {
              onRightChange(e.target.checked, row.original),
                setValue(e.target.checked);
            }}
            className="editable-cell-style"
          />
        );
      },
      header: () => <>Rights</>,
    },
  ];

  const onRightChange = (event: boolean, selectedMenu: GetUserWiseRights) => {
    console.log(event, selectedMenu);
    if (event) {
      selectedMenu.rights = "1";
      // setUserMenuRightsData([{ ...selectedMenu }]);
    } else {
      const index = userMenuRights.indexOf(selectedMenu);
      if (index > -1) {
        const finalArray = userMenuRights.splice(index, 1);
        // setUserMenuRightsData(finalArray);
      }
    }
    console.log(userMenuRights);
  };

  const tableConfig: TableType<GetUserWiseRights> = {
    config: {
      tableName: "Fin. Year",
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
  console.log(searchParams.get("isEdit"));
  return (
    <Card config={cardConfig.formLayoutConfig}>
      <form
        onSubmit={onSubmit}
        noValidate
        autoComplete="off"
        className="p-t-20"
      >
        {searchParams.get("isEdit") === "true" ? (
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
        ) : (
          <BorderLayout heading={cardConfig.formTableConfig.heading}>
            {!isFetching ? <Table config={tableConfig.config} /> : <Loader />}
          </BorderLayout>
        )}
        <BorderLayout heading={cardConfig.formActionsConfig.heading}>
          <ActionButtons />
        </BorderLayout>
      </form>
    </Card>
  );
};
