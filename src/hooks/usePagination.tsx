import { PAGINATION_LIMIT } from "@constants/util-constant";
import { useState } from "react";

export const usePagination = (
  defaultTotal: number = 1000,
  defaultOffset: number = 0,
  defaultLimit: number = PAGINATION_LIMIT
) => {
  const limit = defaultLimit;
  const [offset, setOffset] = useState(defaultOffset);
  const [total, setTotal] = useState(defaultTotal);

  const nextButtonClick = () => {
    setOffset(offset + limit);
  };

  const prevButtonClick = () => {
    setOffset(offset - limit);
  };

  const setTotalValue = (total: number) => {
    setTotal(total);
  };

  const isNextEnabled = total > offset + limit;
  const isPrevEnabled = offset > 0;

  return {
    limit,
    offset,
    total,
    nextButtonClick,
    prevButtonClick,
    setTotalValue,
    isNextEnabled,
    isPrevEnabled,
  };
};
