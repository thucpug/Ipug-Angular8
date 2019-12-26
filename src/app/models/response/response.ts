import { ListResponse } from "./listResponse";
export class Response<T> {
  status: string;
  data: ListResponse<T>;
}
