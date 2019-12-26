import { ListResponse } from "./listResponse";
export class ResponseData<T> {
  status: string;
  data: T;
}
