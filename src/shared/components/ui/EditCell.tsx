import React, { MouseEvent } from "react";
// import { Button } from "./Button";

export const EditCell: React.FC<{ row: any; table: any }> = ({
  row,
  table,
}) => {
  const meta = table.options.meta;

  const setEditedRows = (e: MouseEvent<HTMLButtonElement>) => {
    const elName = e.currentTarget.name;
    meta?.setEditedRows((old: []) => ({
      ...old,
      [row.id]: !old[row.id],
    }));
    if (elName !== "edit") {
      meta?.revertData(row.index, e.currentTarget.name === "cancel");
    }
  };

  return (
    <div className="edit-cell-container">
      {meta?.editedRows[row.id] ? (
        <div className="edit-cell">
          <button type="button" onClick={setEditedRows} name="cancel" className={"btn btn-danger btn-sm"}>
            X
          </button>{" "}
          <button type="button" onClick={setEditedRows} name="done" className={"btn btn-danger btn-sm"}>
            ✔
          </button>
        </div>
      ) : (
        <button type="button" onClick={setEditedRows} name="edit" className={"btn btn-danger btn-sm"}>
          ✐
        </button>
      )}
    </div>
  );
};
