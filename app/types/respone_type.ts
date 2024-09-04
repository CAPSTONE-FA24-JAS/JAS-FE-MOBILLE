export interface Response<T> {
  code: number;
  message: string;
  isSuccess: boolean;
  data: T;
  errorMessages: string;
}
