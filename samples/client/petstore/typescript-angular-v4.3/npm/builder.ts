import {HttpParams} from '@angular/common/http';

export type FormParams = { append(param: string, value: any): void; } | { append(param: string, value: any): HttpParams; };

export function appendMutateFormParams(formParams: { append(param: string, value: any): void; }, param: string, value: any): FormParams {
  formParams.append(param, value);
  return formParams;
}

export function appendFluentFormParams(formParams: { append(param: string, value: any): HttpParams; }, param: string, value: any): FormParams {
  return formParams.append(param, value);
}
