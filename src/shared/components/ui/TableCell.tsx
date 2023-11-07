import { ChangeEvent, useEffect, useState } from "react";

type Option = {
  label: string;
  value: string;
};

export const TableCell: React.FC<{
  getValue: any;
  row: any;
  column: any;
  table: any;
}> = ({ getValue, row, column, table }) => {
  const initialValue = getValue();
  const columnMeta = column.columnDef.meta;
  const tableMeta = table.options.meta;
  const [value, setValue] = useState(initialValue || ""); // Initialize to an empty string

  useEffect(() => {
    setValue(initialValue || "");
  }, [initialValue]);

 
  const setCellData = (e: any) => {
    console.log(row);
    
    tableMeta?.updateData(row, column.id, e.target.value);
  }

  const displayValidationMessage = <
    T extends HTMLInputElement | HTMLSelectElement
  >(
    e: ChangeEvent<T>
  ) => {
    if (columnMeta?.validate) {
      const isValid = columnMeta.validate(e.target.value);
      if (isValid) {
        e.target.setCustomValidity("");
      } else {
        e.target.setCustomValidity(columnMeta.validationMessage);
      }
    }
  };

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("innn 2");
    
    displayValidationMessage(e);
    // setValue(e.target.value);
    // tableMeta?.updateData(row.index, column.id, e.target.value);
  };

  if (tableMeta?.editedRows[row.id]) {
    return columnMeta?.type === "select" ? (
      <select onChange={onSelectChange} value={value}>
        {columnMeta?.options?.map((option: Option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    ) : (
      <input
        onChange={(e) => setCellData(e)}
        // onBlur={onBlur}
        type={columnMeta?.type || "text"}
      />
    );
  }
  return <span>{value}</span>;
};
