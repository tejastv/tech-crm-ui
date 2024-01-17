import * as XLSX from "xlsx";

const generateExcelData = (internalTableRef: any) => {
  const table = internalTableRef.current;
  const ws = XLSX.utils.table_to_sheet(table);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
  return XLSX.write(wb, { bookType: "xlsx", type: "array" });
};

export const downloadExcel = (tableData: any, internalTableRef: any) => {
  const excelData = generateExcelData(internalTableRef);
  const blob = new Blob([excelData], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Mirainform-CRM Software-${tableData.config.tableName}.xlsx`;
  a.click();
  window.URL.revokeObjectURL(url);
};
