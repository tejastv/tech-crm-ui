import { formatDateString } from "@utils/dateFormatter";
import React, { useEffect, useState } from "react";

export const CellInput: React.FC<{
  value: any;
  onBlur: (value: any) => void;
}> = React.memo(({ value, onBlur }) => {
  const [state, setState] = useState<any>(value);
  useEffect(() => {
    setState(value);
  }, [value]);
  return (
    <input
      type="string"
      value={state}
      onBlur={(e) => onBlur(e.target.value)}
      onChange={(e) => setState(e.target.value)}
    />
  );
});

export const CellDatePicker: React.FC<{
  value: string;
  onBlur: (value: string) => void;
}> = React.memo(({ value, onBlur }) => {
  const [state, setState] = useState<string>(
    formatDateString(new Date(value), "y-m-d", "-")
  );
  useEffect(() => {
    setState(formatDateString(new Date(value), "y-m-d", "-"));
  }, [value]);
  return (
    <input
      type="date"
      value={state}
      onBlur={(e) =>
        onBlur(formatDateString(new Date(e.target.value), "y-m-d", "-"))
      }
      onChange={(e) => setState(e.target.value)}
    />
  );
});

export const CellSelect: React.FC<{
  options: { array: Array<any>; label: string; value: string };
  value: any;
  onBlur: (value: string) => void;
}> = React.memo(({ value, onBlur, options }) => {
  const [state, setState] = useState<any>(value);
  useEffect(() => {
    setState(value);
  }, [value]);
  return (
    <select
      onBlur={(e) => onBlur(e.target.value)}
      defaultValue={state}
      value={state}
      onChange={(e) => setState(e.target.value)}
    >
      {options?.array.map((option, index) => (
        <option
          key={`${Math.random().toFixed(3)}${index}`}
          value={option[options.value]}
        >
          {option[options.label]}
        </option>
      ))}
    </select>
  );
});
