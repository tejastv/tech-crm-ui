export interface PaginationType<T> {
  count: number;
  limit: number;
  offset: number;
  records: T[];
}
